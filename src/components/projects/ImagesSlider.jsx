import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import style from "./imagesSlider.module.css";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div className="slider">
      <FaArrowAltCircleLeft className={style.leftArrow} onClick={prevSlide} />
      {console.log(slides)}
      {slides &&
        slides.map((slide, i) => {
          return (
            <div
              className={i === current ? style.slideActive : style.slide}
              key={i}
            >
              {i === current && (
                <img src={slide.image} alt="foto" className={style.image} />
              )}
            </div>
          );
        })}

      <FaArrowAltCircleRight className={style.rightArrow} onClick={nextSlide} />
    </div>
  );
};
export default ImageSlider;
