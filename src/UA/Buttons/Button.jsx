import classNames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'


export default function Button({ title, variant, onclick, size, block, icon, disabled }) {
  const Element = 'button'

  return (
    <Element className={classNames('btn', {
      [`btn-${variant}`]: true,
      [`btn-${size}`]: true,
      'btn-block': block,
      'btn-disabled': disabled
    })}
      onClick={onclick}
      disabled={disabled}
    >
      {icon && <i className={classNames(`${icon}`)} />}
      {title}
    </Element>
  )
}

Button.defaultProps = {
  variant: 'primary',
  title: 'button',
  size: 'md',
  block: false,
  disabled: false
}
Button.proptypes = {
  title: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'dark', 'warning', 'success']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  onclick: PropTypes.func,
  block: PropTypes.bool,
  icon: PropTypes.string
}
