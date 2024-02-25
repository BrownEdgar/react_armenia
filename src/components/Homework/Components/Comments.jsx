import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios({
        baseURL: import.meta.env.VITE_DB_URL + '/comments',
        params : {
            _limit: 10
        }
    })
      .then(response => {
        setComments(response.data);
      })
      
  }, []);

  return (
    <div className='Comments'>
      <h1>Comments</h1>
        {
        comments.map(elem => {
        return (
            <div key={comments.id}>
                <p>{elem.email}</p>
            </div>
        )
        })
        }
      
    </div>
  );
};

export default Comments
