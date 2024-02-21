import React from 'react'
import './Modal.scss'

export default function Modal({ children, isOpen }) {

  if (!isOpen) {
    return null;
  }
  return (
    <div className='Modal'>
      <div className="Modal__content">
        {children}
      </div>
    </div>
  )
}
