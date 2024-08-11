import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Calendar from '../components/MyCourses/Calendar';
import PrerequisiteQuarterRow from '../components/MyCourses/PrerequisiteQuarterRow';
import SelectedCourse from '../components/MyCourses/SelectedCourse';
import { useAuthRedirect } from '../utils/useAuthRedirect';
import { useAuthErrorHandler } from '../utils/useAuthErrorHandler';

export default function MyCourses({authenticated, setAuthenticated, BACKEND_URL}) {
    const [courses, setCourses] = useState([]);
    const [calendars, setCalendars] = useState([]);
    const [currentCalendar, setCurrentCalendar] = useState(sessionStorage.getItem("currentCalendar") || "");
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [addCalendar, setAddCalendar] = useState(false);
    const [newCalendar, setNewCalendar] = useState('');
    const quarters = ['fulfilled', 'summer', 'fall', 'winter', 'spring'];

    useAuthRedirect(authenticated);
    const handleAuthError = useAuthErrorHandler(setAuthenticated);

    async function fetchCourses() {
        try {
            const coursesResponse = await axios.get(`${BACKEND_URL}/api/courses`, { withCredentials: true });
            const coursesWithSegments = await Promise.all(coursesResponse.data.map(async course => {
                const segmentsResponse = await axios.get(`${BACKEND_URL}/api/segments/${encodeURIComponent(course.course_id)}`, {
                    withCredentials: true
                });
                return { ...course, prerequisite_segments: segmentsResponse.data };
            }));
            setCourses(coursesWithSegments);
        } catch (error) {
            handleAuthError(error);
        }
    }
    
    async function fetchCalendars() {
        try {
            const response = await axios.get(`${BACKEND_URL}/api/calendars`, { withCredentials: true });
            setCalendars(response.data);
        } catch (error) {
            handleAuthError(error);
        }
    }

    useEffect(() => {
        if (authenticated) {
            fetchCourses();
            fetchCalendars();
        }
    }, [authenticated, BACKEND_URL]);

    useEffect(() => {
        async function checkTakeable() {
            for (const course of courses) {
                const shouldBeTakeable = course.prerequisite_segments.length === 0 || 
                                         course.quarter === 'fulfilled' || 
                                         course.prerequisite_segments.some(segment => segment.checked);
                if (shouldBeTakeable !== course.takeable) {
                    await handleTakeableChange(course.course_id);
                }
            }
        }
        checkTakeable();
    }, [courses]);

    function handleCalendarChange(calendar) {
        sessionStorage.setItem("currentCalendar", calendar);
        setCurrentCalendar(calendar);
    }

    function getCoursesByQuarterAndCalendar(quarter, calendar_name) {
        return courses.filter(course => course.quarter === quarter && course.calendar_name === calendar_name);
    }

    function getCourseById(course_id) {
        return courses.find(course => course.course_id === course_id);
    }

    async function handlePrerequisiteCheck() {
        const takenCourses = getCoursesByQuarterAndCalendar('fulfilled', 'fulfilled').map(course => course.course_code);
        const results = quarters.slice(1).flatMap(quarter => 
            getCoursesByQuarterAndCalendar(quarter, currentCalendar)
                .filter(course => !course.takeable)
                .map(course => {
                    const newlyTakeable = course.prerequisite_segments.some(segment => {
                        if (segment.checked) return false;
                        const isFulfilledNow = segment.segment_name.split(' and ').every(c => takenCourses.includes(c.trim()));
                        if (isFulfilledNow) handlePrerequisiteChange(course.course_id, segment.segment_id);
                        return isFulfilledNow;
                    });
                    if (newlyTakeable) handleTakeableChange(course.course_id)
                    return { course, newlyTakeable };
                })
        );
        const newlyFulfilled = results.filter(r => r.newlyTakeable).map(r => `${r.course.course_code} (${r.course.quarter})`);
        const stillUnfulfilled = results.filter(r => !r.newlyTakeable).map(r => `${r.course.course_code} (${r.course.quarter})`);
    
        let message = 'Check successful.';
        if (newlyFulfilled.length > 0) message += `\nCredit granted for:\n${newlyFulfilled.join('\n')}\n`;
        if (stillUnfulfilled.length > 0) message += `\nInsufficient credits for:\n${stillUnfulfilled.join('\n')}\n`;
        alert(message);
    }

    async function handleTakeableChange(course_id) {
        try {
            await axios.post(`${BACKEND_URL}/api/updatetakeable`, { course_id }, { withCredentials: true });
            fetchCourses();
        } catch (error) {
            handleAuthError(error);
        }
    }

    async function handlePrerequisiteChange(course_id, segment_id) {
        try {
            await axios.post(`${BACKEND_URL}/api/updatesegment`, 
                { course_id, segment_id }, 
                { withCredentials: true }
            );
            fetchCourses();
        } catch (error) {
            handleAuthError(error);
        }
    }

    async function handleDeleteCourse(course_id) {
        try {
            setSelectedCourse(null);
            await axios.delete(`${BACKEND_URL}/api/deletecourse/${encodeURIComponent(course_id)}`, 
                { withCredentials: true }
            );
            fetchCourses();
        } catch (error) {
            handleAuthError(error);
        }
    }

    async function handleAddCalendar() {
        try {
            setSelectedCourse(null);
            await axios.post(`${BACKEND_URL}/api/addcalendar`, 
                { calendar_name: newCalendar },
                { withCredentials: true }
            );
            setAddCalendar(false);

            handleCalendarChange(newCalendar)
            setNewCalendar('');
            fetchCalendars();
        } catch (error) {
            alert(error.response?.status === 409 ? 'Calendar already exists' : 'Add failed');
            console.error(error);
        }
    }
    
    async function handleDeleteCalendar() {
        try {
            setSelectedCourse(null);
            await axios.delete(`${BACKEND_URL}/api/deletecalendar/${encodeURIComponent(currentCalendar)}`, 
                { withCredentials: true }
            );
            handleCalendarChange('')
            fetchCourses();
            fetchCalendars();
        } catch (error) {
            handleAuthError(error);
        }
    }

    async function moveCourse(courseId, newQuarter) {
        try {
            const course = getCourseById(courseId);
            if (newQuarter == course.quarter) return 
            const updatedCourse = { 
                ...course,  
                quarter: newQuarter,
                calendar_name: newQuarter === 'fulfilled' ? 'fulfilled' : 
                               course.calendar_name === 'fulfilled' ? currentCalendar : 
                               course.calendar_name
            };
            await axios.post(`${BACKEND_URL}/api/addcourse`, updatedCourse, { withCredentials: true });
            await handleDeleteCourse(courseId);
            fetchCourses();
        } catch (error) {
            if (ErrorEvent)
            alert(error.response?.status === 409 ? 'Course already exists here' : 'Failed to move course');
            console.error(error);
        }
    }


    return (
        <div className="page" id="coursePage">
            <section className="top">
                <Calendar
                    moveCourse={moveCourse}
                    getCourseById={getCourseById}
                    getCoursesByQuarterAndCalendar={getCoursesByQuarterAndCalendar}
                    setSelectedCourse={setSelectedCourse}
                    selectedCourse={selectedCourse}
                    handleCalendarChange={handleCalendarChange}
                    currentCalendar={currentCalendar}
                    calendars={calendars}
                    setAddCalendar={setAddCalendar}
                    addCalendar={addCalendar}
                    newCalendar={newCalendar}
                    setNewCalendar={setNewCalendar}
                    handleAddCalendar={handleAddCalendar}
                    handleDeleteCalendar={handleDeleteCalendar}
                    quarters={quarters}
                />
                <SelectedCourse
                    setSelectedCourse={setSelectedCourse}
                    selectedCourse={selectedCourse}
                    handleDeleteCourse={handleDeleteCourse}
                />
            </section>
            <button className="card" id="creditCheck" onClick={handlePrerequisiteCheck}>
                Check which currently fulfilled courses fulfill prerequisites
            </button>
            <section className="bottom">
                {quarters.slice(1, 5).map((season) => (
                    <PrerequisiteQuarterRow
                        key={season}
                        season={season}
                        getCoursesByQuarterAndCalendar={getCoursesByQuarterAndCalendar}
                        handlePrerequisiteChange={handlePrerequisiteChange}
                        currentCalendar={currentCalendar}
                    />
                ))}
            </section>
        </div>
    );
}