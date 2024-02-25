import React, { useEffect } from 'react'
import './Comments.scss'
import { useState } from 'react'
import axios from 'axios'

export default function Comment() {
    const [comment, setComment] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments", {
            params: {
                _limit: 6,
                _start: 9
            }
        })
            .then(res => setComment(res.data))
    }, [])

    return (
        <div className='Comment'>
            <h2>Comment Section</h2>
                <div className='Comment__section'>
                  {comment.map((elm) => {
                    return (
                        <div className='Comment__area' key={elm.id}>
                            <h4><span>Email: </span>{elm.email}</h4>
                            <p><span>Name: </span>{elm.name}</p>
                        </div>
                    )
                }
                )}
            </div>
        </div >
    )
}
