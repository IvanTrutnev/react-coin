import React from 'react'
import PropTypes from 'prop-types'
import './Pagination.css'

const Pagiantion = (props) => {
  const { page, totalPages, handlePaginationClick } = props;
  return (
    <div className="Pagination">
      <button
        className="Pagination-button"
        onClick={() => handlePaginationClick('prev')}
        disabled={page <= 1}
        >
        &larr;
      </button>

      <span className="Pagination-info">
        page <b>{page}</b> of <b>{totalPages}</b>
      </span>

      <button
        className="Pagination-button"
        onClick={() => handlePaginationClick('next')}
        disabled={page >= totalPages}
        >
        &rarr;
      </button>
    </div>
  )
}

Pagiantion.propTypes = {
  totalPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  handlePaginationClick: PropTypes.func.isRequired,
};

export default Pagiantion;
