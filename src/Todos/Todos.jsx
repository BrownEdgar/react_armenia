import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './Todos.scss'

export default function Todos() {
  const [content, setContent] = useState([]);
  useEffect(() => {
    axios({
      baseURL: import.meta.env.VITE_DB_URL,
      url: 'todos'
    })
      .then(res => setContent(res.data))
  }, [])
  return (
    <details>
      <summary>Todos</summary>
      <div className='Todos'>{
      content.map((elm) => {
        return <div
          className='Todos__item'
          key={elm.id}>
          <div className='Todos__id'>{elm.id}</div>
          {elm.title}
          
        </div>
      })
    }
    </div>
    </details>
  )
}
