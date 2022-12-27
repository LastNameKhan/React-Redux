import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAction, editAction } from "../redux/actions/todoAction";

const AnotherAddData = () => {
  const [title, setTitle] = useState<string>("");
  const { todo, editData } = useSelector((s: any) => s.todoReducer);
    const dispatch = useDispatch();

  console.log("data", todo);

  useEffect(() => {
    editData && setTitle(editData.title)
  }, [editData])

  const handleAdd = () => {
    if(editData) {
        dispatch(editAction(title, editData.id))
    } else {
        dispatch(addAction(title, todo.length+1))
    }
  };

  return (
    <div style={{padding: 30}}>
      <div>
        {/* <div style={{bg: 'red'}}></div>

        <div style={{bg: step>=2 ? 'red': 'grey'}}></div>
        <div style={{bg: step>=3 ? 'red': 'grey'}}></div>
        {
          step ===1  && <Form1 />
          step ===2 && <Form2 />
          step ===3  && <Form3 />
        } */}
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

export default AnotherAddData;
