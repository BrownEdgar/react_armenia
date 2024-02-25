import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios({
        baseURL : import.meta.env.VITE_DB_URL,
        url: 'todos',
        params:{
         _limit : 10
        }
    })
      .then(response => {
        setTodos(response.data);
      })
      
  }, []);

  return (
    <div className='Todos'>
      <h1>Todos</h1>

        {
        todos.map(elem => {
        return (
            <div key={elem.id}>
            <p>{elem.title}</p>
            </div>
        )
        })
        }
    </div>
  );
};


export default Todos
