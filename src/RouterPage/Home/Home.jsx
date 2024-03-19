import React from 'react'
import './Home.scss'
import flag from '../../assets/Flag.jpg'

export default function Home() {
  return (
    <div className='Home'>
      <h1>Armenia</h1>
      <div>
        <img src={flag}/>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum perspiciatis, illum sit saepe facere, 
          laborum, tempore totam aliquam minus nam et tempora consequuntur. Magnam molestias quas ipsam. Dolore cum illo, 
          repellendus repellat eaque cupiditate voluptatibus tenetur eius cumque qui! Reprehenderit necessitatibus 
          eveniet in rerum obcaecati dolorem repellendus deserunt, alias sit.
        </span>
      </div>
    </div>
  )
}
