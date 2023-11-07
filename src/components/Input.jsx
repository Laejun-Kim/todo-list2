import React from "react";
import { useState } from "react";
import uuid from "react-uuid";

function Input({ setTodo, toDos }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitHndlr = (e) => {
    e.preventDefault();
    const newToDo = { id: uuid(), title, content, isDone: false };
    setTodo([...toDos, newToDo]);
  };
  const titleChangeHndlr = (event) => {
    setTitle(event.target.value);
  };
  const contentChangeHndlr = (event) => {
    setContent(event.target.value);
  };
  return (
    <form onSubmit={submitHndlr}>
      <label>제목</label>
      <input onChange={titleChangeHndlr} value={title} />
      <label>내용</label>

      <input onChange={contentChangeHndlr} value={content} />
      <button>등록하기</button>
    </form>
  );
}

export default Input;
