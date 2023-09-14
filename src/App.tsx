import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./screens/Main/Main";
import { Route, Routes } from "react-router-dom";
import AllTodos from "./screens/AllTodos/AllTodos";
import SeeMore from "./screens/SeeMore/SeeMore";
import AgreePage from "./screens/Agree/AgreePage";
import { TodoMas } from "./interface/MyTodos";
function App() {
  const [mainTodoMas, setMainTodoMas] = React.useState<TodoMas[]>([]);
  return (
    <div className="container">
      <Header mainTodoMas={mainTodoMas} />
      <Routes>
        <Route
          path="/"
          element={
            <Main mainTodoMas={mainTodoMas} setMainTodoMas={setMainTodoMas} />
          }
        />
        <Route path="/all" element={<AllTodos />} />
        <Route path="all/user/:id" element={<SeeMore />} />

        <Route
          path="/agree"
          element={
            <AgreePage
              mainTodoMas={mainTodoMas}
              setMainTodoMas={setMainTodoMas}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
