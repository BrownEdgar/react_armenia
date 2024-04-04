import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAsyncProduct } from '../../features/productSlice'
import './Drow.scss'
import axios from 'axios'



function Drow({data}) {
  const dispatch = useDispatch()


  const handleDielete = (id) => {
    axios.delete(`http://localhost:3000/posts/${id}`)
      .then(() => dispatch(getAsyncProduct()))
  }

  return (
    <div className='Drow'>
      {
        data.map(elm => {
          return (
            <div key={elm.id} className='Drow__products'>
              <div className='Drow__products-item'>
                <h4>{elm.title}</h4>
                <h4>{elm.name}</h4>
              </div>
              <div className='Drow__products-discr'>
                <p>{elm.price} Euro</p>
                <p>{elm.solded} Solded</p>
              </div>
              <i className="bi bi-x-lg" onClick={() => handleDielete(elm.id)}></i>

            </div>
          )
        })
      }
    </div>
  )
}

export default Drow
