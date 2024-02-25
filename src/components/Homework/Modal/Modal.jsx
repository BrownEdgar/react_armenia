import React from 'react'
import './Modal.scss'
import PropTypes from 'prop-types'

function Modal({children, isOpen}) {
    if(!isOpen){
        return null     
    }
  return (
    <div className='Modal'>
        {children}
    </div>
  )
}

Modal.propTypes = {
    isOpen : PropTypes.bool.isRequired
}

export default Modal