import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import { TodoMas } from "../../interface/MyTodos";

interface props {
  mainTodoMas: TodoMas[];
}
const Header: React.FC<props> = ({ mainTodoMas }) => {
  const [count, SetCount] = React.useState<number>(0);
  const allMas = useAppSelector((state) => state.todoAc.todos);
  const SetCounter = () => {
    const c1 = allMas.filter((mas) => mas.completed).length;
    const c2 = mainTodoMas.filter((mas) => mas.completed).length;
    SetCount(c1 + c2);
  };

  React.useEffect(() => {
    SetCounter();
  }, [allMas, mainTodoMas]);
  return (
    <header className="header">
      <div className="container">
        <div className="nav">
          <h1 className="logo">ALL_FUNCK</h1>
          <ul className="menu">
            <Link to="/" className="listItem">
              You Todos
            </Link>
            <Link to="all" className="listItem">
              All Todos
            </Link>
            <Link to="agree" className="listItem relative">
              Agree Todos
              <p className="absolute -top-7 -right-5  bg-blue-300 text-white py-1 px-3 text-center rounded-3xl">
                {count}
              </p>
            </Link>
          </ul>
          <button className="button-53">See More</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
