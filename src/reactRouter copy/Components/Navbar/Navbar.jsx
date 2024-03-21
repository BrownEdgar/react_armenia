import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Navbar.scss'
import ROUTES from '../../routes'



// const navClass=({isActive})=>{ isActive ? 'active_link' : ''}
// className={navClass}

export function Navbar() {
  return (
    <header>
      <div className="logo">
        <NavLink to={ROUTES.HOME}>LOGO</NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.HOME}>Home</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.ABOUT}>About</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.BLOG}>Blog</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
