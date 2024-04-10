import React, { useState } from 'react'
import Translate from './i18n/Translate'
import Provider from './i18n/Provider'
import { LOCALES } from './i18n/locale'

function App() {
  const [language, setLanguage] = useState(LOCALES.ENGLISH)
  return (
    <Provider locale={language}>
      <div>
        <select name="language" id="language">
          {
            Object.keys(LOCALES).map((language) => {
              return (
                <option value={LOCALES[language]} key={language}>{LOCALES[language]}</option>
              )
            }) 
          }
        </select>
        <h1>
          <Translate id='title'/>
        </h1>
      </div>
    </Provider>
  )
}

export default App