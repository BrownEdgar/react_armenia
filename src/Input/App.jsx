


import React, { useState } from 'react';
import './App.scss';

export default function Input() {
    const [pass, setPass] = useState(null);
    const [pass2, setPass2] = useState(null);
    const [matching, setMatching] = useState(true);

    const handleChange = (e) => {
        setPass(e.target.value);
    };

    const handleChange2 = (e) => {
        setPass2(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pass === pass2) {
            setMatching(true);
          
        } else {
            setMatching(false);
        }
    };

    const inputStyle = matching ? { borderColor: 'green' } : { borderColor: 'red' };

    return (
        <div className='App'>
            <h1>Sign up now!</h1>
            <form onSubmit={handleSubmit} >
               <label htmlFor='username'>
            <i class="bi bi-person"></i> Enter your name
             </label>
            <input type='text' name='username' required />
        <br /><br />
								<label htmlFor="password">
									<i class="bi bi-lock"></i>Enter your password
								</label>
								<input type="password" name='password' style={inputStyle}  required onChange={handleChange}/>
								<br /><br />
                 <label htmlFor="password">
									<i class="bi bi-lock"></i>Enter your password
								</label>
								<input type="password" name='password' style={inputStyle}  required onChange={handleChange}/>
								<br /><br />
                <input type='submit'  className='register' />
            </form>
        </div>
    );
}


