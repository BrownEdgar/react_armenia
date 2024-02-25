import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios({
        baseURL: import.meta.env.VITE_DB_URL + '/users',
        params : {
            _limit: 10
        }
    })
      .then(response => {
        setUsers(response.data);
      })
      
  }, []);

  return (
    <div className='Users'>
      <h1>Users</h1>
        {
        users.map(elem => {
            return(
                <div className="users"  key={elem.id}>
                   <p>{elem.email}</p>
                </div>
            )
        })
        }
    </div>
  );
};

export default Users
