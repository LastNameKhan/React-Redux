import { Card, CardActions } from "@mui/material";
import React from "react";

const Final = ({ values }) => {
  const { firstName, lastName, age, email } = values;
  return (
    <>
      <Card style={{ marginTop: 100, textAlign: "left" }}>
        <CardActions>
          <p>
            <strong>First Name :</strong> {firstName}{" "}
          </p>
          <p>
            <strong>Last Name :</strong> {lastName}{" "}
          </p>
          <p>
            <strong>Age :</strong> {age}{" "}
          </p>
          <p>
            <strong>Email :</strong> {email}{" "}
          </p>
        </CardActions>
      </Card>
    </>
  );
};

export default Final;
