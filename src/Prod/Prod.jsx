import React, { useEffect } from 'react'
import './Prod.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getAsyncproducts } from '../features/productsSlice';

export default function Prod() {
  const dispatch = useDispatch();
    const prod = useSelector((state) => state.products.data);

    useEffect(() => {
        dispatch(getAsyncproducts());
    }, []);
  return (
    <div>
      
      {prod.map((elm) => (
                <div className='Users__name' key={elm.id}>
                    <img className='Users__img' src={elm.image || elm.poster} alt="" />
                    <div className='Users__product'>
                        <p>{elm.title}</p>
                        <p>${elm.price}</p>
                        <p>category: {elm.category}</p>
                    </div>
                </div>
            ))}
    </div>
  )
}
