import React, { useState } from 'react'
import data from './db.json'
import './App.css'
import Blog from './components/Blog/Blog'

export default function App() {
  const [blogs, setBlogs] = useState(data);
  const [filteredData, setFilteredData] = useState(data);


  const handleSort = () => {
    setFilteredData(filteredData.toSorted((a, b) => {
      return a.title > b.title ? 1 : -1
    }))
  }
  const onlyInStock = () => {
    const result = blogs.filter(elem => elem.inStock);
    setFilteredData(result)
  }

  const showAll = () => {
    setFilteredData(data)
  }

  const getRandomProduct = () => {
    const result = blogs.filter(elem => elem.inStock);
    const random = Math.floor(Math.random() * (result.length - 1))
    setFilteredData([result[random]])
  }

  return (
    <div className='App'>
      <h1>Our Blogs </h1>
      <div className="buttons">
        <button onClick={showAll}>Show all</button>
        <button onClick={handleSort}>SORT</button>
        <button onClick={onlyInStock}>in Stock</button>
        <button onClick={getRandomProduct}>random</button>
      </div>

      <Blog blogs={filteredData} />
    </div>
  )
}
