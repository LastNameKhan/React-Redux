import React, { useState } from "react";
import {
  FormGroup,
  Card,
  Button,
  FormLabel,
  Typography,
  TextField,
} from "@mui/material";
import validator from "validator";

const StepTwo = ({ nextStep, handleFormData, prevStep, values }: any) => {
  const [error, setError] = useState(false);
  const submitFormData = (e: any) => {
    e.preventDefault();
    if (validator.isEmpty(values.age) || validator.isEmpty(values.email)) {
      setError(true);
    } else {
      nextStep();
    }
  };
  return (
    <>
      <Card style={{ marginTop: 100 }}>
        <form onSubmit={submitFormData}>
          <FormGroup>
            <FormLabel>Age</FormLabel>
            <TextField
              style={{ border: error ? "2px solid red" : "" }}
              type="number"
              placeholder="Age"
              onChange={handleFormData("age")}
            />
            {error ? (
              <Typography style={{ color: "red" }}>
                This is a required field
              </Typography>
            ) : (
              ""
            )}
          </FormGroup>
          <FormGroup>
            <FormLabel>Email</FormLabel>
            <TextField
              style={{ border: error ? "2px solid red" : "" }}
              type="email"
              placeholder="email"
              onChange={handleFormData("email")}
            />
            {error ? (
              <Typography style={{ color: "red" }}>
                This is a required field
              </Typography>
            ) : (
              ""
            )}
          </FormGroup>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Button variant="contained" onClick={prevStep}>
              Previous
            </Button>

            <Button variant="contained" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default StepTwo;
