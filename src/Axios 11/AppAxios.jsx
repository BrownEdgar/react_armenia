import React from 'react'
import './AppAxios.scss'
import { useState,useEffect } from 'react'
import Comment from './Comments/Comment'
import Post from './Posts/Post'

export default function AppAxios() {

  return (
    <div className='AppAxios'>
      <Comment/>
      <Post/>
    </div>
  )
}
