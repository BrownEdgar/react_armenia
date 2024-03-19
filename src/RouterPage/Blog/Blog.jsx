import React from 'react'
import './Blog.scss'
import first from '../../assets/first.jpg'
import second from '../../assets/second.jpg'
import third from '../../assets/third.jpg'



export default function Blog() {
  return (
    <div className='Blog'>
      <h1>Blog Armenia</h1>
      <div className='Blog__card'>
        <div className='Card'>
          <p>Lorem ipsum.</p>
          <img src={first} />
        </div>
        <div className='Card'>
          <p>Lorem ipsum dolor sit.</p>
          <img src={second} />
        </div>
        <div className='Card'>
          <p>Lorem, ipsum dolor.</p>
          <img src={third} />
        </div>
      </div>
    </div>
  )
}
