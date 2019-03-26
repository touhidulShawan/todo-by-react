import React, { Component } from "react";
import TodoList from "../components/TodoList";
import AddTask from "../components/AddTask";

class App extends Component {
  state = {
    todo: "Do the Home Work",
    id: 0
  };
  render() {
    return (
      <React.Fragment>
        <AddTask />
        <TodoList todo={this.state.todo} />
      </React.Fragment>
    );
  }
}

export default App;
