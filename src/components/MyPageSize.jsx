import React from "react";
import { FormGroup, Input } from "reactstrap";

const MyPageSize = props => {
  const handleChange = e => {
    props.handle(e.target.value);
  };

  return (
    <FormGroup
      style={{
        width: 70,
        marginRight: 20
      }}
    >
      <Input onChange={handleChange} type="select">
        <option value={4}>4</option>
        <option value={8}>8</option>
        <option value={16}>16</option>
      </Input>
    </FormGroup>
  );
};

export default MyPageSize;
