import React from "react";
import style from "./projects.module.css";
import { imagesPI, imagesWeatherApp } from "../projectsPhotos/projectsPhotos";
import Carousel from "../carousel/Carousel";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import TechComponent from "../skills/TechComponent";

const Projects = () => {
  return (
    <div id="projects" className="container">
      <h1 className={style.title}>My Projects</h1>
      <hr className={style.hr} />

      <div className="row row-cols-auto gx-5 mb-5 justify-content-between align-items-center">
        <div className="col-12 col-lg-5">
          <h1>Trip-Mate</h1>
          <h3>
            A individual project made in Henry bootcamp, with this application
            search for countries, sort and filter them alphabetically, by
            population or continent. And also you can add activities to do
            wherever you want!
            <br /> For this Application i implemented:
          </h3>
          <div>
            <h4>
              Front-End: React, Redux, Css-Modules
              <br />
              Back-End: NodeJS, Express, Sequelize and PostgreSQL
            </h4>
            <hr />
            <div className={style.imagesContainer}>
              <TechComponent
                // name="JAVASCRIPT"
                img="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
                link="https://developer.mozilla.org/es/docs/Web/JavaScript"
              />

              <TechComponent
                // name="REACT"
                img="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                link="https://es.reactjs.org/"
              />

              <TechComponent
                // name="REDUX"
                img="https://cdn.worldvectorlogo.com/logos/redux.svg"
                link="https://es.redux.js.org/"
              />
              <TechComponent
                // name="NODE.JS"
                img="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
                link="https://nodejs.org/es/"
              />

              <TechComponent
                // name="EXPRESS"
                img="https://cdn.worldvectorlogo.com/logos/express-109.svg"
                link="https://expressjs.com/es/"
              />
              <TechComponent
                // name="SEQUELIZE"
                img="https://seeklogo.com/images/S/sequelize-logo-9A5075DB9F-seeklogo.com.png"
                link="https://sequelize.org/"
              />
              <TechComponent
                // name="POSTGRESQL"
                img="https://cdn.worldvectorlogo.com/logos/postgresql.svg"
                link="https://www.postgresql.org/"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-7">
          <div className="d-flex justify-content-around align-items-center mb-2">
            <a
              className={style.link}
              href="https://github.com/joaquinbian/App-Countries"
            >
              <div className="d-flex align-items-center">
                <h4 className="mb-0 mr-3">Github</h4>
                <img
                  src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"
                  width="35"
                  height="35"
                  alt="github"
                />
              </div>
            </a>
          </div>

          <Carousel img={imagesPI} />
        </div>
      </div>
      <div className="row gx-5 justify-content-between align-items-center">
        <div className="col-12 col-lg-5">
          <h1>Weather App</h1>
          <h3>
            With this application you can search how is the weather of any city
            you want to go to. Also you can find a little bit of more data if
            you only click on the name of the city!
            <br /> For this Application i implemented:
          </h3>
          <h4>
            Front-End: React, Redux, Css-Modules
            <br />
            Back-End: NodeJS, Express, Sequelize and PostgreSQL
            <hr />
            <div className={style.imagesContainer}>
              <TechComponent
                // name="JAVASCRIPT"
                img="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
                link="https://developer.mozilla.org/es/docs/Web/JavaScript"
              />

              <TechComponent
                // name="REACT"
                img="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                link="https://es.reactjs.org/"
              />
            </div>
          </h4>
        </div>
        <div className="col-12 col-lg-7">
          <div className="d-flex justify-content-around align-items-center mb-2">
            <a
              className={style.link}
              href="https://github.com/joaquinbian/WeatherApp"
            >
              <div className="d-flex align-items-center">
                <h4 className="mb-0 mr-3">Github</h4>
                <img
                  src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"
                  width="35"
                  height="35"
                  alt="github"
                />
              </div>
            </a>

            <a
              className={style.link}
              href="https://joaquinbian.github.io/WeatherApp/"
            >
              <div className="d-flex align-items-center">
                <h4 className="mb-0 mr-3">Web</h4>
                <OpenInNewIcon fontSize="medium" />
              </div>
            </a>
          </div>
          <Carousel img={imagesWeatherApp} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
