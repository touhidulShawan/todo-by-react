import React from "react";

const TodoList = props => {
  return (
    <div className="todo__list">
      {props.todo.map(todo => {
        return (
          <div className="list" key={props.id}>
            <ul>
              <input type="checkbox" onClick={props.handleCheck} />
              <li>{todo}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
