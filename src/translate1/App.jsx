import React, { useState } from 'react'
import './App.scss'
import Translate from './i18n/translate'
import I18nProvider from './i18n/Provider'
import { LOCALES } from './i18n/locale'

export default function App() {
  const [language, setLanguage] = useState(LOCALES.ENGLISH);


  const handleChange = (e) => {
    setLanguage(e.target.value)
  }
  return (
    <div className='App'>
      <div className='App__first-part'>
      <div className='App__fp-size'>
      <I18nProvider locale={language}>
        <div>
          <select name="language" id="language" onChange={handleChange}>
            {
              Object.keys(LOCALES).map(elm => {
                return (
                  <option key={LOCALES[elm]} value={LOCALES[elm]}>{LOCALES[elm]}</option>
                )
              })
            }
            {/* {
            Object.values(LOCALES).map(elm=>{
              return (
                <option value={elm}>{elm}</option>
              )
            })
          } */}
          </select>
          <h1>
            <Translate id='heading' />
          </h1>
          <p>
            <Translate id='p1' />
          </p>
          <br />
          <p>
            <Translate id='p2' />
          </p>
          <button>
            <Translate id='button_Submit' />
          </button>
        </div>
      </I18nProvider>
      </div>
      </div>
      <img height='80%' width='100%' src="https://img.freepik.com/premium-photo/bowl-different-noodles-with-salad-eggs-sauce-coriander-seeds-with-chopsticks-placemat-against-black-background_23-2148123718.jpg?w=740" alt="Bowl of different noodles with salad; eggs; sauce and coriander seeds with chopsticks on placemat against black background" />
    </div>
  )
}
