import axios from 'axios';
import React, { useState, useEffect } from 'react';


export default function useFetchData({ url, initialValue }) {
  const [data, setdata] = useState(initialValue);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    axios.get(url)
      .then(res => setdata(res.data))
      .catch(err => setError({ message: err.message }))
      .finally(() => setLoading(false))
  }, [url])

  return [data, loading, error]
}
