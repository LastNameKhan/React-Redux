import React, { Component } from "react";
import { connect } from "react-redux";
// import { addTodo } from "../redux/actions";

class AddTodo extends Component {
  state = {
    input: "",
  };

  updateInput = (input: any) => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    // this.props.addTodo(this.state.input);
    this.setState({ input: " " });
  };
  render() {
    return (
      <div>
        <input
          onChange={(e) => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button onClick={this.handleAddTodo}>Add Todo</button>
      </div>
    );
  }
}

export default AddTodo;
