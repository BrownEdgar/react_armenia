import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAsyncProduct } from '../../features/productSlice'
import './Drow.scss'



function Drow() {
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getAsyncProduct())
  }, [dispatch])



  return (
    <div className='Drow'>
      {loading ? (
        <h2 className='loading'>Loading ....</h2>
      ):(
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
            </div>
          )
        })
      )
      }
    </div>
  )
}

export default Drow
