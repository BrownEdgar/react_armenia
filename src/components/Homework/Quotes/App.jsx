import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Quotes from './Quotes';


function App() {
    const [quotes, setQuotes] = useState([]);
  
    useEffect(() => {
      axios(import.meta.env.VITE_DB_URL3)
        .then((response) => response.json())
        .then((data) => setQuotes(data));
    }, []);
  
    return (
      <div>
        <Quotes quotes={quotes}/>
      </div>
    );
  }  
  export default App;
  