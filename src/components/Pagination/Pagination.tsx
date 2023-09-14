import React from "react";
import "../Pagination/pagination.scss";
interface props {
  todosPerPage: number;
  totalTodos: number;
  pagintate: (pageNumber: number) => void;
}
const Pagination: React.ComponentType<props> = ({
  todosPerPage,
  totalTodos,
  pagintate,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((num) => (
          <li onClick={() => pagintate(num)}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
