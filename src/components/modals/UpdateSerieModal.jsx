import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import EditIcon from "../../assets/images/edit.svg";
import {useSelector} from "react-redux";

const UpdateSerieModal = props => {
  const [title, setTitle] = React.useState(props.serie.title);
  const [year, setYear] = React.useState(props.serie.year);
  const [poster, setPoster] = React.useState(props.serie.poster);
  const [runtime, setRuntime] = React.useState(props.serie.runtime);

  const currentUser = useSelector(store => store.currentUser)

  const handleUpdate = async id => {
    await fetch(`http://localhost:5000/serie/${id}`, {
      method: "put",
      body: JSON.stringify({
        title,
        year: parseInt(year),
        runtime: parseInt(runtime),
        poster
      }),
      headers: {
        authorization: currentUser.user.token,
        "Content-Type": "application/json"
      }
    });
    props.toggle();
    props.refresh();
  };

  return (
    <Modal isOpen={props.isOpen}>
      <ModalHeader className="bg-warning" toggle={props.toggle}>
        <strong>Update:</strong> {props.serie.title}
      </ModalHeader>
      <ModalBody>
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <label>
            Title:
            <input
              className="form-control"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </label>
          <br />
          <label>
            Year:
            <input
              className="form-control"
              value={year}
              onChange={e => setYear(e.target.value)}
            />
          </label>
          <br />
          <label>
            Runtime:
            <input
              className="form-control"
              value={runtime}
              onChange={e => setRuntime(e.target.value)}
            />
          </label>
          <br />
          <label>
            Poster:
            <input
              className="form-control"
              value={poster}
              onChange={e => setPoster(e.target.value)}
            />
          </label>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="warning" onClick={() => handleUpdate(props.serie._id)}>
          <span role="img" aria-label="edit">
            <img src={EditIcon} alt="Edit" />
          </span>{" "}
          Update
        </Button>
        <Button color="secondary" onClick={props.toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default UpdateSerieModal;
