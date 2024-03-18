import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { useEffect } from 'react'


export default function PropsValidaton({ users, setUsers }) {
  const [likedArr, setLikedArr] = useState([])
  const handleLike = (id) => {
    // const result = users.map(elem => {
    //   if (elem.id === id) {
    //     elem.like = !elem.like;
    //   }
    //   return elem;
    // })
    // setUsers(result)
    if (likedArr.includes(id)) {
      console.log('ok')
      setLikedArr(likedArr.filter(elem => elem !== id))
    } else {
      setLikedArr([...likedArr, id])
    }
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
                  'bi-star': !likedArr.includes(elm.id),
                  'bi-star-fill': likedArr.includes(elm.id)
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
