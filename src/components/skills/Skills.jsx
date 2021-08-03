import React from "react";
import style from "./skills.module.css";
import TechComponent from "./TechComponent";

const Skills = () => {
  return (
    <div id="skills" className={style.skillsContainer}>
      <div className="container">
        <h1 className={style.title}>Skills</h1>
        <hr className={style.hr} />
        <div className="column">
          <div className="col ">
            <h2>Front-End technolgies</h2>
            <div className="d-flex justify-content-around">
              <TechComponent
                name="HTML"
                img="https://cdn.worldvectorlogo.com/logos/html-1.svg"
                link="https://developer.mozilla.org/es/docs/Web/HTML"
              />

              <TechComponent
                name="CSS"
                img="https://cdn.worldvectorlogo.com/logos/css-3.svg"
                link="https://developer.mozilla.org/es/docs/Web/CSS"
              />

              <TechComponent
                name="JAVASCRIPT"
                img="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
                link="https://developer.mozilla.org/es/docs/Web/JavaScript"
              />

              <TechComponent
                name="REACT"
                img="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                link="https://es.reactjs.org/"
              />

              <TechComponent
                name="REDUX"
                img="https://cdn.worldvectorlogo.com/logos/redux.svg"
                link="https://es.redux.js.org/"
              />
            </div>
          </div>
          <div className="col">
            <h2>Back-End technologies</h2>
            <div className="d-flex justify-content-around">
              <TechComponent
                name="NODE.JS"
                img="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
                link="https://nodejs.org/es/"
              />

              <TechComponent
                name="EXPRESS"
                img="https://cdn.worldvectorlogo.com/logos/express-109.svg"
                link="https://expressjs.com/es/"
              />

              <TechComponent
                name="POSTGRESQL"
                img="https://cdn.worldvectorlogo.com/logos/postgresql.svg"
                link="https://www.postgresql.org/"
              />

              <TechComponent
                name="SEQUELIZE"
                img="https://seeklogo.com/images/S/sequelize-logo-9A5075DB9F-seeklogo.com.png"
                link="https://sequelize.org/"
              />
            </div>
          </div>
          <div className="col">
            <h2>Wishlist </h2>
            <div className="d-flex justify-content-around">
              <TechComponent
                name="REACT NATIVE"
                img="https://cdn.worldvectorlogo.com/logos/react-native-1.svg"
                link="https://reactnative.dev/"
              />

              <TechComponent
                name="TYPESCRIPT"
                img="https://cdn.worldvectorlogo.com/logos/typescript.svg"
                link="https://www.typescriptlang.org/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
