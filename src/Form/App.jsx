import React, { useState } from 'react';
import './App.scss';
import { nanoid } from "nanoid";

export default function App() {
  const [users, setUsers] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, email } = e.target;
    const user = {
      id: nanoid(5),
      username: username.value,
      password: password.value,
      email: email.value
    };

    const existingUser = users.find(user => user.email === email.value);
    if (existingUser) {
      return alert('There is already a registration with this email')
    }

    setUsers([...users, user]);
    e.target.reset();
  };

  const showPassword = (id) => {
    setCurrentUserId(id);
  };
  const handleDelete=(id)=>{
    const result=users.filter(user=>user.id!==id)
    setUsers(result)
  }
  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <p>Enter your name</p>
        <input type="text" name="username" required />
        <p>Enter your Email</p>
        <input type="email" name="email"  placeholder='' required/>
        <p>Enter your passwod</p>
        <input type="password"  name='password' required /> 
        <input className='register' type="submit" value='register' />
      </form>
<hr />
      <div className='Values'>
        {
          users.map(user => (
            <div  className='Values__item'key={user.id}>
              <p className='del' onClick={()=>handleDelete(user.id)}>X</p>
              <span>Username: {user.username}</span>
              <span>Email: {user.email}</span>
              
              <p className='psw'>
            
                <span>Password:
                  {currentUserId === user.id ? user.password : '*'.repeat(8)}
                </span>
                
                
                {
                  (currentUserId === user.id)
                  ? <i className="bi bi-eye-slash" onClick={() => showPassword(null)}></i>
                  : <i className="bi bi-eye-fill" onClick={() => showPassword(user.id)}></i>
                }
              </p>
            </div>
          ))
        }
      </div>
    </div>
  );
}
