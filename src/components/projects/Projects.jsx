import React, { useState } from "react";
import style from "./projects.module.css";
import { imagesPI } from "../projectsPhotos/projectsPhotos";

import ModalImages from "./ModalImages";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div id="projects" className="container">
      <h1 className={style.title}>My Projects</h1>

      <div className="row gx-5 mb-5 justify-content-between align-items-center">
        <div className="col-5">
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
              <img
                src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
                width="50"
                height="50"
              />
              <img
                src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                width="50"
                height="50"
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/redux.svg"
                width="50"
                height="50"
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
                width="50"
                height="50"
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/express-109.svg"
                width="50"
                height="50"
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/sequelize.svg"
                width="50"
                height="50"
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/postgresql.svg"
                width="50"
                height="50"
              />
            </div>
          </div>
        </div>
        <div className="col-7 ">
          <img
            src="https://github.com/joaquinbian/joaquinbian/raw/main/screenshotsProjects/LandingPagePhoto.png"
            alt="landing-page"
            className={style.landingImage}
          />
          <div className={style.modalContainer}>
            <ModalImages
              showModal={showModal}
              setShowModal={setShowModal}
              imagesSlides={imagesPI}
            />
          </div>
        </div>
      </div>
      <div className="row gx-5 justify-content-between align-items-center">
        <div className="col-5">
          <h1>Weather App</h1>
          <h3>
            A individual project made in Henry bootcamp, with this application
            search for countries, sort and filter them alphabetically, by
            population or continent. And also you can add activities to do
            wherever you want!
            <br /> For this Application i implemented:
          </h3>
          <h4>
            Front-End: React, Redux, Css-Modules
            <br />
            Back-End: NodeJS, Express, Sequelize and PostgreSQL
            <hr />
            <div className={style.imagesContainer}>
              <img
                src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
                width="50"
                height="50"
              />
              <img
                src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                width="50"
                height="50"
              />
            </div>
          </h4>
        </div>
        <div className="col-7 ">
          <img
            src="https://github.com/joaquinbian/joaquinbian/raw/main/screenshotsProjects/LandingPagePhoto.png"
            alt="landing-page"
            className={style.landingImage}
          />
          <div className={style.modalContainer}>
            <ModalImages
              showModal={showModal}
              setShowModal={setShowModal}
              imagesSlides={imagesPI}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
