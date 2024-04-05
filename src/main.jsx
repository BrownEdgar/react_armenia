import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './test/App'

import './index.css'
import store from './app/store'
import { Provider } from 'react-redux'
import ErrorBoundry from './ErrorBoundry/ErrorBoundry'

ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <Provider store={store}>
      <ErrorBoundry fallBack={<h1>Some error here 🤯</h1>}>
        <App />
      </ErrorBoundry>
    </Provider>
  )
