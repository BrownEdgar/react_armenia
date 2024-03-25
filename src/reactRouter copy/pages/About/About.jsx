import React from 'react'
import axios from 'axios'
import { Link, useLoaderData } from 'react-router-dom'
import './About.scss'

export default function About() {
  const posts = useLoaderData()
  return (
    <div className='About'>
      <h1>Posts page</h1>
      {
        posts.map(elm => {
          return (
            <Link to={`${elm.id}`} key={elm.id}>{elm.title}</Link>
          )
        })
      }
    </div>
  )
}
export const postsLoader = async () => {
  const response = await axios('https://jsonplaceholder.typicode.com/todos?_limit=5')
  return response.data
  // return {
  //   data : response.data, 
  //   x : 2
  // }
}