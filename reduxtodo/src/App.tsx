import "./App.css";
import React, { Component } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
export class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <TodoList />
        <VisibilityFilters />
      </div>
    );
  }
}

export default App;
