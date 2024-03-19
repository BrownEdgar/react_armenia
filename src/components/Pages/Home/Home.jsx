import React from 'react';
import './Home.scss';
import home from "../../../assets/Images/home.jpg"


function Home() {
  return (
    <div className='Home'>
      <h1>Home Page</h1>
      <img src={home} />
    </div>
  );
}

export default Home;
