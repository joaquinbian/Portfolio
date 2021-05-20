import React from "react";
import style from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.navbarContainer}>
      <a href="#about" className={style.linkNavbar}>
        <div className="d-flex">
          <h5 className={style.text}>About</h5>
        </div>
      </a>
      <a href="#projects" className={style.linkNavbar}>
        <h5 className={style.text}>Projects</h5>
      </a>
      <a href="#skills" className={style.linkNavbar}>
        <h5 className={style.text}>Skills</h5>
      </a>
      <a href="#contact" className={style.linkNavbar}>
        <h5 className={style.text}>Contact</h5>
      </a>
    </div>
  );
};
export default Navbar;
