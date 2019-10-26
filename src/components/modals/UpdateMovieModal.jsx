import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const UpdateMovieModal = props => {
  return (
    <Modal isOpen={props.isOpen}>
      <ModalHeader className="bg-warning" toggle={props.toggle}>
        <strong>Update:</strong> {props.movie.title}
      </ModalHeader>
      <ModalBody>
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <label>
            Title:
            <input className="form-control" value={props.movie.title} />
          </label>
          <br />
          <label>
            Year:
            <input className="form-control" value={props.movie.year} />
          </label>
          <br />
          <label>
            Runtime:
            <input className="form-control" value={props.movie.runtime} />
          </label>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="warning" onClick={props.toggle}>
          Do Something
        </Button>{" "}
        <Button color="secondary" onClick={props.toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default UpdateMovieModal;
