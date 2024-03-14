import classNames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'


export default function Button({ title, variant, onclick, size, block, as,href}) {
    const Element = as || 'a'

  return (
    <Element className={classNames('btn', {
      [`btn-${variant}`]: true,
      [`btn-${size}`]: true,
      'btn-block': block,
       'no-text-decoration': Element == 'a'
    })}
      onClick={onclick}
       href={Element === 'a' ? href : null}
    >
      {title}
    </Element>
  )
}

Button.defaultProps = {
  variant: 'primary',
  title: 'button',
  size: 'md',
  block: false,
  href: 'https://smartcode.am/hy/'
}
Button.proptypes = {
  title: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'dark', 'warning', 'success']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  onclick: PropTypes.func,
  block: PropTypes.bool,
 href: PropTypes.string
  
}

