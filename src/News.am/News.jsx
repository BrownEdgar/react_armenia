import React from 'react';
import { Link, Route,Routes } from "react-router-dom";
import "./News.scss";
import Prod from '../Prod/Prod';
import AddProd from '../addProd/AddProd';

export default function News() {
 
    return (
        <div>
            <div className='Header'>
                <img src="https://news.am/css/images/desktop/logo.png" alt="" />
                <div>
                    <Link className='Header__route' to='/'>Products</Link>
                    <Link className='Header__route' to='/add'>Add products</Link>
                </div>
                <div className='Header__about'>
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-telephone"></i>
                    <i className="bi bi-chat-left-text-fill"></i>
                </div>
            </div>
           <Routes>
            <Route path='/' element={<Prod/>}></Route>
            <Route path='/add' element={<AddProd/>}></Route>
            <Route path='*'>aaa</Route>
           </Routes>
            
        </div>
    );
}
