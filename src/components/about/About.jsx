import React from "react";
import style from "./about.module.css";
import foto from "../foto/foto.jpg";

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <h1 className={style.aboutme}>About me!</h1>
        <hr className={style.hr} />
        <div className="row align-items-center">
          <div className="col ">
            <img className={style.img} src={foto} alt="foto" />
          </div>
          <div className="col align-items-center">
            <div className={style.textContainer}>
              <h1> Hello there! my name is Joaquín Bianchi</h1>
              <h2>I'm a Full-Stack Developer</h2>
              <h4>
                Front-end oriented and passionated about learning new
                technologies, i'm looking for a proyect that let me keep
                learning and improving my skills to grow as a professional.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
