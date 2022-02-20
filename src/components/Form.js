import React, { useState } from "react";

function Form({ setInputText }) {
  const inputTextHandler = (evt) => {
    setInputText(evt.target.value);
  };

  return (
    <form>
      <input type="text" className="todo-input" onChange={inputTextHandler} />
      <button className="todo-input" type="submit">
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
