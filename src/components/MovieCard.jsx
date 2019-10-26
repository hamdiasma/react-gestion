import React, { Fragment } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import DeleteMovieModal from "./modals/DeleteMovieModal";
import UpdateMovieModal from "./modals/UpdateMovieModal";

const MovieCard = props => {
  const [isUpdateOpen, setIsModalUpdate] = React.useState(false);
  const [isDeleteOpen, setIsModalDelete] = React.useState(false);

  const toggleUpdate = () => {
    setIsModalUpdate(!isUpdateOpen);
  };
  const toggleDelete = () => {
    setIsModalDelete(!isDeleteOpen);
  };

  return (
    <div className="col-md-3 mt-5">
      <Card>
        {props.movie.poster ? (
          <CardImg
            top
            width="100%"
            src={props.movie.poster}
            alt={props.movie.title}
          />
        ) : (
          <Fragment />
        )}
        <CardBody>
          <CardTitle>
            <h4>{props.movie.title}</h4>
          </CardTitle>
          <CardSubtitle>
            <strong>Year:</strong> {props.movie.year}
          </CardSubtitle>
          <CardText>
            <strong>Runtime:</strong> {props.movie.runtime}
          </CardText>
          <Button color="warning" onClick={() => toggleUpdate()}>
            Update
          </Button>
          <Button color="danger" onClick={() => toggleDelete()}>
            Delete
          </Button>
        </CardBody>
      </Card>
      <UpdateMovieModal
        isOpen={isUpdateOpen}
        toggle={toggleUpdate}
        movie={props.movie}
        refresh={props.refresh}
      />
      <DeleteMovieModal
        isOpen={isDeleteOpen}
        toggle={toggleDelete}
        movie={props.movie}
        refresh={props.refresh}
      />
    </div>
  );
};

export default MovieCard;
