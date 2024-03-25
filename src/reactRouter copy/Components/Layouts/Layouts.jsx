import React, { useState } from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import classNames from 'classnames'
import moment from 'moment'
import './Layouts.scss'


export default function Layouts() {
  const [arr, setArr] = useState([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }])

  const handleClick = (id) => {
    setArr(arr.map(elm => { elm.like = false }))
    const result = arr.map(elm => {
      if (elm.id === id) {
        elm.like = !elm.like
      }
      return elm
    })
    setArr(result)
  }

const [date, setDate] = useState( moment().format(' h:mm:ss a'));
setInterval(() => {
  setDate( moment().format(' h:mm:ss a') )
}, 1000);


  return (
    <>
      <Navbar />
      <main>
        <span className='time'><i className="bi bi-alarm"></i>{date} </span>
        <Outlet />
      </main>
      <footer>
        <h2>Rate our page!</h2>
        <div className='stars-container'>
          {
            arr.map((elm) => {
              return (
                <i key={elm.id} id={elm.id} className={classNames("bi bi-star", { 'red': elm.like })} onClick={() => handleClick(elm.id)}></i>
              )
            })
          }
        </div>
      </footer>
    </>
  )
}
