import React, { useEffect, useState } from 'react'
import './Users.scss'
import axios from 'axios'



export default function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
  }, [])

  const handleDelate = (id) => {
    const user = users.filter(elm => elm.id !== id)
    setUsers(user)
  }

  return (
    <div className='Users'>
      <h1>Users</h1>
      <div className='Users__section'>
        {
          users.map(elm => {
            return (
              <div key={elm.id} className='Users__card'>
                <i className="bi bi-x-lg" onClick={() => handleDelate(elm.id)}></i>
                <h4>{elm.username}</h4>
                <h5>{elm.name}</h5>
                <p>{elm.email}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
