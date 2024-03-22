import React from 'react'
import './Navbar.scss'
import { Link } from "react-router-dom";
import ROUTES from '../../routes';

export default function Navbar() {
  return (
    <header>
      <div className="logo">
        <Link to={ROUTES.HOME}>LOGO</Link>
        <div>
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
            </ul>
          </nav>
        </div>
      </div>
    </header>

  )
}
