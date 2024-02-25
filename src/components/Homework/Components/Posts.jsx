import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios({
        baseURL: import.meta.env.VITE_DB_URL + '/posts',
        params : {
            _limit: 10
        }
    })
      .then(response => {
        setPosts(response.data);
      })
      
  }, []);

  return (
    <div className='Posts'>
      <h1>Posts</h1>
        {
        posts.map(elem => {
            return(
                <div className="props"  key={elem.id}>
                   <p>{elem.title}</p>
                </div>
            )
        })
        }
    </div>
  );
};

export default Posts
