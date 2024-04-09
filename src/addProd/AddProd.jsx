import React from 'react'
import './AddProd.scss'
import {Field, Form, Formik} from 'formik'
import {nanoid} from '@reduxjs/toolkit';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {getAsyncproducts} from '../features/productsSlice';

export default function AddProd() {
    const dispatch = useDispatch()
    const handleAdd = (values, formik) => {
        const data = {
            id: nanoid(),
            title: values.title,
            price: values.price,
            category: values.category,
            poster: `./images/${values.file}`
        };
        axios
            .post("http://localhost:3000/products", data)
            .then(() => dispatch(getAsyncproducts()))
            .catch(err => console.log(err));
        formik.resetForm();
    };
    return (
        <div>
            <Formik
                initialValues={{
                title: "",
                price: "",
                category: "",
                poster: ""
            }}
                onSubmit={(values, formik) => handleAdd(values, formik)}>
                {(formik) => {
                    return (
                        <Form className='Form'>
                            <Field
                                className="Form__text"
                                type="text"
                                name="title"
                                placeholder="add product name"
                                required/>
                            <Field
                                className="Form__number"
                                type="number"
                                name="price"
                                placeholder="add product price"
                                required/>
                            <Field
                                className="Form__category"
                                type="text"
                                name="category"
                                placeholder="add product category"
                                required/>
                            <Field
                                type="file"
                                className="Form__poster"
                                name="poster"
                                onChange={(e) => {
                                formik.setFieldValue("file", e.currentTarget.files[0].name)
                            }}/>
                            <input className="Form__input" type='submit' value={"add post"}/>
                        </Form>
                    )

                }
}

            </Formik>
        </div>
    )
}
