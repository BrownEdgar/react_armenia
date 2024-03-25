import React from 'react'
import './Blog.scss'
import { useOutletContext } from 'react-router-dom'

export default function Blog() {

  const count = useOutletContext()

  return (
    <div className='Blog'>
      <h1>Blog Page</h1>

    </div>
  )
}
