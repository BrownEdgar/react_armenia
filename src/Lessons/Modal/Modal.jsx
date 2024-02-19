import React, { useEffect, useRef } from 'react'
import './Modal.scss'

export default function Modal({ children, toggleModal, theme = 'dark' }) {
  const modalRef = useRef(null)
  useEffect(() => {
    const handleClick = (e) => {
      console.log(modalRef.current)

      if (e.target === modalRef.current) {
        toggleModal(false)
      }
    }
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <div className={`Modal Modal-${theme}`} ref={modalRef}>
      <div className="Modal__content">
        {/* <button className='Modal__close' onClick={toggleModal}>&#10006;</button> */}
        {children}
      </div>
    </div>
  )
}
