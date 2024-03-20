import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function useFetch(url) {
  const [aphorism, setAphorism] = useState(null);
	const [loading, setLoading] = useState(true);

  useEffect(() => {
		setLoading(true)
		axios.get(url)
			.then(res => setAphorism(res.data.quotes))
			.finally(() => setLoading(false))
	}, [url]);

  return [aphorism,setAphorism, loading]
}
