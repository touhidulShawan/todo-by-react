import React from "react";
import "../assets/css/TodoList.min.css";

const TodoList = props => {
  return (
    <div className="todo__list">
      {props.todo.map((todo, index) => {
        return (
          <div className="list" key={index} data-aos="zoom-in">
            <ul>
              <li onClick={props.handleCheck}>{todo}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
