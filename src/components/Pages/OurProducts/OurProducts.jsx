import React from 'react';
import './OurProducts.scss';
import ourProducts from "../../../assets/Images/ourProducts.jpg"


function OurProducts() {
  return (
    <div className='OurProducts'>
        <h1>Our Products Page</h1>
        <img src={ourProducts} />
    </div>
  )
}

export default OurProducts