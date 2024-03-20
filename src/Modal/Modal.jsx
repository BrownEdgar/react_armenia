import React, { useEffect, useRef } from 'react'
import './Modal.scss'

export default function Modal({ children, toggleModal, theme = 'light' }) {
    const modalRef =  useRef(null)
    useEffect(() => {
        const handleClick = (e) => {
            console.log(modalRef.current);
            console.log(e.target);
            const { classname } = e.target
            if (e.target === modalRef.current) {
                toggleModal(false)
            }
        }
        window.addEventListener('click', handleClick)
        return () => {
            window.removeEventListener('click', handleClick)
        }
    }, [])

    return (
        <div className={`Modal Modal-${theme}`} ref={modalRef}>
            <div className='Modal__content'>
                {/* <button className='Modal__close' onClick={toggleModal}>&#10008;</button> */}
                {children}
            </div>
        </div>
    )
} 
