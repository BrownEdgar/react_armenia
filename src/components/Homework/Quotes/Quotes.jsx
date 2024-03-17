import React from 'react';
import './Quotes.scss';

function Quotes({ quotes }) {
  return (
    <div>
      {
        quotes.map((elem) => {
         return (
            <div key={elem.id}>
            <h1>{elem.quote}</h1>
          </div>
         )
         })
        
      }
    </div>
  );
}

export default Quotes;
