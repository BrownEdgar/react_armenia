import { useEffect } from 'react'
import './App.css'
import AddedProd from './Components/AddProd/AddedProd'
import Drow from './Components/Drow/Drow'
import { getAsyncProduct } from './features/productSlice'
import { useDispatch, useSelector } from 'react-redux'


function App() {
  const { data, loading, error } = useSelector(state => state.products)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getAsyncProduct())
  }, [])
  return (
    <div className='App'>
       {loading ? (
        <h2 className='loading'>Loading ....</h2>
      ) : (
        <>
         <AddedProd/>
         <Drow data={data}/>
        </>
      )
      }
    </div>

  )
}

export default App
