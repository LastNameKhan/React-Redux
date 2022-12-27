import { Grid, Paper } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataSuccess } from "../Redux/Actions/fetchActions";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { allpost } = useSelector((s: any) => s.fetchRedducers);
  console.log("allpost", allpost);

  const baseURL = "https://empappregular.herokuapp.com/";

  useEffect(() => {
    dispatch(getDataSuccess());
  },[]);
  return (
    <Grid container>
      {Object.values(allpost).map((item: any) => {
        return (
          <Grid
            item
            lg={4}
            md={3}
            sm={4}
            xs={12}
            style={{
              textAlign: "center",
              marginBottom: "20px",
              padding: "20px",
            }}
          >
            <Paper
              style={{ height: "100%", border: "1px solid #ccc", padding: 20 }}
            >
              <img
                style={{ width: "100%", maxHeight: "250px" }}
                src={baseURL + item.images}
                alt="This is a png Image"
              />
              <h1>{item.author.name}</h1>
              <h2>{item.author.id}</h2>
              <h2>₹{item.price}</h2>
              <h3>{item.title}</h3>
              <h5>{item.subtitle}</h5>
              <h5>{item.quantity}</h5>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Dashboard;
