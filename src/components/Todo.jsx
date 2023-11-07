import React from "react";

const Todo = ({ toDos, setToDos }) => {
  const deleteBtnHndlr = (id) => {
    const newTodo = toDos.filter((item) => item.id !== id);
    setToDos(newTodo);
  };
  const isDoneToggler = (id, item) => {
    let newItem;
    if (item.id === id) {
      console.log(item);
      newItem = { ...item, isDone: !item.isDone };
    }
    setToDos([...toDos, newItem]);
    console.log(toDos);
  };
  return (
    <div>
      <h2>진행중</h2>
      {toDos
        .filter((item) => item.isDone === false)
        .map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <div>
                <button onClick={() => deleteBtnHndlr(item.id)}>삭제</button>
                <button onClick={() => isDoneToggler(item.id, item)}>
                  완료
                </button>
              </div>
            </div>
          );
        })}
      <h2>완료</h2>
      {toDos
        .filter((item) => item.isDone === true)
        .map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <div>
                <button onClick={() => deleteBtnHndlr(item.id)}>삭제</button>
                <button onClick={() => isDoneToggler(item.id, item)}>
                  완료취소
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Todo;
