import React, { useState } from "react";
import { TextField, Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { msgAction } from "../Redux/Actions/ChatActions";
import { DiscoButton } from "../Styling/Styling.styles";
import { useRef, useEffect } from "react";
import "./Home.css";

export const Home = () => {
  const [text, setText] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const [stage, setStage] = useState("TYPING");
  const messagesEndRef = useRef<any>(null);
  const { message } = useSelector((s: any) => s.ChatReducer);

  const dispatch = useDispatch();
  const handleSend = () => {
    dispatch(msgAction(text, user));
    setStage("Please Type");
    setText("");
  };
  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      dispatch(msgAction(text));
      setText("");
    }
  };
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [message]);

  const handleInputchange = (e: any) => {
    setText(e.target.value);
    setStage("TYPING");
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <Button
        color="success"
        variant="contained"
        onClick={() => setUser("Aman")}
      >
        Aman
      </Button>
      <Button
        color="secondary"
        variant="contained"
        onClick={() => setUser("Khan")}
      >
        Khan
      </Button>
      <Button
        color="error"
        variant="contained"
        onClick={() => setUser("AmanKhan")}
      >
        AmanKhan
      </Button>
      <Box
        style={{
          height: "fit-conent",
          width: "fit-content",
          backgroundColor: "black",
          margin: "auto",
          boxShadow:
            "rgba(5, 5, 5, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(19, 1, 1, 0.06) 0px 2px 1px, rgba(102, 98, 98, 0.09) 0px 4px 2px, rgba(22, 12, 12, 0.09) 0px 8px 4px, rgba(54, 53, 53, 0.09) 0px 16px 8px, rgba(39, 39, 39, 0.09) 0px 32px 16px",
        }}
      >
        <div
          style={{
            height: "400px",
            width: "300px",
            margin: "auto",
            borderBottom: "none",
            overflow: "auto",
            borderRadius: "10px",
            padding: "15px",
          }}
        >
          {message
            .filter((i: any) => i.user === user)
            .map((item: any) => {
              const date = new Date(item.time);
              return (
                <div className="mapdivstyling">
                  <div key={item.index}>{item.text}</div>
                  <div style={{ fontSize: "10px" }}>
                    {date.getMinutes()} Minutes
                    {date.getSeconds()} Seconds Ago
                  </div>
                  <div ref={messagesEndRef} />
                </div>
              );
            })}
        </div>
        <Box
          style={{
            width: "300px",
            margin: "auto",
            borderTop: "none",
            borderRadius: "10px",
          }}
        >
          {stage}
          <TextField
            fullWidth
            style={{
              marginTop: "10px",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
            onKeyPress={handleKeyPress}
            value={text}
            onChange={handleInputchange}
            placeholder="Enter Imployee ID"
          />
          <DiscoButton onClick={handleSend}>Send Message</DiscoButton>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
