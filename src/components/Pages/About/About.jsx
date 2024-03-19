import React from 'react';
import './About.scss';
import about from "../../../assets/Images/aboutUs.jpg"


function About() {
  return (
    <div className='About'>
        <img src={about} />
    </div>
  )
}

export default About