import React from 'react'
import PropTypes from 'prop-types'


export default function Component({title,age}) {
  return (
    <div>
      title:{title.toUpperCase()}
       <p>age:{age}</p>
    </div>
  )
}

Component.propTypes = {
    title: PropTypes.string.isRequired,
    age:PropTypes.number
}