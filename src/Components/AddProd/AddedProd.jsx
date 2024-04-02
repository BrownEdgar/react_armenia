import { nanoid } from '@reduxjs/toolkit'
import { Formik, Form, Field } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAsyncProduct } from '../../features/productSlice'
import axios from 'axios'
import './AddedPros.scss'


export default function AddedProd() {
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector(state => state.products)
  const initialValues = {
    title: '',
    name: '',
    price: '',
    solded: ""
  }
  const handleSubmit = (values, formik) => {
    const newProduct = {
      id: nanoid(),
      ...values
    }
    axios.post('http://localhost:3000/posts', newProduct)
      .then(() => dispatch(getAsyncProduct()))
    formik.resetForm()
  }

  return (
    <div className='AddedProd'>
      {
        <Formik
          validateOnBlur={false}
          validateOnChange={false}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >

          <Form>
            <Field type='text' name='title' placeholder='Write Name' required></Field>
            <Field type='text' name='name' placeholder='Write Model' required></Field>
            <Field type='number' name='solded' placeholder='Write Solded Amount' required></Field>
            <Field type='number' name='price' placeholder='Write Price' required></Field>
            <input type="submit" value="Add" className='form__btn' />
          </Form>
        </Formik>
      }
    </div>
  )
}

