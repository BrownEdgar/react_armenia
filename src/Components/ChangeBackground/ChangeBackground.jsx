import React, { useState } from 'react';
import './ChangeBackground.css';
const arr = ['Black', 'Blue', 'Yellow'];

function ChangeBackground() {
  const [change, setChange] = useState(arr[0]);

  const handleChange = (ChangeElement) => {
    setChange(ChangeElement);
  };

  return (
    <div className='changeBackground'>
      <h1>
        Background is<span> {change} </span>
      </h1>
      <div className='changeBackground__item' style={{ background: change }}>
        <h2>
          <span>React events</span> (change background)
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis laudantium magnam dolore
          libero! Officia quo, quasi magni tempora voluptatum dolore rerum iure quibusdam esse nesciunt
          ipsum eveniet iste! Delectus, maiores.
        </p>
        {arr.map((elem) => {
          return (
            <button
              className={`${elem}`}
              onClick={() => handleChange(elem)}
              key={elem}>
              {elem}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ChangeBackground;