import React from 'react'
import './Post.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Post() {
    const [post, setpost] = useState([])
    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
            .then(res => setpost(res.data))
    }, [])

    return (
        <div className='Post'>
            <h2>Post Section</h2>
            <div className='Post__section'>
                {post.map((elm) => {
                    return (
                        <div key={elm.id} className='Post__area'>
                            <h4><span>Title: </span>{elm.title}</h4>
                            <p><span>Body: </span>{elm.body}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
