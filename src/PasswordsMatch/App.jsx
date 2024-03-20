import React, { useState } from 'react'
import './App.scss'
export default function App() {
	const [psw1, setPsw1] = useState(null);
	const [psw2, setPsw2] = useState(null);
	function handleChange(e) {
		e.preventDefault();
		const form = e.target.parentElement
		const { password1, password2 } = form
		setPsw1(password1.value)
		setPsw2(password2.value)
	}
	return (
		<div className='App'>
			<div className="form">
				<form onChange={handleChange}>
					<label htmlFor="password1">Password 1</label>
					<input className={psw1 === psw2 && psw1 && psw2 ? 'green' : 'red'} required type="password" name="password1" id="password1" />
					<label htmlFor="password2">Password 2</label>
					<input className={psw1 === psw2 && psw1 && psw2 ? 'green' : 'red'} required type="password" name="password2" id="password2" />
					{
						!psw1 && !psw2 ? <span>Lրացրեք բաց թողնված դաշտերը</span> : ''
					}
				</form>
			</div>
		</div>
	)
}