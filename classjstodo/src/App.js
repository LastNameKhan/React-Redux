import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

export class App extends Component {
  render() {
    return (
      <div>
        <h1>List of Todos</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
