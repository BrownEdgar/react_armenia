import React, { useState } from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'
import classNames from "classnames";
import './App.scss'
import ROUTES from './routes';
import { Home, About, Blog, ErrorPage, Posts} from '.';
import { Navbar } from './Components/Navbar/Navbar';


export default function App() {
  const [arr, setArr] = useState([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }])

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
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.BLOG} element={<Blog />} />
          <Route path={ROUTES.POST} element={<Posts />} />
          <Route path='*' element={<ErrorPage />} />

        </Routes>
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
    </div>
  )
}
