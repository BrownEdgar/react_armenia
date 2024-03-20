import classNames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

export default function Button({ title, variant, onclick, size, block, as }) {
  const Element = 'a' || 'button'
  return (
    Element === 'button' ? <Element className={classNames('btn', {
      [`btn-${variant}`]: true,
      [`btn-${size}`]: true,
      'btn-block': block
    })}
      onClick={onclick}
    >
      {title}
    </Element>
      :
      <Element className={classNames('btn', {
        [`btn-${variant}`]: true,
        [`btn-${size}`]: true,
        'btn-block': block
      })}
        href='https://www.google.com/'
        target="_blank"
      >
        {title}
      </Element>
  )
}

Button.defaultProps = {
  variant: 'primary',
  title: 'button',
  size: 'md',
  block: false
}
Button.proptypes = {
  title: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'dark', 'warning', 'success']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  onclick: PropTypes.func,
  block: PropTypes.bool,
}