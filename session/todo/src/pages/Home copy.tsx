import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAction } from "../redux/actions/todoAction";
import AddData from "./AddData";

const Home = () => {
  const [title, setTitle] = useState<string>("");
  const [editData, setEditData] = useState<any>(null)
  const { todo } = useSelector((s: any) => s.todoReducer);
    const dispatch = useDispatch();

    const handleEdit = (d: any) => {
        dispatch({type: 'EDIT_DATA', payload: d})
    }
  return (
    <div style={{padding: 30}}>
      <AddData />
      
      {todo.map((item: any) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <button type="button" onClick={() => handleEdit(item) }>
            Edit
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
