import React from 'react';
import axios from 'axios';
import { Link, useLoaderData } from 'react-router-dom';
import './About.scss'

export default function About() {

  const posts = useLoaderData()
  return (
    <div className='About'>
      <h1>Posts Page</h1>
      {
        posts.map(elem => {
          return (
            <Link key={elem.id} to={`${elem.id}`}>{elem.title}</Link>
          )
        })
      }

    </div>
  )
}



export const postsLoader = async (a, b) => {
  console.log({ a, b })
  const response = await axios('https://jsonplaceholder.typicode.com/posts')
  return response.data
}
