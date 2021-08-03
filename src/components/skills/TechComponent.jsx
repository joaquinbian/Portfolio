import React from "react";
import style from "./skills.module.css";

const TechComponent = ({ name, link, img }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <a href={link} className={style.techLogo}>
        <img src={img} width="50" height="50" alt={name} />
      </a>
      <h4 className="mt-2">{name}</h4>
    </div>
  );
};

export default TechComponent;
