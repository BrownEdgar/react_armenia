import axios from 'axios';
import { nanoid } from 'nanoid';
import React, { useState, useEffect } from 'react';

import './App.scss'
import classNames from 'classnames';
import MyLoader from './MyLoader';

export default function Apps() {
  const [quotes, setQuotes] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isCopied, setIsCopied] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        const data = res.data.map(elem => {
          elem.id = nanoid(5);
          return elem;
        })
        setQuotes(data)
      }).finally(() => setLoading(false))

  }, [])

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false)
    }, 300)
  }
  const next = () => {
    setCurrentIndex(currentIndex + 1)
  }
  const prev = () => {
    setCurrentIndex(currentIndex - 1)
  }

  return (
    <div>

      <h1>
          Users
      </h1>
      <div className="Quotes">
        <div className='slide'>
          <button className='slide__prev' onClick={prev} disabled={currentIndex === 0}>
            <i className="bi bi-caret-left"></i>
          </button>
        </div>
        {
          !loading ? (
            <div key={quotes[currentIndex].id} className='Quotes__elem'>
              <span className='Quotes__icon' onClick={() => handleCopy(quotes[currentIndex].name)}>
                <i className={classNames('bi', {
                  'bi-clipboard-check': isCopied,
                  'bi-clipboard': !isCopied,
                })}></i>
              </span>
              <h2>{quotes[currentIndex].email}</h2>
              <p>{quotes[currentIndex].name || 'unknown'}</p>
            </div>
          ) : <div className='Quotes__elem'>
            <MyLoader className="red" />
          </div>
        }
        <div className='slide'>
          <button className='slide__next' onClick={next} disabled={currentIndex === quotes?.length - 1}>
            <i className="bi bi-caret-right"></i>
          </button>
        </div>

      </div>

    </div>
  )
}

