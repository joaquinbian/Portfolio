import React from "react";
import style from "./about.module.css";
import foto from "../foto/foto.jpg";

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <h1 className={style.aboutme}>About me!</h1>
        <hr className={style.hr} />
        <div className="row d-flex align-items-center">
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <img className={style.img} src={foto} alt="foto" />
          </div>
          <div className="col-12 col-md-6 mt-3">
            <div className={style.textContainer}>
              <h1> Hello there! my name is Joaquín Bianchi</h1>
              <h2>I'm a Full-Stack Developer</h2>
              <h3>
                Front-end oriented and passionated about learning new
                technologies, i'm looking for a project that let me keep
                learning and improving my skills to grow as a professional.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
