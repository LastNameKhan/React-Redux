import React, { useEffect, useState } from "react";
import { addAction } from "../Redux/Actions/formAction";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  CardContent,
  Container,
  FormGroup,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";

const AddData = () => {
  const [step, setstep] = useState(1);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    age: "",
    address: "",
    employeid: "",
    password: "",
  });
  const dispatch = useDispatch();
  const data = useSelector((s: any) => s.formReducer);
  console.log("data", data);

  useEffect(() => {
    console.log("data", data);
    // setFormData({
    //   ...formData,
    //   ...data
    // });
  }, []);

  const nextStep = () => {
    setstep(step + 1);
    console.log(step);
    dispatch(addAction(formData));
    console.log(formData, "FormData");
  };
  const prevStep = () => {
    setstep(step - 1);
  };

  const handleFormData = (input: any) => (e: any) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  const submitFormData = (e: any) => {
    e.preventDefault();
    nextStep();
  };

  switch (step) {
    case 1:
      return (
        <div className="App">
          <Typography>{step}</Typography>
          <Container>
            {step === 1 ? (
              <div
                style={{
                  color: "white",
                  height: "50px",
                  width: "50px",
                  borderRadius: "50%",
                  border: "1px solid black",
                  backgroundColor: "blue",
                }}
              >
                1
              </div>
            ) : (
              <div
                style={{
                  color: "blue",
                  height: "50px",
                  width: "50px",
                  borderRadius: "50%",
                  border: "1px solid black",
                }}
              >
                1
              </div>
            )}
            <Card style={{ marginTop: 100 }}>
              <CardContent>
                <form onSubmit={submitFormData}>
                  <FormGroup>
                    <FormLabel>First Name</FormLabel>
                    <TextField
                      name="firstname"
                      type="text"
                      placeholder="First Name"
                      value={formData.firstname}
                      onChange={handleFormData("firstname")}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Last Name</FormLabel>
                    <TextField
                      name="lastname"
                      type="text"
                      placeholder="Last Name"
                      value={formData.lastname}
                      onChange={handleFormData("lastname")}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Email</FormLabel>
                    <TextField
                      name="email"
                      type="text"
                      value={formData.email}
                      placeholder="Email..."
                      onChange={handleFormData("email")}
                    />
                  </FormGroup>
                  <Button variant="contained" onClick={nextStep}>
                    Continue
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Container>
        </div>
      );
    case 2:
      return (
        <div className="App">
          <Typography>{step}</Typography>
          <Container>
            {step === 2 ? (
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    color: "white",
                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                    border: "1px solid black",
                    backgroundColor: "blue",
                  }}
                >
                  1
                </div>
                <div
                  style={{
                    color: "white",
                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                    border: "1px solid black",
                    backgroundColor: "blue",
                  }}
                >
                  2
                </div>
              </div>
            ) : (
              <div
                style={{
                  color: "blue",
                  height: "50px",
                  width: "50px",
                  borderRadius: "50%",
                  border: "1px solid black",
                }}
              ></div>
            )}
            <Card style={{ marginTop: 100 }}>
              <form>
                <FormGroup>
                  <FormLabel>Number</FormLabel>
                  <TextField
                    type="number"
                    placeholder="Phone Number"
                    value={formData.number}
                    onChange={handleFormData("number")}
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel>Address</FormLabel>
                  <TextField
                    type="text"
                    value={formData.address}
                    placeholder="Enter Address"
                    onChange={handleFormData("address")}
                  />
                </FormGroup>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Button variant="contained" onClick={prevStep}>
                    Previous
                  </Button>
                  <Button variant="contained" onClick={nextStep}>
                    Next
                  </Button>
                </div>
              </form>
            </Card>
          </Container>
        </div>
      );
    case 3:
      return (
        <div className="App">
          <Typography>{step}</Typography>
          <Container>
            {step === 3 ? (
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    color: "white",
                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                    border: "1px solid black",
                    backgroundColor: "blue",
                  }}
                >
                  1
                </div>
                <div
                  style={{
                    color: "white",
                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                    border: "1px solid black",
                    backgroundColor: "blue",
                  }}
                >
                  2
                </div>
                <div
                  style={{
                    color: "white",
                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                    border: "1px solid black",
                    backgroundColor: "blue",
                  }}
                >
                  3
                </div>
              </div>
            ) : (
              <div
                style={{
                  color: "blue",
                  height: "50px",
                  width: "50px",
                  borderRadius: "50%",
                  border: "1px solid black",
                }}
              ></div>
            )}
            <Card style={{ marginTop: 100 }}>
              <form onSubmit={submitFormData}>
                <FormGroup>
                  <FormLabel>Employee ID</FormLabel>
                  <TextField
                    type="text"
                    value={formData.employeid}
                    placeholder="Enter ID"
                    onChange={handleFormData("employeid")}
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel>Password</FormLabel>
                  <TextField
                    type="password"
                    value={formData.password}
                    placeholder="Enter Password"
                    onChange={handleFormData("password")}
                  />
                </FormGroup>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Button variant="contained" onClick={prevStep}>
                    Previous
                  </Button>
                  <Button variant="contained" type="submit" onClick={nextStep}>
                    Next
                  </Button>
                </div>
              </form>
            </Card>
          </Container>
        </div>
      );
    case 4:
      return (
        <div className="App">
          <Typography>{step}</Typography>
          <Container>
            <Typography>
              Congratulations You have Successfully enetered all of the Values
            </Typography>
          </Container>
        </div>
      );
    default:
      return <div className="App"></div>;
  }
};

export default AddData;
