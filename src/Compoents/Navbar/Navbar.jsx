import React from 'react'
import './Navbar.scss'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <div className="logo">
        <Link to="/">LOGO</Link>
        <div>
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
            </ul>
          </nav>
        </div>
      </div>
    </header>
    
  )
}
