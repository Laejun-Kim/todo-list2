import React from "react";
import styled from "styled-components";

const StDiv = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 20px;
`;
const StTodoDiv = styled.div`
  border: 1px solid ${(props) => (props.$isDone ? "blue" : "red")};
  width: 300px;
  height: 200px;
`;

const Todo = ({ toDos, setToDos }) => {
  const deleteBtnHndlr = (id) => {
    const newTodo = toDos.filter((item) => item.id !== id);
    setToDos(newTodo);
  };
  const isDoneToggler = (id) => {
    setToDos((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    });
  };

  return (
    <div>
      <h2>진행중</h2>
      <StDiv>
        {toDos
          .filter((item) => item.isDone === false)
          .map((item) => {
            return (
              <StTodoDiv key={item.id} $isDone={item.isDone}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div>
                  <button onClick={() => deleteBtnHndlr(item.id)}>삭제</button>
                  <button onClick={() => isDoneToggler(item.id)}>완료</button>
                </div>
              </StTodoDiv>
            );
          })}
      </StDiv>
      <h2>완료</h2>
      <StDiv>
        {toDos
          .filter((item) => item.isDone === true)
          .map((item) => {
            return (
              <StTodoDiv key={item.id} $isDone={item.isDone}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div>
                  <button onClick={() => deleteBtnHndlr(item.id)}>삭제</button>
                  <button onClick={() => isDoneToggler(item.id)}>
                    완료취소
                  </button>
                </div>
              </StTodoDiv>
            );
          })}
      </StDiv>
    </div>
  );
};

export default Todo;
