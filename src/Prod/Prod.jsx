import React, {useEffect, useState} from 'react'
import './Prod.scss'
import {useDispatch, useSelector} from 'react-redux';
import {getAsyncproducts} from '../features/productsSlice';
import Translate from '../i18n/Translate';
import Provider from '../i18n/Provider';
import {LOCALES} from '../i18n/locale';

export default function Prod() {
    const dispatch = useDispatch();
    const prod = useSelector((state) => state.products.data);

    useEffect(() => {
        dispatch(getAsyncproducts());
    }, []);
    const hendleChange = (e) => {
        setLanguage(e.target.value)
    }
    return (
            <div>
                <div>
                    
                    <div className='Arm'>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Mount_Ararat_and_the_Yerevan_skyline.jpg/220px-Mount_Ararat_and_the_Yerevan_skyline.jpg" alt="" />
                        <h2><Translate id="title"/></h2>
                        <p><Translate id="about"/></p>
                    </div>
                </div>

                <div className='News'>

                    {prod.map((elm) => (
                        <div className='News__prod' key={elm.id}>
                            <img className='News__img' src={elm.image || elm.poster} alt=""/>
                            <div className='News__titles'>
                                <h2 className='News__title'>{elm.title}</h2>
                                <h3>{elm.category}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    )
}
