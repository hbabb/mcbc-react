// src/components/common/Button.jsx
import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children = 'Default Text', ...props }) => {
  return <button {...props}>{children}</button>
}

Button.propTypes = {
  children: PropTypes.node,
}

export default Button
