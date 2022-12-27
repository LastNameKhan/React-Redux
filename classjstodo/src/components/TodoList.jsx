//@ts-ignore
import React, { Fragment } from "react";
import { connect } from "react-redux";
import {
  addTodo,
  removeTodo,
  editTodo,
  updateTodo,
  cancelEdit,
} from "../actions/TodoActions";

class TodoList extends React.Component {
  state = {
    newTodo: "",
    currentVal: "",
  };

  onSubmit(e) {
    e.preventDefault();

    const addedTodo = {
      title: this.state.newTodo,
    };

    this.props.addTodo(addedTodo);
    this.setState({ newTodo: "" });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    // this.setState({ ...this.state, [e.target.name]: e.target.value });
  }

  updatedVal(e) {
    // this.setState({ [e.target.name]: e.target.value });
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  }

  remove(i) {
    this.props.removeTodo(i);
  }

  edit(i, title) {
    this.props.editTodo(i);
    this.setState({ currentVal: title });
  }

  update(i) {
    this.props.updateTodo(this.state.currentVal, i);
    this.setState({ currentVal: "" });
  }

  cancel(i) {
    this.props.cancelEdit(i);
  }

  render() {
    const { Todos } = this.props.Todos || [];
    return (
      <div>
        <ul>
          {Todos?.map((Todo, i) => {
            return (
              <Fragment key={Todo.title}>
                {!Todo.editing ? (
                  <li>
                    {Todo.title}
                    <span>
                      <button onClick={() => this.remove(i)}>Delete</button>
                      <button onClick={() => this.edit(i, Todo.title)}>
                        Edit
                      </button>
                    </span>
                  </li>
                ) : (
                  <li>
                    <form>
                      <input
                        type="text"
                        name="currentVal"
                        value={this.state.currentVal}
                        onChange={this.updatedVal}
                      />
                    </form>
                    <span>
                      <button onClick={() => this.cancel(i)}>Cancel</button>
                      <button onClick={() => this.update(i)}>Update</button>
                    </span>
                  </li>
                )}
              </Fragment>
            );
          })}
          <form onSubmit={this.onSubmit}>
            <input type="text" name="newTodo" onChange={this.onChange} />
            <input type="submit" value="Add Todo" />
          </form>
        </ul>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     submitNewTodo: function (newTodo: any) {
//       dispatch(onsubmit(e:any));
//     },
//     editExistingList: function (newTodoList: any) {
//       dispatch(editTodo(newTodoList));
//     },
//   };
// };

const mapStateToProps = (state) => ({
  Todos: state.Todos,
});

export default connect(mapStateToProps, {
  addTodo,
  removeTodo,
  editTodo,
  updateTodo,
  cancelEdit,
})(TodoList);
