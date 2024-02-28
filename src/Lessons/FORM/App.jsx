import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import './App.scss'

export default function App() {
  const [users, setUsers] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = e.target
    const user = {
      id: nanoid(),
      username: username.value,
      password: password.value
    }
    setUsers([...users, user])
  }

  const sortUsers = () => {
    setUsers((prevUsers) => {
      return prevUsers.toSorted((a, b) => a > b ? 1 : -1)
    })
  }

  const showPassword = (id) => {
    setCurrentUserId(id)
  }

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name='username'
          placeholder='enter your username'
          required
        />
        <input type="password" name='password' required />
        <input type="submit" value='register' />
      </form>
      <hr />
      <div className="buttons">
        <button onClick={sortUsers}>sort users</button>
      </div>
      <ul>
        {
          users.map(elem => {
            return <li key={elem.id}>
              <span>{elem.username}</span>
              <p className='password'>
                <span>pass:</span>
                <span className='grow'>
                  {currentUserId === elem.id ? elem.password : elem.password.at(0).padEnd(9, "*")}
                </span>
                {
                  (currentUserId === elem.id)
                    ? <i className="bi  bi-eye-slash" onClick={() => showPassword(null)}></i>
                    : <i className="bi bi-eye" onClick={() => showPassword(elem.id)}></i>
                }
              </p>
            </li>
          })
        }
      </ul>
    </div>
  )
}
