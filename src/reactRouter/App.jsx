import React, { useState } from 'react'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Blog from './pages/Blog/Blog'
import Posts from './pages/Posts/Posts'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import classNames from "classnames";
import './App.scss'


export default function App() {
  const [arr, setArr] = useState([{ id: 1, first: true }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }])

  const handleClick = (id) => {
    setArr(arr.map(elm=>{elm.like = false}))
    const result = arr.map(elm => {
      if (elm.id === id) {
        elm.like = !elm.like
      }
      return elm
    })
    setArr(result)
  }

  return (
    <div className='App'>
      <Navbar />
      <main>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<About />} path='/about' />
          <Route element={<Blog />} path='/blog' />
          <Route element={<Posts />} path='/post' />
        </Routes>
      </main>
      <footer>
        <h2>Rate our page!</h2>
        <div className='stars-container'>
          {
            arr.map((elm) => {
              return (
                <i key={elm.id} id={elm.id} className={classNames("bi bi-star", { 'red': elm.like, 'first': elm.first })} onClick={() => handleClick(elm.id)}></i>
              )
            })
          }
        </div>
      </footer>
    </div>
  )
}
