import logo from "./logo.svg";
import "./App.css";
import TodoItem from "./Redux/TodoItem";
import TodoList from "./Redux/TodoList";
import AddTodoForm from "./Redux/AddTodoForm";

function App() {
  return (
    <div className="App">
      {/* <TodoItem /> */}
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
