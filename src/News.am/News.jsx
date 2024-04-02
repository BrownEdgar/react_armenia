import React, { useEffect } from 'react';
import "./News.scss";
import { useDispatch, useSelector } from 'react-redux';
import { getAsyncproducts } from '../features/productsSlice';
import { Formik, Form, Field } from "formik";
import axios from 'axios'; 
import { nanoid } from '@reduxjs/toolkit';

export default function News() {
    const dispatch = useDispatch();
    const prod = useSelector((state) => state.products.data);

    useEffect(() => {
        dispatch(getAsyncproducts());
    }, []);
    const handleAdd = (values, formik) => {
        const data = {
            id: nanoid(), 
            ...values
        };
        axios.post("http://localhost:3000/products", data)
            .then(() => dispatch(getAsyncproducts()))
            .catch(err => console.log(err));
        formik.resetForm();
    };

    return (
        <div>
            <div className='Header'>
                <img src="https://news.am/css/images/desktop/logo.png" alt="" />
                <div>
                    <a className='Header__route' href="https://news.am">Products</a>
                    <a className='Header__route' href="https://news.am">Add products</a>
                </div>
                <div className='Header__about'>
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-telephone"></i>
                    <i className="bi bi-chat-left-text-fill"></i>
                </div>
            </div>
            <Formik
                initialValues={{
                    title: "",
                    price: "",
                    category:""
                }}
                onSubmit={(values, formik) => handleAdd(values, formik)} 
            >
                <Form>
                    <Field type="text" name="title" placeholder="add product name" required />
                    <Field type="number" name="price" placeholder="add product price" required />
                    <Field type="text" name="category" placeholder="add product category" required />
                    <input type='submit' value={"add post"} />
                </Form>
            </Formik>
            {prod.map((elm) => (
                <div className='Users__name' key={elm.id}>
                    <img className='Users__img' src={elm.image || "https://news.am/css/images/desktop/logo.png"} alt="" />
                    <div className='Users__product'>
                        <p>{elm.title}</p>
                        <p>${elm.price}</p>
                        <p>category: {elm.category}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
