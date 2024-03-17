import { useEffect, useState } from 'react';
import axios from 'axios';
import Quotes from './Quotes';


function App() {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
      axios.get(import.meta.env.VITE_DB_URL3)
        .then((res) => setQuotes(res.data.quotes))
     },[]);
  
    return (
      <div>
        <Quotes quotes={quotes}/>
      </div>
    );
  }  
  export default App;