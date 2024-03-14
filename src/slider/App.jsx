import axios from 'axios';
import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import './App.scss'
import MyLoader from './Loader/QuizLoader'

export default function App() {
	const [users, setUsers] = useState([]);
	const [currentIndex, setcurrentIndex] = useState(0);
	const [isCopied, setisCopied] = useState(false);
	const [loading, setLoading] = useState();
	useEffect(() => {
		setLoading(true)
		axios(import.meta.env.VITE_HMW_URL)
			.then(res => setUsers(res.data))
			.finally(()=>setLoading(false))
	}, []);
	const prev = () => {
		setcurrentIndex(currentIndex - 1)
	}
	const next = () => {
		setcurrentIndex(currentIndex + 1)

	}
	const handleCopy = (email) => {
		navigator.clipboard.writeText(email)
		setisCopied(true)
		setTimeout(() => {
			setisCopied(false)
		}, 300);
	}

	return (
		<div className='App'>
			<div className="Users">
			<button disabled={currentIndex === 0} onClick={prev}>
				<i className="bi bi-arrow-left-circle"></i>
			</button>
			{
				users.length > 0 ? (
					<div className='Users__content' key={users[currentIndex].id}>
						<h1>{users[currentIndex].name}</h1>
						<div className='Users__emailPart'>
							<h2>{users[currentIndex].email}</h2>
							<span className='Users__copy' onClick={() => handleCopy(users[currentIndex].email)}>
								<i className={classNames('bi', {
									'bi-clipboard-check': isCopied,
									'bi-clipboard': !isCopied
								})}></i>
							</span>
						</div>
					</div>
				) : <div>
					<h1>Loading...</h1>
					<p>ուզում էի անցած դասի նման կայքի կմախքը դնեմ էռոռ տվեց</p>
					{/* <MyLoader/> */}
				</div>
			}
			<button disabled={currentIndex === users.length - 1} onClick={next}>
				<i className="bi bi-arrow-right-circle"></i>
			</button>
			</div>
		</div>

	)
}
