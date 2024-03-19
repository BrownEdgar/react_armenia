import React from 'react'
import './Blog.scss'

export default function Blog() {
  return (
    <div className='Blog'>
      <h1>Blog Armenia</h1>
      <div className='Blog__card'>
        <div className='Card'>
          <p>Lorem ipsum.</p>
          <img src="./public/Images/first.jpg"  />
        </div>
        <div className='Card'>
          <p>Lorem ipsum dolor sit.</p>
          <img src="./public/Images/second.jpg"  />
        </div>
        <div className='Card'>
          <p>Lorem, ipsum dolor.</p>
          <img src="./public/Images/third.jpg"  />
        </div>
      </div>
    </div>
  )
}
