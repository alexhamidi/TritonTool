import React from 'react'

export default function ({handlePageChange, currentPage, coursesPerPage, data}) {
    const totalPages = Math.ceil(data.length / coursesPerPage);

    return (
        <div id="pagination" className='card borderedCard'>
            <button onClick={()=>handlePageChange(currentPage - 1)} disabled={currentPage === 1}>&lt;</button>
            {/* <span>{currentPage}...{totalPages}</span> */}
            <button className='central'  onClick={()=>handlePageChange(1)} disabled={currentPage === 1}> 1 </button>
            <button className='current central'>{currentPage}</button>
            <button className='central'  onClick={()=>handlePageChange(totalPages)}  disabled={currentPage === totalPages}> {totalPages} </button>
            <button onClick={()=>handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>&gt;</button>
        </div>
    )
    }

    // {currentPage !== 1 &&<button className='central'  onClick={()=>setCurrentPage(1)}> 1 </button>}
    //         <button className='current central'>{currentPage}</button>
    //         {currentPage !== totalPages &&<button className='central'  onClick={()=>setCurrentPage(totalPages)} > {totalPages} </button>}