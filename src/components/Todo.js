import React from "react";

function Todo({ text, setTodos, todo, todos }) {
  const deleteHandler = () => {
    setTodos(todos.filter((elem) => elem.id !== todo.id));
  };
  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
