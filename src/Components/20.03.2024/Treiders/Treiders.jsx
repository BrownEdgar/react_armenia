import React from 'react'
import Data from './treiders.json'
import './Treiders.scss'

export default function Treiders() {
  return (
    <div className='Treiders'>
        {
            Data.map((elm)=>{
                return(
                    <div className='Treiders__treider' key={elm.name}>
                        <img src={elm.img} alt="" />
                        <p>{elm.name}</p>
                        <p>{elm.position}</p>
                        <b>Trainer</b>
                    </div>
                )
            })
        }
    </div>
  )
}
