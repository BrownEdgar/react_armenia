import React, { useState } from 'react'
import classNames from 'classnames'
import './App.scss'

export default function App() {
  const [data, setData] = useState(
    [
      {
        id: 1,
        title: "Terminator",
        genre: "Action",
        stock: 6,
        rate: 2.5,
      },
      {
        id: 2,
        title: "Die Hard",
        genre: "Action",
        stock: 5,
        rate: 2.5,
      },
      {
        id: 3,
        title: "Get Out",
        genre: "Thriller",
        stock: 8,
        rate: 3.5,
      },
      {
        id: 4,
        title: "Trip to Italy",
        genre: "Comedy",
        stock: 7,
        rate: 3.5,
      },
      {
        id: 5,
        title: "Airplane",
        genre: "Comedy",
        stock: 7,
        rate: 3.5,
      },
    ]
  );
  const handleDelete = (id) => {
    setData(data.filter(elm => elm.id !== id))
  }
  const handleSort = () => {
    setData(data.toSorted((a, b) => a.rate > b.rate ? -1 : 1))
  }
  return (
    <div className='App'>
      <p>Showing <b>{data.length}</b> movies in the database</p>
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>genre</th>
            <th>stock</th>
            <th>
              <span>rate</span>
              <span className='icon'>
                <i onClick={handleSort} className={classNames('bx bx-sort-down')}></i>
              </span>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(elm => {
              return (
                <tr key={elm.id}>
                  <td>{elm.title}</td>
                  <td>{elm.genre}</td>
                  <td>{elm.stock}</td>
                  <td>{elm.rate}</td>
                  <td><button onClick={() => handleDelete(elm.id)} className={classNames('App__delete-button')}>Delete</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}