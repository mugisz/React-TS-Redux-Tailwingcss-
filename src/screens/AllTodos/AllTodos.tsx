import React from "react";
import "./allTodos.scss";

import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { FetchAllTodos } from "../../redux/slices/TodoSlice";
import Pagination from "../../components/Pagination/Pagination";

function AllTodos() {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const todosPerPage: number = 3;

  const mas = useAppSelector((state) => state.todoAc);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const lastTodosIndex = currentPage * todosPerPage;
  const firstTodosIndex = lastTodosIndex - todosPerPage;
  const currentTodosPage = mas.todos.slice(firstTodosIndex, lastTodosIndex);

  const pagintate = (pageNumber: number) => setCurrentPage(pageNumber);
  React.useEffect(() => {
    dispatch(FetchAllTodos());
  }, []);
  console.log(mas);
  return (
    <div className="container">
      <div className="allTodos">
        <h1>You will see all todo of users from jsonPlaceholder</h1>
        <div className="AlltodosFlex">
          {currentTodosPage?.map((mas) => (
            <div className="AlltodosItem">
              <span className="AlltodoItemIndex">{mas.id}</span>
              <p className="AlltodoItemText">{mas.title}</p>
              <button
                onClick={() => navigate(`user/${mas.id}`)}
                className="button-79"
              >
                See more about users
              </button>
            </div>
          ))}
          <Pagination
            pagintate={pagintate}
            todosPerPage={todosPerPage}
            totalTodos={mas.todos.length}
          />
        </div>
      </div>
    </div>
  );
}

export default AllTodos;
