import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function useFetchData(url) {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true)
		axios(url)
			.then(res => setUsers(res.data))
			.finally(()=>setLoading(false))
	}, []);
	return [users, loading]
}
