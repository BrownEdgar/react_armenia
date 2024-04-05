import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './redux5slickSlider/App'
import store from './redux5slickSlider/app/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <Provider store={store}>
      <App />
    </Provider>
  )
