import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const MyPageSize = props => {

  const handleChange = (e) => {
    props.handle(e.target.value)
  }

  return (
    <FormGroup>
      <Label for="page-size">Page size</Label>
      <Input onChange={handleChange} type="select" name="page-size" id="page-size">
        <option value={4}>4</option>
        <option value={8}>8</option>
        <option value={16}>16</option>
      </Input>
    </FormGroup>
  );
};

export default MyPageSize;
