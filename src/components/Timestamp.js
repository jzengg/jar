import moment from 'moment'
import React from 'react';

const Timestamp = (props) => {
  const createdAt = moment(props.createdAt).calendar(null, {
    sameElse: 'dddd, MM/DD/YYYY [at] h:mm A'
  })
  return <div> {createdAt }</div>
}

export default Timestamp
