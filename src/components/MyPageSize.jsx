import React from "react";
import { connect } from "react-redux";
import { FormGroup, Input } from "reactstrap";
import {
  changeSeriePageSize,
  changeMoviePageSize
} from "../actions/viewSettings";

const MyPageSize = props => {
  const handleChange = e => {
    if (props.of === "movies") {
      props.changeMoviePageSize(parseInt(e.target.value));
    } else {
      props.changeSeriePageSize(parseInt(e.target.value));
    }
  };

  return (
    <FormGroup
      style={{
        width: 70,
        marginRight: 20
      }}
    >
      <Input
        onChange={handleChange}
        type="select"
        defaultValue={
          props.of === "movies"
            ? props.viewSettings.moviePageSize
            : props.viewSettings.seriePageSize
        }
      >
        <option value={4}>4</option>
        <option value={8}>8</option>
        <option value={16}>16</option>
      </Input>
    </FormGroup>
  );
};

const mapStateToProps = state => ({
  viewSettings: state.viewSettings
});

const mapDispatchToProps = {
  changeSeriePageSize,
  changeMoviePageSize
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPageSize);
