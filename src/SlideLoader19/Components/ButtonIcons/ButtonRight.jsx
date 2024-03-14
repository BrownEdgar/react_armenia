import React from 'react'

export default function ButtonRight({ index, setIndex, users }) {

    const rightClick = () => {
        setIndex(index + 1)
    }
    return (
        <div className='ButtonRight'>
            <button className='slide__right' onClick={rightClick} disabled={index === users.length - 1}>
                <i className="bi bi-caret-right-fill"></i>
            </button>
        </div>
    )
}
