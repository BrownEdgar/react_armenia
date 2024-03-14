import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import classNames from 'classnames'

export default function App() {
	const [quotes, setQuotes] = useState([]);
	const [currentIndex, setcurrentIndex] = useState(0);
	const [isCopied, setisCopied] = useState(false);

	const handleCopy = (text) => {
		console.log(text);
		navigator.clipboard.writeText(text)
		setisCopied(true)
		setTimeout(() => {
			setisCopied(false)
		}, 1000);
	}

	const prev = () => {
		setcurrentIndex(currentIndex - 1)
	}
	const next = () => {
		setcurrentIndex(currentIndex + 1)

	}


	useEffect(() => {
		axios(import.meta.env.VITE_DB_URL)
			.then(res => {
				const data = res.data.map(elm => {
					elm.id = nanoid(5)
					elm.author = elm.author.slice(0, -8)
					return elm
				})
				setQuotes(data)
			})

	}, [])
	console.log(quotes);
	return (
		<div>
			<h1>Quotes</h1>
			<div className="Quotes">
				<div>
					<button disabled={currentIndex === 0} onClick={prev}>
						<i class="bi bi-arrow-left-circle"></i>
					</button>
				</div>
				{
					quotes.length > 0 ? (
						<div key={quotes[currentIndex].id}>
							<h2>{quotes[currentIndex].text}</h2>
							<p>{quotes[currentIndex].author || 'unknown'}</p>
							<span onClick={() => handleCopy(quotes[currentIndex].text)}>
								<i className={classNames()}></i>
							</span>
						</div>
					) : null
				}
				<div>
					<button disabled={currentIndex === quotes.length - 1} onClick={next}>
						<i class="bi bi-arrow-right-circle"></i>
					</button>
				</div>
			</div>
		</div>
	)
}








// {
// 	quotes.map(elm => {
// 		return (
// 			<div key={elm.id}>
// 				<h2>{elm.text}</h2>
// 				<p>{elm.author || 'unknown'}</p>
// 				<span onClick={() => handleCopy(elm.text)}>
// 					<i class="bi bi-clipboard"></i>
// 				</span>
// 			</div>
// 		)
// 	})
// }
