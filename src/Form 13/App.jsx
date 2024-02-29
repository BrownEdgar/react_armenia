import './App.scss'
import { nanoid } from 'nanoid'
import React, { useState } from 'react'

export default function App() {
    const [users, setUsers] = useState([])
    const [currentId, setcurrentId] = useState(null)


    const handleSubmit = (e) => {
        e.preventDefault()
        const useremail = e.target.useremail.value
        const username = e.target.username.value
        const password = e.target.password.value

        // if any user with the same email already exists
        if (users.some(user => user.useremail === useremail)) {
            alert('This email has already been declared')
        } else {
            // Create a new user object
            const newUser = {
                id: nanoid(),
                username: username,
                useremail: useremail,
                password: password
            }
            // Update the users array with the new user
            setUsers([...users, newUser])
            // Reset the form
            e.target.reset()
        }
    }

    const viewPassword = (id) => {
        setcurrentId(id)
    }
    return (
        <div className='App'>
            <form onSubmit={handleSubmit} className='App__form'>
                <p>Email</p>
                <input type="email" name='useremail' placeholder='Write your email' required />
                <p>Username</p>
                <input type="text" name='username' required />
                <p>Password</p>
                <input type="password" name='password' required />
                <input className='App_submit' type="submit" value='Submit' />
            </form>
            <ul>
                {users.map(elm => {
                    return (
                        <div key={elm.id} className='ul-section'>
                            <li><span>Email: </span>{elm.useremail}</li>
                            <li><span>Username: </span>{elm.username}</li>
                            <li className='lili'>
                                {currentId === elm.id ? (
                                    <>
                                        <span className='password_span'>Password: </span>
                                        <h4>{elm.password}</h4>
                                        <i className="bi bi-eye-slash" onClick={() => viewPassword(null)}></i>
                                    </>
                                ) : (
                                    <>
                                        <span className='password_span'>Password: </span>
                                        <h4>{'*'.repeat(6)}</h4>
                                        <i className="bi bi-eye" onClick={() => viewPassword(elm.id)}></i>
                                    </>
                                )}

                            </li>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}






