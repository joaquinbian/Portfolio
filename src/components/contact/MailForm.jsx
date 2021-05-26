import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { send } from "emailjs-com";
import ModalConfirm from "./ModalConfirm";
import style from "./mailForm.module.css";

const MailForm = () => {
  const [showModal, setShowModal] = useState(false);

  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });
  const setModalHandler = () => {
    setShowModal(!showModal);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    send(
      "service_y4xdtmn",
      "template_r3ry25a",
      toSend,
      "user_LosnGqZAPulaIFOEyhhjn"
    )
      .then((response) => {
        setModalHandler();
      })
      .then(() => {
        setToSend({
          from_name: "",
          to_name: "",
          message: "",
          reply_to: "",
        });
      })
      .catch((err) => {
        console.log("Failed", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form className="d-flex flex-column" onSubmit={submitHandler}>
        <div className="d-flex flex-column m-3">
          <label className="align-self-center">
            <h4 className={style.labelText}>Name</h4>
          </label>
          <input
            type="text"
            name="from_name"
            placeholder="from name"
            value={toSend.from_name}
            onChange={handleChange}
            className="form-control  align-self-center"
          />
        </div>

        <div className="d-flex flex-column m-3">
          <label className="align-self-center">
            <h4 className={style.labelText}>
              <h4 className={style.labelText}>To</h4>
            </h4>
          </label>
          <input
            type="text"
            name="to_name"
            placeholder="to name"
            value={toSend.to_name}
            onChange={handleChange}
            className="form-control  align-self-center"
          />
        </div>
        <div className="d-flex flex-column m-3">
          <label className="align-self-center">
            <h4 className={style.labelText}>Message</h4>
          </label>
          <input
            type="text-area"
            name="message"
            placeholder="your message"
            value={toSend.message}
            onChange={handleChange}
            className="form-control align-self-center"
          />
        </div>
        <div className="d-flex flex-column m-3">
          <label className="align-self-center">
            <h4 className={style.labelText}>Your e-mail</h4>
          </label>
          <input
            type="text"
            name="reply_to"
            placeholder="Your email"
            value={toSend.reply_to}
            onChange={handleChange}
            className="form-control  align-self-center"
          />
        </div>
        <div className="d-flex justify-content-center ">
          <Button type="submit" className="btn-success">
            Send
          </Button>
        </div>
        {/* <ModalConfirm showModal={showModal} setModalHandler={setModalHandler} /> */}
      </form>
    </div>
  );
};
export default MailForm;
