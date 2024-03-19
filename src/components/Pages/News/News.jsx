import React from 'react';
import './News.scss';
import news from "../../../assets/Images/news.jpg"

function News() {
  return (
    <div className='News'>
        <h1>News Page</h1>
        <img src={news} />
    </div>
  )
}

export default News