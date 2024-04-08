import React, { useState } from 'react'
import './App.scss'
import Translate from './i18n/Translate'
import I18nProvider from './i18n/Provider'
import { LOCALES } from './i18n/locale'

const message = 'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.'

const flags = {
  ENGLISH: "🇺🇸",
  RUSSIAN: "🇷🇺",
  ARMENIAN: "🇦🇲"
}

export default function App() {
  const [language, setLanguage] = useState(LOCALES.ENGLISH);

  const handlecHANGE = (e) => {
    setLanguage(e.target.value)
  }

  return (
    <I18nProvider locale={language}>
      <div>
        <select name="language" id="language" onChange={handlecHANGE}>
          {
            Object.keys(LOCALES).map(language => {
              return (
                <option value={LOCALES[language]} key={language}>
                  {flags[language]}
                </option>
              )
            })
          }
        </select>
        <h1>
          <Translate id='title' />
        </h1>
        <p>
          <Translate id='desc' value={{ extraDesc: message }} />
        </p>
      </div>
    </I18nProvider>
  )
}
