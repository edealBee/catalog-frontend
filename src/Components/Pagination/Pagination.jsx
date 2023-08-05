import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import "./Pagination.css";

const Pagination = ({setCurrentPage, currentPage, count}) => {
  return (
    <>
      <ReactPaginate
        className='Pagination'
        breakLabel="..."
        nextLabel=">"
        onPageChange={(el) => setCurrentPage(el.selected + 1)}
        pageRangeDisplayed={5}
        pageCount={count}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
