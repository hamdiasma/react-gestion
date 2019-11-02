import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardFooter,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import DeleteMovieModal from "./modals/DeleteMovieModal";
import UpdateMovieModal from "./modals/UpdateMovieModal";
import EditIcon from "../assets/images/edit.svg";
import DeleteIcon from "../assets/images/delete.svg";

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
    <div className="col-md-3 mb-5">
      <Card>
        <CardImg
          top
          width="100%"
          src={
            props.movie.poster
              ? props.movie.poster
              : "https://m.media-amazon.com/images/G/01/imdb/images/nopicture/medium/film-3385785534._CB483791896_.png"
          }
          alt={props.movie.title}
        />
        <CardBody>
          <CardTitle>
            <h4>{props.movie.title}</h4>
          </CardTitle>
          <CardSubtitle>
            <strong>Year:</strong> {props.movie.year}
          </CardSubtitle>
          <CardText>
            <strong>Runtime:</strong> {props.movie.runtime} min
          </CardText>
        </CardBody>
        <CardFooter style={{ display: "flex", placeContent: "space-between" }}>
          <Button color="warning" onClick={() => toggleUpdate()}>
            <span role="img" aria-label="edit"><img src={EditIcon} alt="Edit" /></span>{" "}Update
          </Button>
          <Button color="danger" onClick={() => toggleDelete()}>
            <span role="img" aria-label="delete"><img src={DeleteIcon} alt="Delete" /></span>{" "}Delete
          </Button>
        </CardFooter>
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
