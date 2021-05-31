import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { send } from "emailjs-com";
import style from "./mailForm.module.css";
import Swal from "sweetalert2";
import { useFormik } from "formik";

const MailForm = () => {
  // const [toSend, setToSend] = useState({
  //   from_name: "",
  //   to_name: "",
  //   message: "",
  //   reply_to: "",
  // });
  // const [errors, setErrors] = useState({});

  const toast = Swal.mixin({
    showConfirmButton: false,
    toast: true,
    timer: 2500,
    timerProgressBar: true,
  });

  const validate = (values) => {
    const errors = {};
    if (!values.from_name) {
      errors.from_name = "Name is required";
    }
    if (!values.message) {
      errors.message = "Message is required";
    }
    if (!values.reply_to) {
      errors.reply_to = "Your e-mail is required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      from_name: "",
      to_name: "",
      message: "",
      reply_to: "",
    },
    validate,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      console.log("hola");

      send(
        "service_y4xdtmn",
        "template_r3ry25a",
        values,
        "user_LosnGqZAPulaIFOEyhhjn"
      )
        .then(() => {
          toast.fire({
            text: "Thank you! your message was sent successfully",
            icon: "success",
          });
        })
        .then(() => {
          formik.resetForm({
            from_name: "",
            to_name: "",
            message: "",
            reply_to: "",
          });
        })
        .then(() => {
          console.log(formik.errors);
        })
        .catch((err) => {
          console.log("Failed", err);
        });
    },
  });

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   console.log(errors.length, "soy la longitud de errors");
  //   console.log(errors);
  //   console.log(Object.entries(toSend));
  //   if (!Object.keys(errors).length) {
  //     send(
  //       "service_y4xdtmn",
  //       "template_r3ry25a",
  //       toSend,
  //       "user_LosnGqZAPulaIFOEyhhjn"
  //     )
  //       .then(() => {
  //         toast.fire({
  //           text: "Thank you! your message was sent successfully",
  //           icon: "success",
  //         });
  //       })
  //       .then(() => {
  //         setToSend({
  //           from_name: "",
  //           to_name: "",
  //           message: "",
  //           reply_to: "",
  //         });
  //       })
  //       .catch((err) => {
  //         console.log("Failed", err);
  //       });
  //   } else {
  //     toast
  //       .fire({
  //         text: "Please, fill all the fields before submit, thank you!",
  //         icon: "warning",
  //       })
  //       .then(() => {
  //         return;
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // };

  // const handleChange = (e) => {
  //   setErrors(validate({ ...toSend, [e.target.name]: e.target.value }));
  //   setToSend({ ...toSend, [e.target.name]: e.target.value });
  // };
  return (
    <div>
      <form className="d-flex flex-column" onSubmit={formik.handleSubmit}>
        <div className="d-flex flex-column m-3">
          <label className="align-self-center">
            <h4 className={style.labelText}>Name</h4>
          </label>
          {console.log(formik.errors)}
          <input
            type="text"
            name="from_name"
            placeholder="your name..."
            value={formik.values.from_name}
            onChange={formik.handleChange}
            className={
              formik.errors.from_name
                ? "form-control is-invalid  align-self-center"
                : "form-control align-self-center"
            }
          />
          {formik.errors.from_name ? (
            <b className="text-danger align-self-center">
              {formik.errors.from_name}
            </b>
          ) : (
            ""
          )}
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
            value="Joaquin Bianchi"
            className="form-control  align-self-center"
            disabled
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
            value={formik.values.message}
            onChange={formik.handleChange}
            className={
              formik.errors.message
                ? "form-control is-invalid align-self-center"
                : "form-control align-self-center"
            }
          />
          {formik.errors.message ? (
            <b className="text-danger align-self-center">
              {formik.errors.message}
            </b>
          ) : (
            ""
          )}
        </div>
        <div className="d-flex flex-column m-3">
          <label className="align-self-center">
            <h4 className={style.labelText}>Your e-mail</h4>
          </label>
          <input
            type="text"
            name="reply_to"
            placeholder="Your email"
            value={formik.values.reply_to}
            onChange={formik.handleChange}
            className={
              formik.errors.reply_to
                ? "form-control is-invalid align-self-center"
                : "form-control align-self-center"
            }
          />
          {formik.errors.reply_to ? (
            <b className="text-danger align-self-center">
              {formik.errors.reply_to}
            </b>
          ) : (
            ""
          )}
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
