import moment from 'moment'
import React from 'react'

import styled from 'react-emotion'
import { MdAccessTime } from 'react-icons/md'

const TimestampContainer = styled.div `
  display: flex;
  color: #b4bcc2;
`

const Timestamp = (props) => {
  const createdAt = moment(props.createdAt).calendar(null, {
    sameElse: 'dddd, MM/DD/YYYY [at] h:mm A'
  })
  return (
    <TimestampContainer>
      <MdAccessTime css={`margin-right: 0.2rem;`} />
      <div> { createdAt } </div>
    </TimestampContainer>
  )
}

export default Timestamp
