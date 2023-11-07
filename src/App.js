import "./App.css";
import Input from "./components/Input";
import { useState } from "react";
import Todo from "./components/Todo";

function App() {
  const [toDos, setToDos] = useState([
    {
      id: 1,
      title: "장보기",
      content: "고기100g, 우유1팩, 당근 2개",
      isDone: true,
    },
  ]);
  return (
    <div className="App">
      <Input setTodo={setToDos} toDos={toDos} />
      <Todo setToDos={setToDos} toDos={toDos} />
    </div>
  );
}

export default App;
