import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function GetPosts(url) {
  const [posts, setPosts] = useState(null);
	const [loading, setLoading] = useState(true);

  useEffect(() => {
		setLoading(true)
		axios.get(url)
			.then(res => setPosts(res.data))
			.finally(() => setLoading(false))
	}, [url]);
  return [posts, loading]
}
