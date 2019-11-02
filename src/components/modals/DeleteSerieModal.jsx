import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import DeleteIcon from "../../assets/images/delete.svg";

const DeleteSerieModal = props => {
  const handleDelete = async id => {
    await fetch(`http://localhost:5000/serie/${id}`, {
      method: "delete"
    });
    props.toggle();
    props.refresh();
  };

  return (
    <Modal isOpen={props.isOpen}>
      <ModalHeader className="bg-danger" toggle={props.toggle}>
        <strong>Delete:</strong> {props.serie.title}
      </ModalHeader>
      <ModalBody>Do you really want to delete this serie?</ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={() => handleDelete(props.serie._id)}>
          <span role="img" aria-label="delete">
            <img src={DeleteIcon} alt="Delete" />
          </span>{" "}
          Delete
        </Button>
        <Button color="secondary" onClick={props.toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default DeleteSerieModal;
