import React, { useState } from "react";
import style from "./projects.module.css";
import { imagesPI, imagesWeatherApp } from "../projectsPhotos/projectsPhotos";
import Carousel from "../carousel/Carousel";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div id="projects" className="container">
      <h1 className={style.title}>My Projects</h1>

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
              <a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
                  width="50"
                  height="50"
                  alt="javascript"
                />
              </a>
              <a href="https://es.reactjs.org/">
                <img
                  src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                  width="50"
                  height="50"
                  alt="react"
                />
              </a>
              <a href="https://es.redux.js.org/">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/redux.svg"
                  width="50"
                  height="50"
                  alt="redux"
                />
              </a>
              <a href="https://nodejs.org/es/">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
                  width="50"
                  height="50"
                  alt="node"
                />
              </a>
              <a href="https://expressjs.com/es/">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/express-109.svg"
                  width="50"
                  height="50"
                  alt="express"
                />
              </a>
              <a href="https://sequelize.org/">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/sequelize.svg"
                  width="50"
                  height="50"
                  alt="sequelize"
                />
              </a>
              <a href="https://www.postgresql.org/">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/postgresql.svg"
                  width="50"
                  height="50"
                  alt="postgre"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-7">
          {/* <div className={style.modalContainer}>
            <ImageSlider slides={imagesPI} />
          </div> */}
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
              <a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
                  width="50"
                  height="50"
                  alt="javascript"
                />
              </a>
              <a href="https://es.reactjs.org/">
                <img
                  src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                  width="50"
                  height="50"
                  alt="react"
                />
              </a>
            </div>
          </h4>
        </div>
        <div className="col-12 col-lg-7">
          {/* <img
            src="https://github.com/joaquinbian/joaquinbian/raw/main/screenshotsProjects/LandingPagePhoto.png"
            alt="landing-page"
            className={style.landingImage}
          /> */}
          {/* <div className={style.modalContainer}>
            <ImageSlider slides={imagesWeatherApp} />
          </div> */}
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
