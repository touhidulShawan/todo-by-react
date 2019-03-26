import React, { Component } from "react";
import TodoList from "../components/TodoList";
import AddTask from "../components/AddTask";
import "../assets/css/App.min.css";

class App extends Component {
  state = {
    todoName: "",
    todo: [],
    id: -1,
    isCompleted: false
  };

  handleChange = event => {
    event.preventDefault();
    let newTodo = event.target.value;
    this.setState({ todoName: newTodo });
  };

  handleNewTask = e => {
    e.preventDefault();
    if (this.state.todoName !== "") {
      this.setState(prevState => ({
        todo: [...prevState.todo, this.state.todoName],
        id: this.state.id + 1
      }));
    } else {
      return this.state;
    }
  };

  toogleCompleted = () => {
    let check = !this.state.isCompleted;
    console.log(check);

    this.setState({ isCompleted: check });
  };

  render() {
    return (
      <div className="container">
        <AddTask
          handleInput={this.handleNewTask}
          handleChangeInput={this.handleChange}
        />
        <TodoList
          todo={this.state.todo}
          id={this.state.id}
          handleCheck={this.toogleCompleted}
          isComplete={this.state.isCompleted}
        />
      </div>
    );
  }
}

export default App;
