import React, { Fragment } from "react";
import { useSelector } from "react-redux";
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
import DeleteSerieModal from "./modals/DeleteSerieModal";
import UpdateSerieModal from "./modals/UpdateSerieModal";
import EditIcon from "../assets/images/edit.svg";
import DeleteIcon from "../assets/images/delete.svg";

const MyCard = props => {
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
    <div className="col-md-3 mb-5">
      <Card>
        <CardImg
          top
          width="100%"
          src={
            props.element.poster
              ? props.element.poster
              : "https://m.media-amazon.com/images/G/01/imdb/images/nopicture/medium/movie-3385785534._CB483791896_.png"
          }
          alt={props.element.title}
        />
        <CardBody>
          <CardTitle>
            <h4>{props.element.title}</h4>
          </CardTitle>
          <CardSubtitle>
            <strong>Year:</strong> {props.element.year}
          </CardSubtitle>
          <CardText>
            <strong>Runtime:</strong> {props.element.runtime} min
          </CardText>
        </CardBody>
        {currentUser.user && currentUser.user.role === "admin" ? (
          <CardFooter
            style={{ display: "flex", placeContent: "space-between" }}
          >
            <Button color="warning" onClick={() => toggleUpdate()}>
              <span role="img" aria-label="edit">
                <img src={EditIcon} alt="Edit" />
              </span>{" "}
              Update
            </Button>
            <Button color="danger" onClick={() => toggleDelete()}>
              <span role="img" aria-label="delete">
                <img src={DeleteIcon} alt="Delete" />
              </span>{" "}
              Delete
            </Button>
          </CardFooter>
        ) : (
          <Fragment />
        )}
      </Card>
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
    </div>
  );
};

export default MyCard;
