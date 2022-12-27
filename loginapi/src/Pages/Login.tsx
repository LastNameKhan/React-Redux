import { Button, Card, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAction3 } from "../Redux/Actions/fetchActions";

const Login = () => {
  const [employeeId, setEmployeeId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(addAction3(employeeId, password));
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
      <Card style={{ backgroundColor: "#6e6d6d" }}>
        <Typography mt={2}>Enter Username Here</Typography>
        <TextField
          style={{ marginTop: "10px", backgroundColor: "white" }}
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          placeholder="Enter Imployee ID"
        />
        <Typography mt={2}>Enter Password Here</Typography>
        <TextField
          style={{ marginTop: "10px", backgroundColor: "white" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        <Button
          style={{ marginTop: "20px" }}
          variant="contained"
          onClick={handleLogin}
        >
          SignUp
        </Button>
      </Card>
    </div>
  );
};

export default Login;
