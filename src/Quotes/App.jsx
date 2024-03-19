

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Quotes from './Qoutes';
import './App.scss'
export default function App() {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        axios(import.meta.env.VITE_QOUTES_URL)
        .then(res => setQuotes(res.data.quotes));
    }, []);

    return (
        <div className='App'>
          <h1>Qoutes</h1>
              <Quotes quotes={quotes}  />
        </div>
    );
}
