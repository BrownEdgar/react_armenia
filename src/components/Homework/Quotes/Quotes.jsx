import PropTypes from 'prop-types';
import './Quotes.scss';
import { useState } from 'react';
import Button from '../../../UA/Buttons/Button'

function Quotes({ quotes }) {
  const [likedQuotes, setLikedQuotes] = useState([]);

  const handleLike = (id) => {
    const isAlreadyLiked = likedQuotes.includes(id);
    if (isAlreadyLiked) {
      const updatedLikedQuotes = likedQuotes.filter((elem) => elem !== id);
      setLikedQuotes(updatedLikedQuotes);
    } else {
      setLikedQuotes([...likedQuotes, id]);
    }
  };

  const isQuoteLiked = (id) => {
    return likedQuotes.includes(id);
  };

  const getButtonColor = (id) => {
    return isQuoteLiked(id) ? 'red' : 'grey';
  };

  return (
    <div className='quotes'>
      {quotes.map((elem) => (
        <div className='quotes__Content' key={elem.id} style={{ backgroundColor: getButtonColor(elem.id) }}>
          <h1>{elem.quote}</h1>
          <Button title={isQuoteLiked(elem.id) ? 'Unlike' : 'Like'} onclick={() => handleLike(elem.id)}/>
        </div>
      ))}
    </div>
  );
}

Quotes.propTypes = {
  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      quote: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Quotes;
