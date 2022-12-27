import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { addAction } from "../redux/actions/todoAction";
import AddData from "./AddData";
import AnotherAddData from "./AnotherAddData";

const Home = (props: any) => {
    console.log('props', props)
   
  return (
    <div style={{padding: 30}}>
      <AddData />
      
      {props.todo.map((item: any) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <button type="button" onClick={() => props.editData(item) }>
            Edit
            </button>
          </div>
        );
      })}

    <AnotherAddData />
    </div>
  );
};

const mapStateToProps = (s: any) => {
    return {
        todo: s.todoReducer.todo
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        editData: (d: any) => {
            // any operation
            dispatch({type: 'EDIT_DATA', payload: d})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
