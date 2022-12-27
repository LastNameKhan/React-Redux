import {
  Card,
  CardContent,
  FormGroup,
  FormLabel,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import validator from "validator";

const StepOne = ({ nextStep, handleFormData, values }: any) => {
  const [error, setError] = useState(false);
  const submitFormData = (e: any) => {
    e.preventDefault();
    if (
      validator.isEmpty(values.firstName) ||
      validator.isEmpty(values.lastName)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <Card style={{ marginTop: 100 }}>
        <CardContent>
          <form onSubmit={submitFormData}>
            <FormGroup className="mb-3">
              <FormLabel>First Name</FormLabel>
              <TextField
                style={{ border: error ? "2px solid red" : "" }}
                name="firstName"
                defaultValue={values.firstName}
                type="text"
                placeholder="First Name"
                onChange={handleFormData("firstName")}
              />
              {error ? (
                <Typography style={{ color: "red" }}>
                  This is a required field
                </Typography>
              ) : (
                ""
              )}
            </FormGroup>
            <FormGroup className="mb-3">
              <FormLabel>Last Name</FormLabel>
              <TextField
                style={{ border: error ? "2px solid red" : "" }}
                name="lastName"
                defaultValue={values.lastName}
                type="text"
                placeholder="Last Name"
                onChange={handleFormData("lastName")}
              />
              {error ? (
                <Typography style={{ color: "red" }}>
                  This is a required field
                </Typography>
              ) : (
                ""
              )}
            </FormGroup>
            <Button variant="contained" type="submit">
              Continue
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default StepOne;
