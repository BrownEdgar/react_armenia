import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './redux2Fetch/App'
import store from './redux2Fetch/app/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <Provider store={store}>
      <App />
    </Provider>
  )
