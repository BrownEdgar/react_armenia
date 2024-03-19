import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.scss'

export default function Navbar() {
  return (
    <header>
      <div className="logo">
        <Link to="/">LOGO</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/post">Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
