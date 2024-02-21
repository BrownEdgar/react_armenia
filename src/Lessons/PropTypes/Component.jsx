import React from 'react'
import PropTypes from 'prop-types'

export default function Component({ title, age }) {
  return (
    <div>
      <h1>title: {title.toUpperCase()}</h1>
      <h2>Age: {age}</h2>
    </div>
  )
}

Component.defaultProps = {
  age: 40
}

Component.propTypes = {
  title: PropTypes.string.isRequired,
  age: PropTypes.number,
  inOpen: PropTypes.func,
  arr: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      userId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ),
}

