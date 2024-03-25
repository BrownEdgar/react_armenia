import React from 'react'
import { useSelector } from 'react-redux'

export default function Products() {
  const products = useSelector((state) => state.products)

  return (
    <div className='Products'>
      {
        products.map(elem => {
          return (
            <div className="Products__item" key={elem.id}>
              <h2>{elem.name} | price: {elem.price}</h2>
              <p>id: {elem.id}</p>
            </div>
          )
        })
      }

    </div>
  )
}
