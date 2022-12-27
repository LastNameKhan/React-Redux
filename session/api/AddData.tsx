import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAction, addAction2, editAction, getData } from "../redux/actions/todoAction";

const AddData = () => {
  const [title, setTitle] = useState<string>("");
  const { todo, editData } = useSelector((s: any) => s.todoReducer);
    const dispatch = useDispatch();

  console.log("data", todo);

  useEffect(() => {
    editData && setTitle(editData.title)
  }, [editData])

  useEffect(() => {
    dispatch(getData(title, todo.length+1))
  }, [])

  const handleAdd = () => {
    if(editData) {
        dispatch(editAction(title, editData.id))
    } else {
        dispatch(addAction2(title, todo.length+1))
    }
  };

  return (
    <div style={{padding: 30}}>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="button" onClick={handleAdd}>
          {editData?'update': 'Add'}
        </button>
      </div>
    </div>
  );
};

export default AddData;
