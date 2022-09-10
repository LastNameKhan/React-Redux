import React, { Component } from "react";
import { addTodo, editTodo } from "../redux/actions";
import { connect } from "react-redux";
import ListItem from "./ListItem";

type Myprops = {
  id: any;
  newContent: any;
  editExistongList: any;
  submitNewTodo: any;
  length: any;
  onEdit: any;
  todos: any;
};

type MyState = {
  todos: any;
  value: any;
};

class TodoList extends Component<Myprops, MyState> {
  state: any = {
    value: "",
  };

  onChangeValue = (event: any) => {
    this.setState({ value: event.target.value });
  };

  onEditItem = (id: any, newContent: any) => {
    const newTodoList = this.props.todos.map((todo: any) => {
      if (todo.id !== id) {
        return todo;
      }
      return { ...todo, content: newContent };
    });
    this.props.editExistongList(newTodoList);
  };

  onAddItem = () => {
    if (this.state.value !== "") {
      this.props.submitNewTodo({
        id: this.props.length + 1,
        content: this.state.value,
      });
    }
  };
  render() {
    const listItems = this.props.todos.map((todo: any) => (
      <ListItem
        key={todo.id}
        id={todo.id}
        content={todo.content}
        onEdit={this.onEditItem}
      />
    ));
    return (
      <div>
        <ul>{listItems}</ul>
        <div>
          <input type="text" onChange={this.onChangeValue} />
          <button type="submit" onClick={this.onAddItem}></button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    submitNewTodo: function (newTodo: any) {
      dispatch(addTodo(newTodo));
    },
    editExistingList: function (newTodoList: any) {
      dispatch(editTodo(newTodoList));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
