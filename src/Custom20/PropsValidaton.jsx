import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { useEffect } from 'react'


export default function PropsValidaton({ users }) {
  const [isLiked, setIsLiked] = useState(()=>{
    const saveLiked = localStorage.getItem('likesIcons')
    return saveLiked ? JSON.parse(saveLiked) : {}
  })

  useEffect(() => {
   localStorage.setItem('likesIcons', JSON.stringify(isLiked))
  }, [isLiked])
  
  const handleLike = (id) => {
    setIsLiked(prevIsLicked=>({
      ...prevIsLicked,
      [id]:!prevIsLicked[id]
    }))
  }

  return (
    <div className='Conteiner'>
      <div className="Drow">
        {users.map(elm => (
          <div key={elm.id}>
            <h3>{elm.author}
              <i 
                onClick={() => handleLike(elm.id)} 
                className={classNames('bi', {
                  'bi-star': !isLiked[elm.id],
                  'bi-star-fill': isLiked[elm.id]
              })}></i>
            </h3>
            <p>{elm.quote}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

PropsValidaton.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      quote: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
}
