import React from 'react'

const HighlightBlock = ({ children, bg = 'papayawhip', color = '#1b1b1d' }) => {
  return (
    <div
      style={{
        padding: '1rem',
        backgroundColor: bg,
        color: color,
        borderRadius: '.5em',
        fontWeight: '500',
        marginBottom: 'var(--ifm-leading)',
      }}
    >
      {children}
    </div>
  )
}

export default HighlightBlock
