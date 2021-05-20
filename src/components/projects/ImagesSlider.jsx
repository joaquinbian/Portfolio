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
      {console.log(slides)}
      {slides &&
        slides.map((slide, i) => {
          return (
            <div
              className={i === current ? style.slideActive : style.slide}
              key={i}
            >
              {i === current && (
                <img
                  src={slide.image}
                  alt={`photo ${i}`}
                  className={style.image}
                />
              )}
            </div>
          );
        })}
      <div className={style.buttonsContainer}>
        <FaArrowAltCircleLeft className={style.leftArrow} onClick={prevSlide} />
        <FaArrowAltCircleRight
          className={style.rightArrow}
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};
export default ImageSlider;
