import React from 'react'
import { Link } from 'react-router-dom'
import { NavBlog, NavContact, NavHome, NavPosts, NavUsers } from '../../RouterPage/router'
import './Menu.scss'

export default function Menu() {
  return (
    <header>
      <div className='logo'>
        <Link to={NavHome}>Logo</Link>
      </div>
      
      <nav>
        <ul>
          <li><Link to={NavHome}>Home</Link></li>
          <li><Link to={NavBlog}>Blog</Link></li>
          <li><Link to={NavPosts}>Posts</Link></li>
          <li><Link to={NavUsers}>Users</Link></li>
          <li><Link to={NavContact}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
