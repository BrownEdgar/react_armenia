import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import './index.css'
import store from './app/store'
import News from './News.am/News'

ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <Provider store={store}>
      <News />
    </Provider>
  )
