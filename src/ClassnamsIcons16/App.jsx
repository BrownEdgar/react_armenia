import React from 'react'
import './App.scss'
import { useState } from 'react'
import classNames from 'classnames'
import Clock from './Clock/Clock'


export default function App() {
   const [data, setData] = useState([
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
         rate: 4.5,
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
         rate: 7.5,
      },
      {
         id: 5,
         title: "Airplane",
         genre: "Comedy",
         stock: 7,
         rate: 9.2,
      },
   ])

   const [sorted, setSorted] = useState(false)

   const handleDelate = (id) => {        //Created delate btn
      setData(data.filter(elm => elm.id !== id))
   }

   const handleSorted = () => {            //Sorted function
      setSorted(!sorted)
      let sortedData;
      if (sorted) {
         sortedData = [...data].sort((a, b) => a.rate - b.rate)
      } else {
         sortedData = [...data].sort((a, b) => b.rate - a.rate)
      }
      setData(sortedData)
   }

   return (
      <>
         <Clock />
         <div className='App'>
            <header className='App__header'>
               <ul className='App__header-list'>
                  <li>Title</li>
                  <li>Genre</li>
                  <li>Stock</li>
                  <li>Rate
                     <span className='App__sort'>
                        <i className={classNames('', {
                           'bx bx-sort-z-a bx-tada': !sorted,
                           'bx bx-sort-a-z  bx-tada bx-flip-horizontal': sorted
                        })} onClick={handleSorted}></i>
                     </span>
                  </li>
               </ul>
            </header>
            <main >
               {
                  data.map(elm => {
                     return (
                        <div key={elm.id} className='main__section'>
                           <p>{elm.title}</p>
                           <p>{elm.genre}</p>
                           <p>{elm.stock}</p>
                           <p>{elm.rate}</p>
                           <button onClick={() => handleDelate(elm.id)}>Delate</button>
                        </div>
                     )
                  })
               }
            </main>
         </div>
      </>
   )
}
























