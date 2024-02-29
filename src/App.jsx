import React, { useState } from 'react'
import './App.scss'
import { nanoid } from "nanoid"
export default function App() {
	const [currentUserId, setCurrentUserId] = useState(null);
	const [emailArray, setEmailArray] = useState([]);
	const [users, setUsers] = useState([]);
	function handleSubmit(e) {
		e.preventDefault();
		const form = e.target
		const { email, username, password } = form
		const user = {
			id: nanoid(),
			email: email.value,
			username: username.value,
			password: password.value
		}
		if (!emailArray.includes(email.value)) {
			setEmailArray([...emailArray, email.value])
			setUsers([...users, user])
		}else{
			alert('You should use unique email !!!')
		}
	}
	const showPassword = (id) => {
		setCurrentUserId(id)
	}
	return (
		<div className='App'>
			<div className="form">
			<form onSubmit={handleSubmit}>
				<label htmlFor="email">Email</label>
				<input required type="email" name="email" id="email" />
				<label htmlFor="username">Username</label>
				<input required type="text" name="" id="username" />
				<label htmlFor="password">Password</label>
				<input required type="password" name="" id="password" />

				<input type="submit" value="save" />
			</form>
			</div>
			<hr />
			<ul>
				{
					users.map((elm)=>{
						return <li className='users' key={elm.id}>
							<p><span className='email'>email: </span>{elm.email}</p>
							<p><span className='username'>username: </span>{elm.username}</p>
							<p className='p-password'>
								<span>
									<span className='password'>pass: </span>
								<span>
									{currentUserId === elm.id ? elm.password : "*".repeat(8)}
								</span>
								</span>
								{
								(currentUserId === elm.id) 
								? <i className="bi bi-eye" onClick={() => { showPassword(null) }}></i>
								: <i className="bi bi-eye-slash" onClick={() => { showPassword(elm.id) }}></i>
								}
							</p>
						</li>
					})
				}
			</ul>
		</div>
		
	)
}
