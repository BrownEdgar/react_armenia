import React from 'react'
import { FormattedMessage } from 'react-intl'

 const  Translate=({id,values}) =>{
 return <FormattedMessage id ={id} values={{...values}}/>
}
export default Translate
