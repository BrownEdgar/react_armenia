import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export default function Aphorisms({ aphorism, handleLike }) {
  return (
    <div className='Aphorisms'>
      {
        aphorism.map(elm => {
          return (
            <div className='Aphorisms__icons' key={elm.id}>
              <p>{elm.quote}</p>
              <div className='Aphorisms__little-part'>
                <span className='Aphorisms__authors'>{elm.author}</span>
                <span onClick={() => handleLike(elm.id)}>
                  <i className={classNames("bi bi-hand-thumbs-up-fill", { 'red': elm?.like })}></i>
                </span>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

Aphorisms.propTypes = {
  aphorism: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      quote: PropTypes.string.isRequired
    })
  ).isRequired,
  handleLike: PropTypes.func.isRequired
}