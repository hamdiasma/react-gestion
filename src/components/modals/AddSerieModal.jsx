import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import AddIcon from "../../assets/images/add.svg";
import {useSelector} from "react-redux";

const UpdateSerieModal = props => {
  const [title, setTitle] = React.useState("");
  const [year, setYear] = React.useState("");
  const [poster, setPoster] = React.useState("");
  const [runtime, setRuntime] = React.useState("");

  const currentUser = useSelector(store => store.currentUser)

  const handleAdd = async () => {
    await fetch(`http://localhost:5000/serie`, {
      method: "post",
      body: JSON.stringify({
        title,
        year: parseInt(year),
        runtime: parseInt(runtime),
        poster
      }),
      headers: {
        authorization: currentUser.token,
        "Content-Type": "application/json"
      }
    });
    props.toggle();
    props.refresh();
    setTitle("");
    setYear("");
    setPoster("");
    setRuntime("");
  };

  return (
    <Modal isOpen={props.isOpen}>
      <ModalHeader className="bg-success" toggle={props.toggle}>
        <strong>Add new serie</strong>
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
        <Button color="success" onClick={() => handleAdd()}>
          <span role="img" aria-label="add">
            <img src={AddIcon} alt="Add" />
          </span>{" "}
          Add
        </Button>
        <Button color="secondary" onClick={props.toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default UpdateSerieModal;
