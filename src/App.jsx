import React from 'react'
import { About, Blog, ErrorPage, Home, Post } from './pages'
import Navbar from './components/Navbar/Navbar'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import ROUTES from './routes'
import './App.scss'
import Layouts from './components/Navbar/Layouts/Layouts'
import { postsLoader } from './pages/About/About'
import { getSpecialPost } from './pages/Post/Post'
import Galery from './pages/Galery/Galery'


export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path='posts' element={<About />} loader={postsLoader} />
        <Route path='blog' element={<Blog />} />
        <Route path='posts/:id' element={<Post />} loader={getSpecialPost} />
        <Route path='galery' element={<Galery />} />
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
