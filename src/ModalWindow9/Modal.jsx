import React from 'react'

export default function Modal({children}) {
  return (
    <div className='Modal'>
        <div className='Modal__item'>
            <div className='Modal__section'>
                <button className='Modal__close'>X</button>
                {children}
            </div>
        </div>
    </div>
  )
}

