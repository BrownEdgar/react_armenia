import React, { useState } from 'react'
import Forms from './Forms'
import {nanoid} from 'nanoid'

function App() { 
    const [users, setUsers] = useState([])
    const [userId, setUserId] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault();
        const { userEmail, userName, userPassword } = e.target;

        const searchUsers = users.some(user => 
            user.userEmail === userEmail.value || 
            user.userName === userName.value || 
            user.userPassword === userPassword.value
        );
    
        if (!searchUsers) {
            const user = {
                userId: nanoid(),
                userEmail: userEmail.value,
                userName: userName.value,
                userPassword: userPassword.value
            };
            
            setUsers([...users, user]);
            e.target.reset();
        } else {
            alert('Sory, You can not regist');
        }
    }

    const showPassword = (id) => {
        setUserId(id)
    }
  return (
    <div>
        <Forms 
        users={users} 
        handleSubmit={handleSubmit} 
        userId={userId} 
        showPassword={showPassword}
        />
    </div>
  )

}
export default App