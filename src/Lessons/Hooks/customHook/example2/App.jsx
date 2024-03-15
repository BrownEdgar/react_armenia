import React from 'react'
import useFetchData from './useFetchData'
import useArr from '../useArr'

export default function App() {
  const [data, loading, error] = useFetchData({
    url: 'https://jsonplaceholder.typicode.com/posts?_limit=9',
    initialValue: []
  })

  if (error) {
    return <h1 className="error">{error.message}</h1>
  }

  return (
    <div>
      {
        loading ? <h1>Loading...</h1> : (
          <div>
            {data.map(elem => {
              return <h2 key={elem.id}>{elem.title}</h2>
            })}
          </div>
        )
      }
    </div>
  )
}
