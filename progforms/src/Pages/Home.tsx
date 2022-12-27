import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddData from "./AddData";

const Home = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((s: any) => s.formReducer);

  return (
    <div>
      <AddData />
    </div>
  );
};

export default Home;
