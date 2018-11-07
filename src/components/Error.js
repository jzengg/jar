import React from 'react'
import { MdErrorOutline } from 'react-icons/md'

export default (props) => {
  return (
    <span css={`
        color: red;
        display: flex;
        align-items: center;
        `}>
      <MdErrorOutline css={`margin-right: 0.1rem;`}/> { props.message }
    </span>
  )
}
