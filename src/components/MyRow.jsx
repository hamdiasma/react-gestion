import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { ButtonGroup, Button } from "reactstrap";
import DeleteMovieModal from "./modals/DeleteMovieModal";
import UpdateMovieModal from "./modals/UpdateMovieModal";
import DeleteSerieModal from "./modals/DeleteSerieModal";
import UpdateSerieModal from "./modals/UpdateSerieModal";
import EditIcon from "../assets/images/edit.svg";
import DeleteIcon from "../assets/images/delete.svg";

const MyRow = props => {
  const [isUpdateOpen, setIsModalUpdate] = React.useState(false);
  const [isDeleteOpen, setIsModalDelete] = React.useState(false);

  const currentUser = useSelector(state => state.currentUser);

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
            props.element.poster
              ? props.element.poster
              : "https://m.media-amazon.com/images/G/01/imdb/images/nopicture/medium/film-3385785534._CB483791896_.png"
          }
          alt={props.element.title}
        />
      </td>
      <td>{props.element.title}</td>
      <td>{props.element.year}</td>
      <td>{props.element.runtime}</td>
      {currentUser.name ? (
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
      ) : (
        <Fragment />
      )}
      {props.type === "movie" ? (
        <Fragment>
          <UpdateMovieModal
            isOpen={isUpdateOpen}
            toggle={toggleUpdate}
            movie={props.element}
            refresh={props.refresh}
          />
          <DeleteMovieModal
            isOpen={isDeleteOpen}
            toggle={toggleDelete}
            movie={props.element}
            refresh={props.refresh}
          />
        </Fragment>
      ) : (
        <Fragment>
          <UpdateSerieModal
            isOpen={isUpdateOpen}
            toggle={toggleUpdate}
            serie={props.element}
            refresh={props.refresh}
          />
          <DeleteSerieModal
            isOpen={isDeleteOpen}
            toggle={toggleDelete}
            serie={props.element}
            refresh={props.refresh}
          />
        </Fragment>
      )}
    </tr>
  );
};

export default MyRow;
