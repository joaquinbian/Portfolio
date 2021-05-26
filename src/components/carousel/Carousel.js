import React, { useState } from "react";
import style from "./carousel.module.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Carousel = ({ img }) => {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <div className={style.carousel}>
      <div
        className={style.carouselInner}
        style={{
          backgroundImage: `url(${img[currentImg].image})`,
        }}
      >
        <div
          className={style.left}
          onClick={() => currentImg > 0 && setCurrentImg(currentImg - 1)}
        >
          <ArrowBackIosIcon />
        </div>
        <div className={style.center}></div>
        <div
          className={style.right}
          onClick={() =>
            currentImg < img.length - 1 && setCurrentImg(currentImg + 1)
          }
        >
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
