import React from "react";
import { useState } from "react";
import "./Slider.scss";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import { sliderItems } from "../../data";
import { Link } from "react-router-dom";
function Slider() {
  console.log(sliderItems.length);
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? sliderItems.length - 1 : (prev) => prev - 1
    );
  };
  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === sliderItems.length - 1 ? 0 : (prev) => prev + 1
    );
  };
  return (
    <div className="slider">
      <div className="arrow arrow--left" onClick={prevSlide}>
        <BsArrowLeftSquare />
      </div>

      <div
        className="wrapper"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {sliderItems.map((item) => {
          return (
            <div className="sliderItem">
              <div className="image">
                <img src={item.img} alt="hinh" />
              </div>

              <div className="info">
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <Link to="/products/all">
                  <button>SHOW NOW</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="arrow arrow--right" onClick={nextSlide}>
        <BsArrowRightSquare />
      </div>
    </div>
  );
}

export default Slider;
