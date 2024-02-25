import React from 'react'
import './AppAxios.scss'
import { useState,useEffect } from 'react'
import Comment from './Comments/Comment'
import Post from './Posts/Post'
import User from './Users/User'

export default function AppAxios() {

  return (
    <div className='AppAxios'>
      <Comment/>
      <Post/>
      <User/>
    </div>
  )
}
