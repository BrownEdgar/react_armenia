import React from 'react'
import './Blog.scss'
import { useOutletContext } from 'react-router-dom'

export default function Blog() {
  const count = useOutletContext();
 console.log(count);
  return (
    <div className='Blog'>
      <h1>Blog</h1>
    </div>
  )
}
