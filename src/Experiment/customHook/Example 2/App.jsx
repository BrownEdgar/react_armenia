import React from 'react'
import useFetchData from './useFetchData'

export default function App() {
  const [data, loading, error] = useFetchData({
    url: 'https://jsonplaceholder.typicode.com/posts?_limit=9'
  })
  console.log(data);
  return (
    <div>App</div>
  )
}
