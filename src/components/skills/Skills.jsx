import React from "react";
import style from "./skills.module.css";

const Skills = () => {
  return (
    <div id="skills" className="container">
      <h1 className={style.title}>Skills</h1>
      <div className="column">
        <div className="col ">
          <h2>Front-End technolgies</h2>
          <div className="d-flex justify-content-around">
            <div className="d-flex flex-column align-items-center">
              <a
                href="https://developer.mozilla.org/es/docs/Web/HTML"
                className={style.techLogo}
              >
                <img
                  src="https://cdn.worldvectorlogo.com/logos/html5-2.svg"
                  width="50"
                  height="50"
                />
              </a>
              <h4 className="mt-2">HTML</h4>
            </div>
            <div className="d-flex flex-column align-items-center">
              <a
                href="https://developer.mozilla.org/es/docs/Web/CSS"
                className={style.techLogo}
              >
                <img
                  src="https://cdn.worldvectorlogo.com/logos/css-5.svg"
                  width="50"
                  height="50"
                />
              </a>
              <h4 className="mt-2">CSS</h4>
            </div>
            <div className="d-flex flex-column align-items-center">
              <a
                href="https://developer.mozilla.org/es/docs/Web/JavaScript"
                className={style.techLogo}
              >
                <img
                  src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
                  width="50"
                  height="50"
                />
              </a>
              <h4 className="mt-2">JAVASCRIPT</h4>
            </div>
            <div className="d-flex flex-column align-items-center">
              <a href="https://es.reactjs.org/" className={style.techLogo}>
                <img
                  src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                  width="50"
                  height="50"
                />
              </a>
              <h4 className="mt-2">REACT</h4>
            </div>
            <div className="d-flex flex-column align-items-center">
              <a href="https://es.redux.js.org/" className={style.techLogo}>
                <img
                  src="https://cdn.worldvectorlogo.com/logos/redux.svg"
                  width="50"
                  height="50"
                />
              </a>
              <h4 className="mt-2">REDUX</h4>
            </div>
          </div>
        </div>
        <div className="col">
          <h2>Back-End technologies</h2>
          <div className="d-flex justify-content-around">
            <div className="d-flex flex-column align-items-center">
              <a href="https://nodejs.org/es/" className={style.techLogo}>
                <img
                  src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
                  width="50"
                  height="50"
                />
              </a>
              <h4 className="mt-2">NODEJS</h4>
            </div>
            <div className="d-flex flex-column align-items-center">
              <a href="https://expressjs.com/es/" className={style.techLogo}>
                <img
                  src="https://cdn.worldvectorlogo.com/logos/express-109.svg"
                  width="50"
                  height="50"
                />
              </a>
              <h4 className="mt-2">EXPRESS</h4>
            </div>
            <div className="d-flex flex-column align-items-center">
              <a href="https://www.postgresql.org/" className={style.techLogo}>
                <img
                  src="https://cdn.worldvectorlogo.com/logos/postgresql.svg"
                  width="50"
                  height="50"
                />
              </a>
              <h4 className="mt-2">POSTGRE</h4>
            </div>
            <div className="d-flex flex-column align-items-center">
              <a href="https://sequelize.org/" className={style.techLogo}>
                <img
                  src="https://cdn.worldvectorlogo.com/logos/sequelize.svg"
                  width="50"
                  height="50"
                />
              </a>
              <h4 className="mt-2">SEQUELIZE</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
