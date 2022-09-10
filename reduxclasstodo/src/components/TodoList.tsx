import React, { Fragment } from "react";
import { connect } from "react-redux";
import {
  addTodo,
  removeTodo,
  editTodo,
  updateTodo,
  cancelEdit,
} from "../actions/TodoActions";

type MyState = {
  state: any;
  newTodo: any;
  currentVal: any;
};

type MyProps = {
  Todos: any;
  cancelEdit: any;
  updateTodo: any;
  editTodo: any;
  removeTodo: any;
  addTodo: any;
};

class TodoList extends React.Component<MyProps, MyState> {
  state: any = {
    newTodo: "",
    currentVal: "",
  };

  onSubmit(e: any) {
    e.preventDefault();

    const addedTodo = {
      title: this.state.newTodo,
    };

    this.props.addTodo(addedTodo);
    this.setState({ newTodo: "" });
  }

  onChange(e: any) {
    this.setState({ [e.target.name]: e.target.value });
    // this.setState({ ...this.state, [e.target.name]: e.target.value });
  }

  updatedVal(e: any) {
    // this.setState({ [e.target.name]: e.target.value });
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  }

  remove(i: any) {
    this.props.removeTodo(i);
  }

  edit(i: any, title: any) {
    this.props.editTodo(i);
    this.setState({ currentVal: title });
  }

  update(i: any) {
    this.props.updateTodo(this.state.currentVal, i);
    this.setState({ currentVal: "" });
  }

  cancel(i: any) {
    this.props.cancelEdit(i);
  }

  render() {
    const { Todos } = this.props.Todos || [];
    return (
      <div>
        <ul>
          {Todos?.map((Todo: any, i: any) => {
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

const mapStateToProps = (state: any) => ({
  Todos: state.Todos,
});

export default connect(mapStateToProps, {
  addTodo,
  removeTodo,
  editTodo,
  updateTodo,
  cancelEdit,
})(TodoList);
