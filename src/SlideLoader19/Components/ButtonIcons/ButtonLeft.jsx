import React from 'react'


export default function ButtonLeft({ index, setIndex }) {

  const leftClick = () => {
    setIndex(index - 1)
  }


  return (
    <div className='ButtonLeft'>
      <button className='slide__left' onClick={leftClick} disabled={index === 0}>
        <i className="bi bi-caret-left-fill"></i>
      </button>

    </div>
  )
}
