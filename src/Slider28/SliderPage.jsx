import React from "react";
import Slider from "react-slick";
import { posts } from "./post";
import './App.scss'


function CenterMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 1,
    speed: 500
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {posts.map(elm => (
          <div key={elm.id} className="slider-control">
            <h4>{elm.name}</h4>
            <p>{elm.username}</p>
            <img src={elm.img} alt="#" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CenterMode;