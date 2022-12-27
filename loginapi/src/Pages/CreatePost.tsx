import { Typography, Box, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAction4 } from "../Redux/Actions/fetchActions";

export const CreatePost = () => {
  const [title, setTitle] = useState<string>("");
  const [about, setAbout] = useState<string>("");
  const [subtitle, setSubtitle] = useState<string>("");
  const [image, setImage] = useState<any>(null);
  const dispatch = useDispatch();

  const handlFormSubmit = () => {
    dispatch(addAction4(title, about, subtitle, image));
  };

  return (
    <div>
      <Typography
        style={{
          fontFamily: "sans-serif",
          fontSize: "40px",
          fontWeight: "400",
        }}
      >
        Create Post
      </Typography>
      <Box
        style={{
          margin: "auto",
          height: "350px",
          width: "400px",
          backgroundColor: "#B7BED8",
          transition: "all 0.8s ease",
        }}
      >
        <Typography
          style={{ textAlign: "center", color: "#3f3d36", fontWeight: "600" }}
        >
          Hi,Please Enter Your Title Here
        </Typography>
        <TextField
          variant="standard"
          style={{ width: "320px" }}
          label={"Please enter title"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Typography
          style={{
            textAlign: "center",
            color: "#3f3d36",
            fontWeight: "600",
            marginBottom: "-20px",
          }}
        >
          Please Enter Your Author Here
        </Typography>
        <TextField
          variant="standard"
          style={{ width: "320px", marginTop: "20px" }}
          label={"Please enter author"}
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
        <Typography
          style={{
            textAlign: "center",
            color: "#3f3d36",
            fontWeight: "600",
            marginBottom: "-20px",
          }}
        >
          Please Enter Your Subtitle Here
        </Typography>
        <TextField
          variant="standard"
          style={{ width: "320px", marginTop: "20px" }}
          label={"Please enter subtitle"}
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
        />
        {/* // data.append('images', state.image, image.name)}/ */}
        <Button
          variant="contained"
          component="label"
          style={{ width: "350px", marginTop: "20px" }}
        >
          Upload
          <input
            hidden
            style={{ width: "300px", marginTop: "20px" }}
            accept="image/*"
            multiple
            type="file"
            onChange={(e: any) => setImage(e.target.files[0])}
          />
        </Button>
        {/* <input
            // value={this.state.image}
            onChange={(e: any) => this.setState({ image: e.target.files[0] })}
            // onChange={(e: any) => console.log(e)}
            type="file"
            style={{ width: "250px" }}
          /> */}
        <Button
          onClick={handlFormSubmit}
          style={{ marginTop: "20px" }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default CreatePost;
