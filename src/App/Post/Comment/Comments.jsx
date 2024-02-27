import React, { useEffect } from 'react'
import {axios} from  './axios'

export default function Comments() {
    useEffect(()=>{
        axios('https://jsonplaceholder.typicode.com/comments')
        .then(res=>console.log(res.data))
    })
  return (
    <div>
      
    </div>
  )
}
