import React from 'react'
import Menu from './Components/Menu'
import { Blog, Contact, Home, Posts, Users } from '../RouterPage'
import { Route, Routes } from 'react-router-dom'
import { NavBlog, NavContact, NavHome, NavPosts, NavUsers } from '../RouterPage/router'
import './App.scss'
import Footer from './Components/Footer/Footer'




export default function App() {
  return (
    <div className='App'>
      <Menu/>
      <Routes>
        <Route element={<Home/>} path={NavHome}/>
        <Route element={<Blog/>} path={NavBlog}/>
        <Route element={<Posts/>} path={NavPosts}/>
        <Route element={<Users/>} path={NavUsers}/>
        <Route element={<Contact/>} path={NavContact}/>
      </Routes>
      <Footer/>
    </div>
  )
}
