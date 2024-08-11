import React from 'react';

export default function PrerequisiteQuarterRow({getCoursesByQuarterAndCalendar, season, handlePrerequisiteChange, currentCalendar}) {
    const quarterCourses = getCoursesByQuarterAndCalendar(season, currentCalendar);
    console.log(quarterCourses)
    return (
        <div className='seasonDiv' key={season}>
            <h2>Required for {season} courses:</h2>
            {quarterCourses.length > 0 ? (
                <div className="seasonRow">
                    {quarterCourses.sort((a, b) => a.course_name.localeCompare(b.course_name)).map((course) => (
                        <div className={`coursePrereq card ${course.takeable ? 'takeable' : 'notTakeable'}`} key={course.course_id}>
                        <h3>{course.course_name}</h3>
                            <div className='coursePrereqCourses'> 
                            {course.prerequisite_segments.length > 0 ? (
                                course.prerequisite_segments.sort((a, b) => a.segment_name.localeCompare(b.segment_name)).map((segment) => (
                                    <label className='checkboxLabel' key={segment.segment_id}> 
                                        <input className='checkbox'
                                            type="checkbox"
                                            name={segment.segment_id}
                                            checked={segment.checked}
                                            onChange={() => handlePrerequisiteChange(course.course_id, segment.segment_id)}
                                        />
                                        {segment.segment_name}
                                    </label>
                                ))
                            ) : (
                                <p>No prerequisites detected for this course :)</p>
                            )}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No courses for this quarter</p>
            )}
        </div>                
    );
}