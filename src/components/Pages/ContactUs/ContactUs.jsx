import React from 'react';
import './ContactUs.scss';
import contactUs from "../../../assets/Images/contactUs.jpg"


function ContactUs() {
  return (
    <div className='ContactUs'>
        <h1>Contact Us </h1>
        <img src={contactUs} />
    </div>
  )
}

export default ContactUs