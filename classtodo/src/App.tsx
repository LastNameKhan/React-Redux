import React, { Component } from "react";
import TodoList from "./Components/TodoList";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
