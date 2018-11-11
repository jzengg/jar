import React from 'react'
import MdErrorOutline from 'react-icons/lib/md/error-outline'


export default (props) => {
  return (
    <div css={`
        margin-top: 1rem;
        color: red;
        display: flex;
        align-items: center;
        `}>
      <MdErrorOutline css={`margin-right: 0.1rem;`}/> { props.message }
    </div>
  )
}
