import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CourseItem from '../components/CourseSearch/CourseItem';
import Pagination from '../components/CourseSearch/Pagination';
import { useAuthErrorHandler } from '../utils/useAuthErrorHandler';

export default function CourseSearch({authenticated, setAuthenticated, BACKEND_URL}) {
    const [inputValue, setInputValue] = useState('');
    const [dataReturned, setDataReturned] = useState(false)
    const [data, setData] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const coursesPerPage = 5;
    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    const currentCourses = data.slice(indexOfFirstCourse, indexOfLastCourse);
    const [calendars, setCalendars] = useState([])
    const [searchMessage, setSearchMessage] = useState(null);
    const [courseInfo, setCourseInfo] = useState([]); //selectedCalendar, selectedQuarter, message

    //===================================[Authorization and Initialization]===================================
    
    const handleAuthError = useAuthErrorHandler(setAuthenticated);


    useEffect(() => {
        async function fetchCalendars () {
            if (!authenticated) return;
            try {
                const response = await axios.get(`${BACKEND_URL}/api/calendars`, { withCredentials: true });
                setCalendars(response.data);  
            } catch (error) {
                handleAuthError(error)
            }        
        };
        fetchCalendars();
    }, [authenticated, BACKEND_URL, setAuthenticated]);

    //===================================[Logic For Submitting a Search]===================================

    async function onSubmit(e) {
        e.preventDefault();
        setDataReturned(false);
        try {
            const response = await axios.post(`${BACKEND_URL}/api/searchcourse`, 
                {'course_code': inputValue },
                 { withCredentials: true });
            const course_info = response.data.course_info;
            if (Array.isArray(course_info)) {
                setData(course_info);
            } else {
                setData([course_info]);
            }
            setSearchMessage(null);
            setDataReturned(true);
            setCourseInfo([])
            setCurrentPage(1); 
        } catch (error) {   
            handleAuthError(error)
            if (error.response && error.response.status === 404) {
                setSearchMessage('Error: Course Not Found');
            } else {
                setSearchMessage('An error occurred while searching for the course');
            }
        }
    }

    //===================================[Add a course to a user's account]===================================

    async function handleAddCourse(index, item) {
        console.log(item)
        const currentInfo = courseInfo[index];
        if (currentInfo && currentInfo.quarter && (currentInfo.calendar || currentInfo.quarter === 'fulfilled')) {
            const updatedItem = {
                ...item,
                quarter:  currentInfo.quarter,
                calendar_name:currentInfo.quarter === 'fulfilled' ? 'fulfilled' : currentInfo.calendar,
            };    
            try {   
                const response = await axios.post(`${BACKEND_URL}/api/addcourse`, updatedItem, { withCredentials: true });
                setCourseInfo(prevState => {
                    prevState[index] = { ...prevState[index], message: `Course added successfully` };
                    return [...prevState];
                });
            } catch (error) {
                handleAuthError(error)
                let errorMessage;
                if (error.response && error.response.status === 409) {
                    errorMessage = `Course already exists in this quarter and calendar`;
                } else {
                    errorMessage = `Failed to add course ${updatedItem.course_name}`;
                }
                setCourseInfo(prevState => {
                    prevState[index] = { ...prevState[index], message: errorMessage };
                    return [...prevState];
                });
            }
        } else {
            setCourseInfo(prevState => {
                prevState[index] = { ...prevState[index], message: 'Please make all selections' };
                return [...prevState];
            });
        }
    }

    //===================================[Handles Page Change - Used in Pagination]===================================

    function handlePageChange(page) {
        setCourseInfo([])
        setCurrentPage(page)
    }

    return (
        <div className='page' id = 'searchPage'>
            <header id='searchHeader'>
                <h2>Enter department (EX: MATH), Course Name (EX: CSE 20), or department and search term (EX: CSE discrete; LIT LTFR)</h2>
                <form onSubmit={onSubmit}>
                    <input className = 'input' id = 'courseSearch' type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                    <input className = 'input' type="submit" value="Submit"/>
                </form>
                {searchMessage && <div>{searchMessage}</div>}
            </header>
            {dataReturned && (
                <section id ='searchResults'>
                    {currentCourses.map((item, index) => 
                        <CourseItem
                            key = {item.course_code}
                            item = {item}
                            index = {index}
                            authenticated = {authenticated}
                            handleAddCourse = {handleAddCourse}
                            calendars={calendars}
                            setCourseInfo = {setCourseInfo}
                            courseInfo = {courseInfo}
                        />
                    )}
                    <Pagination
                        data = {data}
                        handlePageChange = {handlePageChange}
                        currentPage = {currentPage}
                        coursesPerPage = {coursesPerPage}
                    />                     
                </section>
            )}
        </div>
    );
}