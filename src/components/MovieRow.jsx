import React from "react";
import { ButtonGroup, Button } from "reactstrap";
import DeleteMovieModal from "./modals/DeleteMovieModal";
import UpdateMovieModal from "./modals/UpdateMovieModal";
import EditIcon from "../assets/images/edit.svg";
import DeleteIcon from "../assets/images/delete.svg";

const MovieRow = props => {
  const [isUpdateOpen, setIsModalUpdate] = React.useState(false);
  const [isDeleteOpen, setIsModalDelete] = React.useState(false);

  const toggleUpdate = () => {
    setIsModalUpdate(!isUpdateOpen);
  };
  const toggleDelete = () => {
    setIsModalDelete(!isDeleteOpen);
  };

  return (
    <tr>
      <td align="center">
        <img
          style={{ width: 30, height: "auto" }}
          src={
            props.movie.poster
              ? props.movie.poster
              : "https://m.media-amazon.com/images/G/01/imdb/images/nopicture/medium/film-3385785534._CB483791896_.png"
          }
          alt={props.movie.title}
        />
      </td>
      <td>{props.movie.title}</td>
      <td>{props.movie.year}</td>
      <td>{props.movie.runtime}</td>
      <td align="right">
        <ButtonGroup>
          <Button size="xs" color="warning" onClick={() => toggleUpdate()}>
            <span role="img" aria-label="edit">
              <img src={EditIcon} alt="Edit" />
            </span>{" "}
            Update
          </Button>
          <Button size="xs" color="danger" onClick={() => toggleDelete()}>
            <span role="img" aria-label="delete">
              <img src={DeleteIcon} alt="Delete" />
            </span>{" "}
            Delete
          </Button>
        </ButtonGroup>
      </td>
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
    </tr>
  );
};

export default MovieRow;
