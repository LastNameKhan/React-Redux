import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Box
      style={{
        display: "flex",
        height: "50px",
        width: "100%",
        border: "3px solid black",
        backgroundColor: "#07776e",
        justifyContent: "space-between",
      }}
    >
      <Button
        variant="contained"
        color="error"
        style={{ margin: "10px", padding: "10px" }}
      >
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          Home
        </Link>
      </Button>
      <Button
        variant="contained"
        color="error"
        style={{ margin: "10px", padding: "10px" }}
      >
        <Link style={{ textDecoration: "none", color: "white" }} to="/signup">
          SignUp
        </Link>
      </Button>
      <Button
        variant="contained"
        color="error"
        style={{ margin: "10px", padding: "10px" }}
      >
        <Link style={{ textDecoration: "none", color: "white" }} to="/login">
          Login
        </Link>
      </Button>
      <Button
        variant="contained"
        color="error"
        style={{ margin: "10px", padding: "10px" }}
      >
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/createpost"
        >
          Create Post
        </Link>
      </Button>
    </Box>
  );
};

export default Navbar;
