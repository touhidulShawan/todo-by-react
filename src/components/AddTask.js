import React from "react";

const AddTask = props => {
  return (
    <div className="add__task">
      <form action="" onSubmit={props.handleInput}>
        <input type="text" required onChange={props.handleChangeInput} />
        <button type="submit" onClick={props.handleInput}>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
