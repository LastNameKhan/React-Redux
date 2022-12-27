import React, { useState } from "react";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import { TableCell, TableContainer, TableRow } from "@mui/material";
import Final from "./Pages/Final";
import StepTwo from "./Pages/StepTwo";
import StepOne from "./Pages/StepOne";

const GlobalStyle = createGlobalStyle`
  body {
    width:100%;
    background-color: #000;
    background-color: -webkit-linear-gradient(to right, #414345, #232526);
    background-color: linear-gradient(to right, #414345, #232526);
    color: whitesmoke;
  }
`;

function App() {
  const [step, setstep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    number: "",
    age: "",
    email: "",
  });

  const nextStep = () => {
    setstep(step + 1);
  };
  const prevStep = () => {
    setstep(step - 1);
  };
  const handleInputData = (input: any) => (e: any) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };
  switch (step) {
    case 1:
      return (
        <div className="App">
          <GlobalStyle />
          <TableContainer>
            <TableRow>
              <TableCell>
                <StepOne
                  nextStep={nextStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </TableCell>
            </TableRow>
          </TableContainer>
        </div>
      );
    case 2:
      return (
        <div className="App">
          <GlobalStyle />
          <TableContainer>
            <TableRow>
              <TableCell>
                <StepTwo
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </TableCell>
            </TableRow>
          </TableContainer>
        </div>
      );
    case 3:
      return (
        <div className="App">
          <GlobalStyle />
          <TableContainer>
            <TableRow>
              <TableCell>
                <Final values={formData} />
              </TableCell>
            </TableRow>
          </TableContainer>
        </div>
      );
    default:
      return (
        <div className="App">
          <GlobalStyle />
        </div>
      );
  }
}

export default App;
