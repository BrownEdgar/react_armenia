import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCount, minus } from './features/counterSlice'
import { addUser } from './features/usersSlice'
import Products from './components/Products/Products'
import { addProduct, deleteProductById } from './features/productsSlice'
import { nanoid } from 'nanoid'
import { getAllArmenians } from './features/ProductsSlice/productsSlice'

export default function App() {
  const count = useSelector((state) => state.counter)

  const users = useSelector((state) => state.users)
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(minus())
  }
  const handleAddProduct = () => {
    const newProduct = {
      id: nanoid(5),
      name: "iPhone 15 Pro",
      price: 1_120_000
    }
    dispatch(addProduct(newProduct))
  }

  const handleDelete = () => {
    dispatch(deleteProductById({ id: 'rkvcV' }))
  }

  return (
    <div>
      {/* <h1>Count: {count}</h1>
      <h1>users: {JSON.stringify(users)}</h1>
      <button onClick={handleClick}>add count</button>
      <button onClick={() => {
        dispatch(addUser("Valod"))
      }}>add user </button> */}
      <Products />
      <button onClick={handleAddProduct}> Add Product</button>
      <button onClick={handleDelete}> delete Product</button>
    </div>
  )
}
