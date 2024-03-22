import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.scss'
import ROUTES from '../../routes'


const navClass = ({ isActive }) => isActive ? "active_link" : ''

export default function Navbar() {
  return (
    <header>
      <div className="logo">
        <NavLink to={ROUTES.HOME} >LOGO</NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.HOME} className={navClass}>Home</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.ABOUT} className={navClass}>About</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.GALERY} className={navClass}>gALERY</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.BLOG} className={navClass}>Blog</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
