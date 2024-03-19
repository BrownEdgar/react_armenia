import React from 'react'
import './Posts.scss'
import { useState,useEffect } from 'react'
import axios from 'axios'


export default function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
   axios('https://jsonplaceholder.typicode.com/posts',{
    params:{
      _start:5,
      _limit:10
    }
   }) .then(res=> setPosts(res.data))
  }, [])
  

  return (
    <div className='Posts'>
      <h1>Posts</h1>
        <div className='Posts__section'>
          {
            posts.map(elm=>{
              return (
                <div className='Posts__card' key={elm.id}>
                  <h4>{elm.title.toUpperCase()}</h4>
                  <p>{elm.body}</p>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}
