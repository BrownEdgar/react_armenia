import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Comments.scss'

export default function Comments() {
  const [content, setContent] = useState([]);
  useEffect(() => {
    axios({
      baseURL: import.meta.env.VITE_DB_URL,
      url: 'comments'
    })
      .then(res => setContent(res.data))
  }, [])
  return (
    <details>
      <summary>Comments</summary>
      <div className='Comments'>{
      content.map((elm) => {
        return <div
          className='Comments__item'
          key={elm.id}>
          <div className='Comments__id'>{elm.id}</div>
          {elm.body}
          
        </div>
      })
    }
    </div>
    </details>
  )
}



