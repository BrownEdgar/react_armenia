import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'

//// /blog
export default function Layouts() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi odio officiis pariatur, minima cupiditate, laborum commodi deleniti tenetur harum blanditiis veritatis accusamus impedit! Voluptas praesentium dolores suscipit voluptatem voluptate quia commodi quis. Dicta illo modi nemo itaque consequatur est quos!</p>
      </footer>
    </>
  )
}
