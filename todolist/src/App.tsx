import React, { Component } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Typography, FormControl } from "@mui/material";
import InputField from "./Components/InputField";
import Home from "./Pages/Home";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        {/* <Typography>Todo List App</Typography>
        <InputField /> */}
      </div>
    );
  }
}

export default App;
