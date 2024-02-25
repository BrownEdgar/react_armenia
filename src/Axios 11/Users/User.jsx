import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import './User.scss'


export default function User() {
    const [user, setUser] = useState([])
    useEffect(() => {
        axios({
            baseURL: import.meta.env.VITE_DB_URL,                //VITE_DB_URL = 'https://jsonplaceholder.typicode.com' 
            url: "users",
            method: "get"
        })
            .then(res => setUser(res.data))
    }, [])

    return (
        <div className='User'>
            <h2>User Section</h2>
            <div className='User__section'>
                {
                    user.map((elm) => {
                        return (
                            <div key={elm.id} className='User__area'>
                                <h4><span>Name: </span>{elm.name}</h4>
                                <p><span>Email: </span>{elm.email}</p>
                                <p><span>City: </span>{elm.address.city}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

