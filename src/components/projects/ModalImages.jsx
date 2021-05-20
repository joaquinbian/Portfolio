import React from "react";
import { Modal, Button } from "react-bootstrap";
import ImagesSlider from "./ImagesSlider";
import { imagesPI } from "../projectsPhotos/projectsPhotos";
import style from "./modalImages.module.css";

const ModalImages = ({ showModal, setShowModal, imagesSlides }) => {
  const showModalHandler = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="d-flex">
      <div className={style.btnContainer}>
        <Button onClick={showModalHandler} className={style.btnPhotos}>
          See all photos
        </Button>
      </div>
      <Modal show={showModal} size="lg">
        <div className={style.modalImagesContainer}>
          <Modal.Header className="d-flex">
            <Button
              className="btn btn-danger align-self-end"
              onClick={showModalHandler}
            >
              x
            </Button>
          </Modal.Header>
          <Modal.Body>
            <ImagesSlider slides={imagesSlides} />
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
};
export default ModalImages;
