import React, { useState } from 'react';
import { Link, Route,Routes } from "react-router-dom";
import "./News.scss";
import Prod from '../Prod/Prod';
import AddProd from '../addProd/AddProd';
import NotFound from '../NotFound/NotFound';
import { LOCALES } from '../i18n/locale';
import Provider from '../i18n/Provider';

export default function News() {
    const [language,
        setLanguage] = useState(LOCALES.ENGLISH)
    const hendleChange = (e) => {
        setLanguage(e.target.value)
    }
    return (
        <Provider locale={language}> <div>
            <div className='Header'>
                <img src="https://news.am/css/images/desktop/logo.png" alt="" />
                <div>
                    <Link className='Header__route' to='/'>News</Link>
                    <Link className='Header__route' to='/add'>Add News</Link>
                </div>
                <div className='Header__about'>
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-telephone"></i>
                    <i className="bi bi-chat-left-text-fill"></i>
                </div>
                <select className='Header__select' name="language" id="language" onChange={hendleChange}>
                        {Object
                            .keys(LOCALES)
                            .map(language => {
                                return (
                                    <option key={language} value={LOCALES[language]}>{LOCALES[language]}</option>
                                )
                            })
}
                    </select>
            </div>
           <Routes>
            <Route path='/' element={<Prod/>}></Route>
            <Route path='/add' element={<AddProd/>}></Route>
            <Route path='*' element={<NotFound />}> </Route>
           </Routes>
            
        </div></Provider>
    );
}
