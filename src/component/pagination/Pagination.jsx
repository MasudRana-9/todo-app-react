import React , {useEffect} from "react"

const Pagination = ({ currentPage , setCurrentPage , perPage , data , onRenderData }) => {


    const totalData = data.length
    const totalPage = Math.ceil( totalData / perPage )
    const startPage = currentPage * perPage - perPage ;
	const endPage = startPage + perPage;

    //Create Rendering Data
    useEffect(() => {
        const allTodos = data.slice(startPage, endPage);
        onRenderData(allTodos);
      }, [currentPage , data, perPage]);

    // build page numbers list based on total number of pages
    const pages = []
    for (let index = 1; index <= totalPage ; index++) {
      pages.push(index)
    }

    //handle Click
    const handlePageChange  = (e) => {
      e.preventDefault()
      setCurrentPage(parseInt(e.target.id))
    }

    //handle prev button
    const handlePrevBtn = (e) => {
      e.preventDefault()
      currentPage != pages[0] ? setCurrentPage(currentPage - 1) : null 
    }

    //handle next button
    const handleNextBtn = (e) => {
      e.preventDefault()
      currentPage < totalPage ? setCurrentPage(currentPage + 1) : null 
    }


  return (
        <div className="pagination">
        <button onClick={handlePrevBtn} disabled={currentPage === pages[0]}> Prev</button> 
        { pages.map( page => {
          return <button disabled={currentPage === page } onClick={handlePageChange} id={page} key={page} > {page} </button> 
        })}
        <button onClick={handleNextBtn} disabled={ currentPage >= totalPage} > Next</button>  
      </div>
      )
};

export default Pagination ;
