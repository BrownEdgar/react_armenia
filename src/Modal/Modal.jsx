
import React from 'react';
import './Modal.scss';

export default function Modal({ children, openModal, openPost }) {
    return (
        <div className='Modal'>
            <div className="Modal__items">
                {children}
                <div className='Modal__buttons'>
                <button className='Modal__deny' onClick={openModal}>Cancel</button>
                <button className='Modal__confirm' onClick={openPost}>Continue</button>
            </div>
                </div>
        </div>
    );
}




