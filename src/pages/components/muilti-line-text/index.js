import React from 'react'
const MultiLine = ({text, className}) => <div
  className={className}
  dangerouslySetInnerHTML={{__html: text}}
/>

export default MultiLine
