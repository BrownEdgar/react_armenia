import React from 'react'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Navbar from './Compoents/Navbar/Navbar'
import Blog from './pages/Blog/Blog'
import { Routes,Route} from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route element={ <Home/>} path='/'/>
       <Route element={ <About/>} path='/about'/>
        <Route element={ <Blog/>} path='/blog'/>
        
      
      </Routes>
    </div>
  )
}
