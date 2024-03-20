import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function useFetchData({url}) {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true)
		axios.get(url)
			.then(res => setData(res.data))
			.catch(err => setError({ message: err.message }))
			.finally(() => setLoading(false))
	}, [url]);
	return [data, loading, error]
}
