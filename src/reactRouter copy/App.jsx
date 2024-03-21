import React, { useState } from 'react'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import classNames from "classnames";
import './App.scss'
import ROUTES from './routes';
import { Home, About, Blog, ErrorPage, Post} from '.';
import { Navbar } from './Components/Navbar/Navbar';
import Layouts from './Components/Layouts/Layouts';
import { postsLoader } from './pages/About/About';
import { getSpecialPost } from './pages/About/Post/Post';


export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path='posts' element={<About />} loader={postsLoader} />
        <Route path='posts/:id' element={<Post />}  loader={getSpecialPost}/>
        <Route path='blog' element={<Blog />} />
        <Route path='*' element={<ErrorPage />} />
      </Route>
    )
  )


  return (
    <div className='App'>
      
        <RouterProvider router={router} />
      
    </div>
  )
}
