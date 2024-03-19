import React from 'react'
import About from './Components/20.03.2024/About/About'
import Treiders from './Components/20.03.2024/Treiders/Treiders'
import Advantages from './Components/20.03.2024/advantages/advantages'
import Lessons from './Components/20.03.2024/Lessons/Lessons'
import Mainpage from './Components/20.03.2024/MainPage/Mainpage'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/20.03.2024/Home/Home'

export default function App() {
  return (
    <div>
      <Mainpage />
      <Routes>
        <Route element={<Home />} path='/'/>
        <Route element={<About />} path='/about'/>
        <Route element={<Treiders />} path='treiders'/>
        <Route element={<Advantages />} path='advantages'/>
        <Route element={<Lessons />} path='lessons'/>
      </Routes>
      
      
    </div>
  )
}
