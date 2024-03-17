import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PropsValidaton from './PropsValidaton';



export default function Drow() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/quotes')
      .then(res => setUsers(res.data.quotes))
  }, []);
  return (
    <div>
      <PropsValidaton users={users} />
    </div>
  );
  
}
