import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalConfirm = ({ showModal, setModalHandler }) => {
  return (
    <div>
      <Modal show={showModal}>
        <Modal.Header>
          <h2>Success</h2>
        </Modal.Header>
        <Modal.Body>
          <h2>Se ha enviado el mensaje con exito!</h2>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={setModalHandler}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default ModalConfirm;
