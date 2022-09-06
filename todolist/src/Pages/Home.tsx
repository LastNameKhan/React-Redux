import React, { Component } from "react";
import { loadTodos } from "../Redux/actions";
import { connect } from "react-redux";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function createData(name: string) {
  return { name };
}

const rows = [
  createData("Frozen yoghurt"),
  createData("Ice cream sandwich"),
  createData("Eclair"),
  createData("Cupcake"),
  createData("Gingerbread"),
];

componentDidMount () {
    const {dispatch} = this.props
  console.log("ComponentDidMount")
};

class Home extends Component {
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
            {/* <TableBody>
              {Todos.map((Todo) => (
                <TableRow key={Todo.id}>
                  <TableCell align="center" component="th" scope="row">
                    {Todo.tile}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody> */}
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
