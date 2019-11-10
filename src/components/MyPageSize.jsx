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
        <option
          value={4}
          selected={
            props.of === "movies"
              ? props.viewSettings.moviePageSize === 4
              : props.viewSettings.seriePageSize === 4
          }
        >
          4
        </option>
        <option
          value={8}
          selected={
            props.of === "movies"
              ? props.viewSettings.moviePageSize === 8
              : props.viewSettings.seriePageSize === 8
          }
        >
          8
        </option>
        <option
          value={16}
          selected={
            props.of === "movies"
              ? props.viewSettings.moviePageSize === 16
              : props.viewSettings.seriePageSize === 16
          }
        >
          16
        </option>
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
