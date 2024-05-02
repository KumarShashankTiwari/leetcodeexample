import React from 'react'

const Pagination = () => {
  return (
    <div><nav aria-label="Page navigation example">
    <ul className="pagination pagination-md justify-content-end">
      <li className="page-item"><span className="page-link">&laquo;</span></li>
      <li className="page-item"><span className="page-link" >&lsaquo;</span></li>
      <li className="page-item"><span className="page-link" href="#">1</span></li>
      <li className="page-item"><span className="page-link" href="#">2</span></li>
      <li className="page-item"><span className="page-link" href="#">3</span></li>
      <li className="page-item"><span className="page-link">&rsaquo;</span></li>
      <li  className="page-item"><span className="page-link">&raquo;</span></li>
    </ul>
  </nav></div>
  )
}

export default Pagination