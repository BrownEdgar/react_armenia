

// import React, { useState } from 'react';

// export default function Quotes({ quotes }) {
//     const [likedQuote, setLikedQuote] = useState(null);
//     const [currentindex,setCurrentIndex]=useState()

//     const handleLike = (quoteId) => {
//         if (likedQuote === quoteId) {
//             setLikedQuote(null);
//         } else {
            
//             setLikedQuote(quoteId);
//         }
//     };

//     return (
//         <div className='Quotes'>
//             {quotes.map(quote => (
//                 <div key={quote.id}>
//                     <i className={`bi bi-heart${likedQuote === quote.id ? '-fill' : ''}`} onClick={() => handleLike(quote.id)}></i>
//                     <h3>{quote.quote}</h3>
//                     <p>{quote.author}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }



import React, { useState } from 'react';

export default function Quotes({ quotes }) {
    const [likedQuote, setLikedQuote] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleLike = (quoteId) => {
        if (likedQuote === quoteId) {
            setLikedQuote(null);
        } else {
            setLikedQuote(quoteId);
        }
    };

    const prev = () => {
        setCurrentIndex(prevIndex => prevIndex - 1);
    };

    const next = () => {
        setCurrentIndex(prevIndex => prevIndex + 1);
    };

    return (
        <div>
           
                <div className='Slide'>
                    <button className='prev' onClick={prev} disabled={currentIndex === 0}>
                        <i className="bi bi-arrow-bar-left"></i>
                    </button>
                </div>
                <div className='Quotes'>
                    {quotes.map((quote, ) => (
                        <div key={quote.id} >
                            <i className={`bi bi-heart${likedQuote === quote.id ? 'bi bi-heart-fill' : ''}`} onClick={() => handleLike(quote.id)}></i>
                            <h3>{quote.quote}</h3>
                            <p>{quote.author}</p>
                        </div>
                    ))}
                </div>
                <div className='Slide'>
                    <button className='next' onClick={next} disabled={currentIndex === quotes.length - 1}>
                        <i className="bi bi-arrow-bar-right"></i>
                    </button>
                </div>
            </div>
        
    );
}
