import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter/Counter";
import Todo from "./Todo/Todo";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <Todo />
      {/* <AllRoutes /> */}
    </div>
  );
}

export default App;
