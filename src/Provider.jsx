import React, { Fragment } from 'react'
import { IntlProvider } from 'react-intl'
import messages from './/.//i18n/messages'

export default function Provider({children,locale}) {
  return (
   <IntlProvider
   locale={locale}
   textComponent={Fragment}
   messages={messages[locale]}
   >
    {children}
   </IntlProvider>
  )
}
