import React, { useState } from 'react'
import './App.scss'
import { nanoid } from 'nanoid'
import Experiment from './Experiment';

export default function App() {
	const [users, setUsers] = useState([]);
	const [currentUserId, setCurrentUserId] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target
		const { username, password } = form
		const user = {
			id: nanoid(),
			username: username.value,
			password: password.value
		}
		setUsers([...users, user])
	}
	const sortUsers = () => {
		setUsers((prevUsers) => {
			return prevUsers.toSorted((a, b) => a > b ? 1 : -1)
		})
	}
	const showPassword = (id) => {
		setCurrentUserId(id)
	}
	return (
		<div className="App">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name='username'
					placeholder='enter your username'
					required
				/>
				<input type="password" name='password' required />
				<input type="submit" value="Register" />
			</form>
			<hr />
			<div className="buttons">
				<button onClick={sortUsers}>sort users</button>
			</div>
			<ul>
				{
					users.map(elm => {
						return <li key={elm.id}>
							<span>{elm.username}</span>
							<p className='password'>
								<span>pass:</span>
								<span className='grow'>
									{currentUserId === elm.id ? elm.password : "*".repeat(8)}
								</span>
								{
								(currentUserId === elm.id) 
								? <i className="bi bi-eye" onClick={() => { showPassword(null) }}></i>
								: <i className="bi bi-eye-slash" onClick={() => { showPassword(elm.id) }}></i>
								}
							</p>
						</li>
					})
				}</ul>

		</div>
	)
}
