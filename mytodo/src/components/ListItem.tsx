import React, { Component } from "react";
import { idText } from "typescript";

type MyState = {
  handleEditClick: any;
  done: any;
};

type MyProps = {
  id: number;
  content: string;
  handleEditClick: any;
  onEdit: any;
};

class ListItem extends Component<MyProps, MyState> {
  state: any = {
    done: false,
    deleted: false,
  };

  handleChange(event: any) {
    this.setState({ done: event.target.checked });
  }

  handleDeleteClick() {
    const { id, content } = this.props;
    const newContent = prompt("Edit", content);
    if (newContent !== null) {
      this.props.onEdit(id, newContent);
    }
  }
  render() {
    if (this.state.deleted === false) {
      return (
        <li>
          <p>{this.props.content}</p>
          <ul>
            <li>
              <label>Mark as done</label>
              <input
                name={"item_" + this.props.id}
                id={"item_" + this.props.id}
                type="checkbox"
                onChange={this.handleChange}
              />
            </li>
            <li>
              <button
                type="button"
                onClick={this.handleEditClick}
                disabled={this.state.done ? true : false}
              >
                Edit
              </button>
            </li>
            <li>
              <button
                className="delete-button"
                type="button"
                onClick={this.handleDeleteClick}
              >
                Delete
              </button>
            </li>
          </ul>
        </li>
      );
    } else {
      return null;
    }
  }
}

export default ListItem;
