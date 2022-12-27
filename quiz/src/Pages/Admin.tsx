import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { quizActions } from "../Redux/Actions/quizActions";

export const Admin = () => {
  const [data, setData] = useState<any>([]);
  const [question, setQuestion] = useState<string>("");
  const [option1, setOption1] = useState<string>("");
  const [option2, setOption2] = useState<string>("");
  const [option3, setOption3] = useState<string>("");
  const [option4, setOption4] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [userId, setUserId] = useState<any>("");
  const [id, setId] = useState<any>("");
  const dispatch = useDispatch();

  const handleAddData = () => {
    var uniqueid = Date.now();
    setUserId(8223037373);
    setId(uniqueid);
    setData({
      question,
      option1,
      option2,
      option3,
      option4,
      answer,
      userId,
      id,
    });
    console.log(data, "Data");
    dispatch(quizActions(data));
  };

  return (
    <div
      style={{
        margin: "auto",
        border: "1px solid black",
        height: "500px",
        width: "300px",
        backgroundColor: "white",
        borderRadius: "10px",
      }}
    >
      <TextField
        value={question}
        onChange={(e: any) => setQuestion(e.target.value)}
        placeholder="Please Enter Question"
        style={{ marginTop: "10px" }}
      />
      <TextField
        value={option1}
        onChange={(e: any) => setOption1(e.target.value)}
        placeholder="Please Enter Option1"
        style={{ marginTop: "10px" }}
      />
      <TextField
        value={option2}
        onChange={(e: any) => setOption2(e.target.value)}
        placeholder="Please Enter Option2"
        style={{ marginTop: "10px" }}
      />
      <TextField
        value={option3}
        onChange={(e: any) => setOption3(e.target.value)}
        placeholder="Please Enter Option3"
        style={{ marginTop: "10px" }}
      />
      <TextField
        value={option4}
        onChange={(e: any) => setOption4(e.target.value)}
        placeholder="Please Enter Option4"
        style={{ marginTop: "10px" }}
      />
      <TextField
        value={answer}
        onChange={(e: any) => setAnswer(e.target.value)}
        placeholder="Please Enter Answer"
        style={{ marginTop: "10px" }}
      />
      <Button
        onClick={handleAddData}
        variant="contained"
        color="primary"
        style={{ marginTop: "20px" }}
      >
        Submit
      </Button>
    </div>
  );
};

export default Admin;
