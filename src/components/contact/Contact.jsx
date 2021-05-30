import React from "react";
import style from "./contact.module.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import MailForm from "./MailForm";

const Contact = () => {
  return (
    <div id="contact">
      <div className="container">
        <h1 className={style.title}>
          If you want to know more... Please let me know!
        </h1>
        <div className="row">
          <div className="col-12 col-md-5 d-flex">
            <img
              src="https://cdn.worldvectorlogo.com/logos/gmail-icon.svg"
              width="30"
              height="30"
              alt="gmail"
            />
            <h3 className="ml-3">By sending me an e-mail...</h3>
          </div>
          <div className="col-12 col-md-7">
            <MailForm />
          </div>
        </div>
        <div className="column ">
          <div class="col aling-self-start p-4">
            <h3> Or in my social media!</h3>
          </div>
          <div class="col d-flex justify-content-around">
            <div className="d-flex flex-column align-items-center p-4">
              <a
                href="https://www.linkedin.com/in/joaquin-bianchi-js/"
                className={style.iconContact}
              >
                <img
                  src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"
                  width="50"
                  height="50"
                  alt="linkedin"
                />
              </a>
              <h4 className="mt-2">LINKEDIN</h4>
            </div>
            <div className="d-flex flex-column align-items-center p-4">
              <a
                href="https://github.com/joaquinbian"
                className={style.iconContact}
              >
                <img
                  src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"
                  width="50"
                  height="50"
                  alt="github"
                />
              </a>
              <h4 className="mt-2">GITHUB</h4>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center p-5">
          <a href="#about" className={style.linkArrow}>
            <AiOutlineArrowUp className={style.arrowUp} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Contact;
