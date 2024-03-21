import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.scss'
import ROUTES from '../../routes'

export function Navbar() {
  return (
    <header>
      <div className="logo">
        <Link to={ROUTES.HOME}>LOGO</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to={ROUTES.HOME}>Home</Link>
          </li>
          <li>
            <Link to={ROUTES.ABOUT}>About</Link>
          </li>
          <li>
            <Link to={ROUTES.BLOG}>Blog</Link>
          </li>
          <li>
            <Link to={ROUTES.POST}>Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
