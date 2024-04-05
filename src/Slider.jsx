import React from "react";
import Slider from "react-slick";
import './Slider.scss'

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    draggable: true,
    speed: 500,
    arrows: false,
    vertical: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000
  };

  const x = 5;
  if (x) {
    throw new Error("Error")
  }
  return (
    <div>
      <h1>Error example</h1>
    </div>
  );
}