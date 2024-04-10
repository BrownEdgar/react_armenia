import React, { Fragment } from 'react'
import {IntlProvider} from 'react-intl'
import messages from './messages'

function Provider({children, local}) {
  return (
    <IntlProvider
    locale={local}
    textComponent={Fragment}
    messages={messages[locale]}
    >
      {children}
    </IntlProvider>
  )
}

export default Provider