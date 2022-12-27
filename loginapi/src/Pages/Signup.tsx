import { Button, Card, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAction2 } from "../Redux/Actions/fetchActions";

const Signup = () => {
  const [empId, setEmpId] = useState<string>("");
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addAction2(empId, username, password));
  };
  return (
    <div
      style={{
        display: "flex",
        height: "300px",
        width: "300px",
        margin: "auto",
        marginTop: "50px",
      }}
    >
      <Card style={{ backgroundColor: "grey" }}>
        <TextField
          style={{ marginTop: "10px", backgroundColor: "white" }}
          value={empId}
          onChange={(e) => setEmpId(e.target.value)}
          placeholder="Enter Imployee ID"
        />
        <TextField
          style={{ marginTop: "10px", backgroundColor: "white" }}
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter UserName"
        />
        <TextField
          style={{ marginTop: "10px", backgroundColor: "white" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        <Button
          style={{ marginTop: "10px" }}
          variant="contained"
          onClick={handleAdd}
        >
          SignUp
        </Button>
      </Card>
    </div>
  );
};

export default Signup;
