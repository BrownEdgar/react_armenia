import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './Posts.scss'

export default function Posts() {
  const [content, setContent] = useState([]);
  useEffect(() => {
    axios({
      baseURL: import.meta.env.VITE_JSON_URL,
      url: 'posts'
    })
      .then(res => setContent(res.data))
  }, [])
  return (
    <details>
      <summary>Posts</summary>
      <div className='Posts'>{
      content.map((elm) => {
        return <div
          className='Posts__item'
          key={elm.id}>
          <div className='Posts__id'>{elm.id}</div>
          {elm.body}
          
        </div>
      })
    }
    </div>
    </details>
  )
}
