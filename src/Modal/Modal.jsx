
import React from 'react';
import './Modal.scss';

export default function Modal({ children }) {
  return (
    <div className='Modal'>
      <div className="Modal__items">
        {children}
      </div>
    </div>
  );
}




