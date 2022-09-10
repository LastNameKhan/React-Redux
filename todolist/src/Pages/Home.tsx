import React, { Component } from "react";
import { loadTodos } from "../Redux/actions";
import { connect } from "react-redux";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

// componentDidMount = () => {
//   const { dispatch } = this.props;
//   console.log("ComponentDidMount");
// };

// const handleDelte = (id) => {
//   dispatchEvent(deleteTodos);
// };

class Home extends Component {
  componentDidMount() {
    const { dispatch, loadTodos } = this.props;
  }

  render() {
    return (
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Todo List</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Todos.map((Todo) => (
                <TableRow key={Todo.id}>
                  <TableCell align="center" component="th" scope="row">
                    {Todo.title}
                  </TableCell>
                  <TableCell align="center" component="th" scope="row">
                    <Button>Delete</Button>
                    <Button>Edit</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    Todos: state.Todos,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadTodos: () => dispatch(loadTodos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
