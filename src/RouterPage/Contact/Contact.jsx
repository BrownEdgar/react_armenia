import React, { useEffect, useState } from 'react'
import './Contsact.scss'
import axios from 'axios'

export default function Contact() {
  const [users, setUsers] = useState([])
  const [index, setIndex] = useState(0)

  const usersRequest = useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
  })

  const leftClick = () => {
    setIndex(index - 1)
  }

  const rightCiick = ()=>{
    setIndex(index + 1)
  }

  return (
    <div className='Contact'>
     
        <button onClick={leftClick} disabled={index === 0} className='left'> Left</button>
    
      {
        users.length > 0 ? (
          <div key={users[0].id} className='Contact__section'>
            <h3>{users[index].name}</h3>
            <p>{users[index].company.catchPhrase}</p>
          </div>
        ) : null
      }
      <button onClick={rightCiick} disabled={index === users.length - 1} className='right'>Right</button>
    </div>
  )
}
