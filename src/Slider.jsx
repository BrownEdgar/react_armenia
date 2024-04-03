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
  return (
    <Slider {...settings}>
      {
        new Array(4).fill().map((_, index) => {
          return (
            <div key={index} className='slider__item'>
              <img src="https://cdn.pixabay.com/photo/2023/12/17/20/31/car-8454879_1280.jpg" alt="car" />
            </div>
          )
        })
      }
    </Slider>
  );
}