import React from "react";
import "./main.scss";
import { TodoMas } from "../../interface/MyTodos";

interface props {
  mainTodoMas: TodoMas[];
  setMainTodoMas: React.Dispatch<React.SetStateAction<TodoMas[]>>;
}
const Main: React.ComponentType<props> = ({ mainTodoMas, setMainTodoMas }) => {
  const [inptValue, setInputValue] = React.useState<string>("");

  const SetMainTodo = () => {
    const item: TodoMas = {
      id: mainTodoMas.length + 1,
      title: inptValue,
      completed: false,
    };
    if (inptValue) {
      setMainTodoMas([...mainTodoMas, item]);
      localStorage.setItem("myPosts", JSON.stringify([...mainTodoMas, item]));
      setInputValue("");
    }
  };
  const deliteMas = (id: string | number) => {
    const updatedTodoMas = mainTodoMas.filter((mas) => mas.id !== id);
    setMainTodoMas(updatedTodoMas);
    localStorage.setItem("myPosts", JSON.stringify(updatedTodoMas));
  };

  const setCompleted = (id: string | number) => {
    const updateMas = mainTodoMas.map((mas) => {
      return mas.id === id ? { ...mas, completed: !mas.completed } : mas;
    });
    setMainTodoMas(updateMas);
    localStorage.setItem("myPosts", JSON.stringify(updateMas));
  };

  React.useEffect(() => {
    const dataMas = JSON.parse(localStorage.getItem("myPosts") || "[]");
    setMainTodoMas(dataMas);
  }, []);
  return (
    <main>
      <div className="leftSide">
        <h1 className="zag">Set Todo</h1>
        <div className="inputBlock">
          <form>
            <input
              value={inptValue}
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
              name="name"
              className="question"
              id="nme"
              required
              placeholder="..."
            />
            <label></label>
          </form>
          <button className="button-51" onClick={() => SetMainTodo()}>
            Set Todo
          </button>
        </div>
      </div>
      <div className="rightSide">
        <h1 className=" ">You Todos</h1>
        <div
          className={
            mainTodoMas.length >= 4 ? "todosFlex scrolWindow" : "todosFlex"
          }
        >
          {mainTodoMas?.map((mas) => (
            <div
              key={mas.id}
              className={mas.completed ? "todoItem complete" : "todoItem "}
              onDoubleClick={() => setCompleted(mas.id)}
            >
              <span className="todoItemIndex">{mas.id}</span>
              <p className="todoItemText">{mas.title}</p>
              <button className="button-45" onClick={() => deliteMas(mas.id)}>
                delit
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
