import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './Users.scss'

export default function Users() {
  const [content, setContent] = useState([]);
  useEffect(() => {
    axios({
      baseURL: import.meta.env.VITE_JSON_URL,
      url: 'users'
    })
      .then(res => setContent(res.data))
  }, [])
  return (
    <details>
      <summary>Users</summary>
      <div className='Users'>{
      content.map((elm) => {
        return <div
          className='Users__item'
          key={elm.id}>
          <div className='Users__id'>{elm.id}</div>
          {elm.name}
          
        </div>
      })
    }
    </div>
    </details>
  )
}
