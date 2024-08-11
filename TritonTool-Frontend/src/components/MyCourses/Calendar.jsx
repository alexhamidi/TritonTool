import React, { useEffect, useState } from 'react';
import { DndContext, DragOverlay, useDraggable, useDroppable } from '@dnd-kit/core';


export default function Calendar({
    getCourseById,
    getCoursesByQuarterAndCalendar,
    setSelectedCourse,
    selectedCourse,
    calendars,
    handleCalendarChange,
    currentCalendar,
    setAddCalendar,
    addCalendar,
    handleAddCalendar,
    setNewCalendar,
    newCalendar,
    handleDeleteCalendar,
    quarters,
    moveCourse
}) {
    useEffect(() => {
        if (calendars.length > 0 && !sessionStorage.getItem("currentCalendar")) {
            handleCalendarChange(calendars[0].calendar_name);
        }
    }, [calendars]);

    const [activeId, setActiveId] = useState(null);

    function Draggable({ course, isSelected, onClick }) {
        const { attributes, listeners, setNodeRef, transform } = useDraggable({
            id: course.course_id,
        });
    
        const style = transform ? {
            transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        } : undefined;
    
        return (
            <div
                ref={setNodeRef}
                className={`tableCell ${isSelected ? 'selection' : ''}`}
                onClick={onClick}
            >
                {course.course_name}
                <i 
                    className="fa-solid fa-grip-vertical drag fa-sm"
                    {...listeners}
                    {...attributes}
                    style={style}
                ></i>
            </div>
        );
    }

    function Droppable({ id, children }) {
        const { setNodeRef } = useDroppable({
        id: id,
        });
    
        return (
        <td ref={setNodeRef}>
            {children}
        </td>
        );
    }

    function handleDragStart(event) {
        const { active } = event;
        setActiveId(active.id);
    }

    async function handleDragEnd(event) {
        const { active, over } = event;
        if (over && active.id !== over.id) {
            const courseId = active.id;
            const targetQuarter = over.id
            await moveCourse(courseId, targetQuarter);  
        }
        setActiveId(null);
    }
    

    return (
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <table id="calendar">
        <thead>
            <tr id='topCalendarHead'>
            <th></th>
            <th>
                <button className="calendarOption" onClick={handleDeleteCalendar}>
                <p>Delete Calendar</p>
                <i className="fa-trash fa-solid"></i>
                </button>
            </th>
            <th colSpan="2">   
                <select 
                id="calendarSelect" 
                onChange={(event) => handleCalendarChange(event.target.value)}
                value={currentCalendar}
                >
                {calendars.length === 0 && <option value="">Choose Calendar</option>}
                {calendars.map(calendar => (
                    <option key={calendar.calendar_id} value={calendar.calendar_name}>
                    {calendar.calendar_name}
                    </option>
                ))}
                </select>
            </th>
            <th>
                {!addCalendar ? (
                <button className="calendarOption" onClick={() => setAddCalendar(true)}>
                    <p>Add Calendar</p>
                    <i className="fa-plus fa-solid"></i>
                </button>
                ) : (
                <form id="addCalendarForm" onSubmit={(event) => {
                    event.preventDefault();
                    handleAddCalendar();
                }}>
                    <input 
                    type="text" 
                    value={newCalendar}
                    onChange={(event) => setNewCalendar(event.target.value)}
                    required
                    />
                    <button id="cancelCalendarAdd" type="button" onClick={() => {setAddCalendar(false);setNewCalendar('')}}>
                    <i className="fa-solid fa-xmark"></i>
                    </button>
                    <button id="addCalendarSubmit" type="submit">Add</button>
                </form>
                )}
            </th>
            </tr>
            <tr>
            {quarters.map((quarter, index) => (
                <th key={quarter || index}>{quarter}</th>
            ))}
            </tr>
        </thead>
        <tbody>
            <tr>
                {quarters.map((quarter, index) => (
                <Droppable key={index} id={quarter}>
                    {getCoursesByQuarterAndCalendar(quarter, (quarter === 'fulfilled' ? quarter : currentCalendar)).map(course => (
                    <Draggable
                        key={course.course_id}
                        course={course}
                        isSelected={selectedCourse?.course_id === course.course_id}
                        onClick={() => setSelectedCourse(course)}
                    />
                    ))}
                </Droppable>
                ))}
            </tr>
            </tbody>
        </table>
        <DragOverlay>
            {activeId ? (
            <div className="tableCell">
                {getCourseById(activeId).course_name}
            </div>
            ) : null}
        </DragOverlay>
        </DndContext>
    );
    }


