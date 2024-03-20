import React from 'react'

export default function FlexComponent({children}) {
    console.log({children});return (
    <div>
        {children[0]}
    </div>
  )
}
