import React, { useState } from 'react';
import './App.scss';
import Translate from './Translate';
import I18Provider from './Provider';
import { LOCALE } from './i18n/locale';

export default function App() {
  const [language, setLanguage] = useState(LOCALE.ENGLISH);

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <I18Provider locale={language}>
      <div className='App'>
        <select name='language' id='language' onChange={handleChange}>
          {Object.keys(LOCALE).map((language) => (
            <option value={LOCALE[language]} key={language}>
              {LOCALE[language]}
            </option>
          ))}
        </select>

        <div className='App__content'>
          <div className='App__about'>
            <h1>
              <Translate id='title' />
            </h1>
            <p>
              <Translate id='text' />
            </p>
            <button>
              <Translate id='button' />
            </button>
          </div>
          <div className='App__image'>
            <img
              src='https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1712534400&semt=sph'
              
            />
          </div>
        </div>
      </div>
    </I18Provider>
  );
}
