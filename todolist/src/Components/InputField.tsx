import React, { Component } from "react";
import { FormControl, Input } from "@mui/material";
class InputField extends Component {
    state = {
        todo: ""
    }
  render() {
    return (
      <div>
        <FormControl>
          <Input placeholder="Enter Items here..." />
        </FormControl>
      </div>
    );
  }
}

export default InputField;
