import React from "react";
//import style from "./../Agree/agree.module.scss";
import { TodoMas } from "../../interface/MyTodos";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { FetchAllTodos } from "../../redux/slices/TodoSlice";
interface props {
  mainTodoMas: TodoMas[];
  setMainTodoMas: React.Dispatch<React.SetStateAction<TodoMas[]>>;
}
const AgreePage: React.FC<props> = ({ setMainTodoMas, mainTodoMas }) => {
  const dispatch = useAppDispatch();
  const allMas = useAppSelector((state) => state.todoAc);

  const isAgreeMyMas = mainTodoMas.some((mas) => mas.completed === true);
  const isAgreeAllMas = allMas.todos.some((mas) => mas.completed === true);

  React.useEffect(() => {
    const dataMas = JSON.parse(localStorage.getItem("myPosts") || "[]");
    setMainTodoMas(dataMas);
    dispatch(FetchAllTodos());
  }, []);
  return (
    <div className=" flex flex-row justify-between w-full my-5 gap-4">
      <div className="  flex flex-col border border-blue-700 w-1/2 py-10 px-10  min-h-300 gap-5">
        <h1 className="text-3xl  text-cyan-600 ">You Agree Todos</h1>
        <div className=" flex flex-col w-full px-3">
          <div className=" flex gap-3 flex-col  w-full text-center ">
            {mainTodoMas.length <= 0 || isAgreeMyMas === false ? (
              <p className="border border-red-600 m-10 text-xl">
                У вас немає виконаних завданнь
              </p>
            ) : (
              mainTodoMas?.map(
                (mas: TodoMas) =>
                  mas.completed && (
                    <p
                      key={mas.id}
                      className="border border-green-500 text-xl text-green-500 cursor-pointer"
                    >
                      {mas.title}
                    </p>
                  )
              )
            )}
          </div>
        </div>
      </div>
      <div className=" flex flex-col border border-blue-700 w-1/2 py-10 px-10  min-h-300 gap-5">
        <h1 className="text-3xl  text-cyan-600 text-right">All Agree Todos</h1>
        <div className=" flex flex-col w-full px-3">
          <div className="flex gap-3 flex-col  w-full text-center">
            {allMas.todos.length <= 0 || isAgreeAllMas === false ? (
              <p className="border border-red-600 m-10 text-xl">
                У інших людей немає виконаних завданнь
              </p>
            ) : (
              allMas.todos.map(
                (mas) =>
                  mas.completed && (
                    <p
                      key={mas.id}
                      className="border border-green-500 text-xl text-green-500 cursor-pointer"
                    >
                      {mas.title}
                    </p>
                  )
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgreePage;
