import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        border: "3px solid black",
        height: "50px",
        width: "100%",
        justifyContent: "space-evenly",
        display: "flex",
        backgroundColor: "#020202",
      }}
    >
      <div style={{ margin: "auto" }}>
        <Button variant="contained" color="error">
          <Link style={{ textDecoration: "none", color: "white" }} to="/dashboard">Dashboard</Link>
        </Button>
      </div>
      <div style={{ margin: "auto" }}>
        <Button variant="contained" color="error">
          <Link style={{ textDecoration: "none", color: "white" }} to="/admin">
            Admin
          </Link>
        </Button>
      </div>
      <div style={{ margin: "auto" }}>
        <Button variant="contained" color="error">
          <Link style={{ textDecoration: "none", color: "white" }} to="/user">
            User
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
