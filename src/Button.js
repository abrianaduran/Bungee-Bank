import React from 'react'

export default function Button (props) {
  const { tag, className, childrenm, ...otherProps } = props

  return React.createElement(
    props.tag,
    {
      className: props.className,
      ...otherProps
    },
    props.children
  )
}

Button.defaultProps ={
  tag: 'a',
}