import React from "react";
import "./style/Slider.scss"
import slider_logo from "../../images/slider_logo.png"
import slider_img_01 from "../../images/slider_img_01.png"

export const Slider:React.FC = () => {
  return (
    <div className="slider">
      <div className="slider__logo">
          <img src={slider_logo} alt=""/>
      </div>
      <div className="slider__content content-slider">
        <div className="content-slider__offer">
          <h1 className="content-slider__title"><span>Stan Smith</span>, Forever!</h1>
          <button type="button" className="content-slider__button">Buy</button>
        </div>
        <div className="content-slider__img">
            <img src={slider_img_01} alt="slide"/>
            <button className="content-slider__toggle _icon-arrow-icon"></button>
        </div>
      </div>
    </div>
  );
};
