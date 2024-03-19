import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './About.scss';

export default function About() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments', {
      params: {
        _limit: 10
      }
    })
    .then(res => setComments(res.data))
    .catch(error => console.error('Error fetching comments:', error));
  }, []);

  return (
    <div className='About'>
      <h1>Comments about us</h1>
      <div>
        {
          comments.map((elm) => (
            <div key={elm.id} className='About__content'>
              <h4>{elm.name}</h4> 
              <p>{elm.body}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}
