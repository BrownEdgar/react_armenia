import React from 'react'
import { About, Blog, ErrorPage, Home } from './pages'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import ROUTES from './routes'
import './App.scss'

export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <main>
        <Routes >
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.BLOG} element={<Blog />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </main>

      <footer>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi odio officiis pariatur, minima cupiditate, laborum commodi deleniti tenetur harum blanditiis veritatis accusamus impedit! Voluptas praesentium dolores suscipit voluptatem voluptate quia commodi quis. Dicta illo modi nemo itaque consequatur est quos!</p>
      </footer>

    </div>
  )
}
