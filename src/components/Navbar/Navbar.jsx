import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom'
import ROUTES from '../../routes';

function Navbar() {
  return (
    <header className="header">
      <div className="Logo">
        <Link to={ROUTES.HOME}>Bakery</Link>
      </div>
      <div className="nav">
        <ul>
          <li>
            <Link to={ROUTES.HOME}>Home</Link>
          </li>
          <li>
            <Link to={ROUTES.ABOUT}>About</Link>
          </li>
          <li>
            <Link to={ROUTES.OURPRODUCTS}>Our Products</Link>
          </li>
          <li>
            <Link to={ROUTES.NEWS}>News</Link>
          </li>
          <li>
            <Link to={ROUTES.CONTACTUS}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar;
