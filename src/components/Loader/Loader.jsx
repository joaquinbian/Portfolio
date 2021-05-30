import React from "react";
import Animation from "../../loading2.gif";
import style from "./loader.module.css";

const Loader = () => {
  return (
    <div className={style.container}>
      {/* <div className={style.loadingContainer}> */}
      <img src={Animation} alt="loader" className={style.loader} />

      {/* </div> */}
    </div>
  );
};
export default Loader;
