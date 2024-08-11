import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function CourseItem({item, authenticated, handleAddCourse, calendars, index, courseInfo, setCourseInfo}) {
    const navigate = useNavigate();
      
    return (
        <div className='courseItem card borderedCard'>
            <p><strong>{item.course_name} ({item.credits}) </strong></p>
            <p>{item.description}</p>
            <p><strong>Prerequisites:</strong> {item.prerequisites}</p>
            <p><strong>Notes: </strong>{item.notes}</p>
            
            {authenticated ? ( 
            <div className='courseBottom'>
                {['fulfilled', 'summer',  'fall', 'winter', 'spring'].map(quarter => (
                    <button 
                        className={`input ${courseInfo[index]?.quarter === quarter ? 'selection' : ''}`}
                        key={quarter} 
                        onClick={() => setCourseInfo(prevState => {
                            if (prevState[index]?.quarter === quarter) {
                                const { quarter, ...rest } = prevState[index] || {};
                                prevState[index] = rest;
                            } else {
                                prevState[index] = { ...prevState[index], quarter: quarter };
                            }
                            return [...prevState];
                        })}
                    >
                        {quarter}
                    </button>
                ))}
                {calendars && (courseInfo[index]?.quarter && courseInfo[index].quarter !== 'fulfilled') && 
                    <select 
                        className='input'
                        value={courseInfo[index]?.calendar || ""}
                        onChange={(e) => setCourseInfo(prevState => {
                            prevState[index] = { ...prevState[index], calendar: e.target.value };
                            return [...prevState];
                        })}
                    >
                        <option value="">Select Calendar</option>
                        {calendars.map((calendar, calendarIndex) => (
                            <option key={calendarIndex} value={calendar.calendar_name}>
                                {calendar.calendar_name}
                            </option>
                        ))}
                    </select>
                }
                <button className='input' onClick={() => handleAddCourse(index, item)}> Add Course </button>
                {courseInfo[index]?.message && <div className='courseMessage'>{courseInfo[index].message}</div>}
            </div>
            ) : (
                <strong><button className='input' onClick={() => navigate('/login')}>log in</button> to add courses</strong> 
            )}
        </div>
    )
}