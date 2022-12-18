import React from 'react'

const HighlightBlock = ({
  children,
  bg = 'papayawhip',
  color = '#1b1b1d',
  styles,
}) => {
  return (
    <div
      style={{
        padding: '1rem',
        backgroundColor: bg,
        color: color,
        borderRadius: '.5em',
        fontWeight: '500',
        marginBottom: 'var(--ifm-leading)',
        ...styles,
      }}
    >
      {children}
    </div>
  )
}

export default HighlightBlock
