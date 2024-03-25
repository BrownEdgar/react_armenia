import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './Navbar.scss'
import ROUTES from '../../routes'


const navClass = ({ isActive }) => isActive ? "active_link" : ''

export default function Navbar() {
  const navigate = useNavigate();


  const logOut = () => {
    localStorage.removeItem('login')
    navigate('/')
  }

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
          <li>
            <button onClick={logOut}> Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
