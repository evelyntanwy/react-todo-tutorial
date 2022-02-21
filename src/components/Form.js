import React, { useState } from "react";

function Form({ setInputText, todos, setTodos, inputText }) {
  const inputTextHandler = (evt) => {
    setInputText(evt.target.value);
  };

  const submitTodoHandler = (evt) => {
    evt.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  return (
    <form>
      <input
        value={inputText}
        type="text"
        className="todo-input"
        onChange={inputTextHandler}
      />
      <button onClick={submitTodoHandler} className="todo-input" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
