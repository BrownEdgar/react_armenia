import React, { useState } from 'react'
import  data  from "../../data.json";
import './Cards.css'
export default function Cards() {
  
  const [color, setColor] = useState([])
  const hendleColor = (elm)=>{
    setColor(elm)
  }
  return (
    <div>
      <p className='Cards__header'>Background is <span className='Cards__header-span'>{color}</span></p>
        <div  className={`${ color ? color +"_"+ 'active': ''}`}>
          <p className='Cards__title'><span className='Cards__title-span'>React events </span>(change background)</p>
          <p className='Cards__text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum laboriosam expedita alias nemo, quasi nihil molestias blanditiis repellendus cupiditate exercitationem beatae fugiat officiis aperiam, architecto quibusdam incidunt temporibus deleniti esse?</p>
          <div className='buttons'>{
            data.map((elm)=>{
            return (
             <div key={elm}>
              <button className={`${ elm === color ? color +"_"+ 'button': 'button'}`} onMouseMove={()=>hendleColor(elm)}>{elm}</button>

             </div>)
        })
      }
          </div>
        </div>
      </div>
  )
}
