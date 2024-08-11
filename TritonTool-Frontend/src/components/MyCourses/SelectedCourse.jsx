import React from 'react'

export default function SelectedCourse({selectedCourse, setSelectedCourse, handleDeleteCourse}) {
  return (
    <div id='selectedArea' className='card'>
        {selectedCourse ? (
          <>
            <p><strong>{selectedCourse.course_name} ({selectedCourse.credits})</strong></p>
            <p>{selectedCourse.description}</p>
            <p><strong>Prerequisites:</strong>{selectedCourse.prerequisites}</p>
            <p><strong>Notes:</strong>{selectedCourse.notes}</p>

            <button className='input deleteButton' onClick={() => handleDeleteCourse(selectedCourse.course_id)}>Delete Course</button>
            <button className='input' onClick={() => setSelectedCourse(null)}>Clear Selection</button>
          </>
        ) : (
          <p>Selected courses will appear here.</p>
        )}
    </div>
  )
}
