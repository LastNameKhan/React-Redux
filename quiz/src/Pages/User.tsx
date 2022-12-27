import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestionsData, setScoreAction } from "../Redux/Actions/quizActions";
import { DiscoButton, NextButton } from "../Styling/Styling.styles";

const User = () => {
  const [index, setIndex] = useState<number>(0);
  const [status, setStatus] = useState<boolean>(false);
  //   const [score, setScore] = useState<number>([0,1,0,1,0,0]); 
  const [useranswer, setUserAnsmwer] = useState<string>("");
  const [data, setData] = useState<any>([]);
  const dispatch = useDispatch();
  const { getData, score } = useSelector((s: any) => s.quizReducers);
  //   console.log(getData, "getData");

  console.log("score----------------------", score);

  useEffect(() => {
    dispatch(getQuestionsData());
    data.push(getData);
    setStatus(!status);
  }, []);

  const handleNextQuestion = () => {
    var datalength = getData.length;
    if (index < datalength - 1) {
      setIndex(index + 1);
    } else {
      alert("No more Questions");
    }
    dispatch(setScoreAction(false, index, score));
    setIndex(index + 1);
  };

  const handlePrevQuestion = () => {
    if (index <= 0) {
      alert("No Previous Questions");
    } else {
      setIndex(index - 1);
    }
  };

  const handleUserAnswer = (trueAns: any, selectedans: any) => {
    // if (trueAns === selectedans) {
    alert("Correct Answer");
    // dispatch(setScoreAction(trueAns === selectedans, index, score ))
    //   console.log(score);
    // }
  };

  return (
    <div>
      <div style={{ display: "flex", margin: "auto" }}>
        {getData.map((item: any, i: any) => {
          return (
            <div
              style={{
                height: "50px",
                width: "50px",
                backgroundColor: "grey",
                borderRadius: "50%",
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={() => setIndex(i)}
            >
              <Typography style={{ marginTop: "10px" }}>{i + 1}</Typography>
            </div>
          );
        })}
      </div>
      {getData.length > 0 && (
        <>
          <Typography style={{ fontSize: "48px" }}>
            {getData[index].que}
          </Typography>
          <Grid container>
            <Grid item lg={12}>
              <DiscoButton
                onClick={() =>
                  handleUserAnswer(getData[index].ans, getData[index].option1)
                }
              >
                {getData[index].option1}
              </DiscoButton>
              <DiscoButton
                onClick={() =>
                  handleUserAnswer(getData[index].ans, getData[index].option2)
                }
              >
                {getData[index].option2}
              </DiscoButton>
            </Grid>
            <Grid item lg={12}>
              <DiscoButton
                onClick={() =>
                  handleUserAnswer(getData[index].ans, getData[index].option3)
                }
              >
                {getData[index].option3}
              </DiscoButton>
              <DiscoButton
                onClick={() =>
                  handleUserAnswer(getData[index].ans, getData[index].option4)
                }
              >
                {getData[index].option4}
              </DiscoButton>
            </Grid>
          </Grid>
          <NextButton onClick={() => handleNextQuestion()}>Next</NextButton>
          <NextButton onClick={() => handlePrevQuestion()}>Previous</NextButton>
        </>
      )}
    </div>
  );
};

export default User;
