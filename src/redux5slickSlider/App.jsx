import React, { useEffect } from "react";
import Slider from "react-slick";
import { useSelector, useDispatch } from 'react-redux'
import { getAllPosts, getAsyncPosts } from "./features/postSlice";

export default function MultipleItems() {
  const dispatch = useDispatch()
  const {data, loading} = useSelector(getAllPosts)
  console.clear()
console.log(data);
  useEffect(() => {
    dispatch(getAsyncPosts())
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };
    return (
      <div className="slider-container">
        <Slider {...settings}>
        
            {
              data.map(elm=>{
                return <div key={elm.id}>{elm.id}</div>
              })
            }
         
          
        </Slider>
      </div>
    );
}