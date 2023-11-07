import React from "react";
import { useState } from "react";
import uuid from "react-uuid";
import styled from "styled-components";

const Stform = styled.form`
  background-color: powderblue;
  height: 100px;
  text-align: center;
  padding-top: 70px;
`;

function Input({ setTodo, toDos }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitHndlr = (e) => {
    e.preventDefault();
    const newToDo = { id: uuid(), title, content, isDone: false };
    setTodo([...toDos, newToDo]);
    setTitle("");
    setContent("");
  };
  const titleChangeHndlr = (event) => {
    setTitle(event.target.value);
  };
  const contentChangeHndlr = (event) => {
    setContent(event.target.value);
  };
  return (
    <Stform onSubmit={submitHndlr}>
      <label>제목</label>
      <input required onChange={titleChangeHndlr} value={title} />
      <label>내용</label>

      <input onChange={contentChangeHndlr} value={content} />
      <button type="submit">등록하기</button>
    </Stform>
  );
}

export default Input;
