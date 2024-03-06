import React, { useState } from 'react';
import FormikComponent from './FormikComponent';
import Users from './Users/Users';
import {nanoid} from 'nanoid'


function App() {
    const [users, setUsers] = useState([]);

    const handleSubmit = (values, { resetForm }) => {
        const user = {
            ...values,
            id : nanoid(8)
        }
        setUsers([...users, user]);
        resetForm(); 
    };

    return (
        <div>
            <FormikComponent handleSubmit={handleSubmit} />
            <Users users={users}/>
        </div>
    );
}

export default App;