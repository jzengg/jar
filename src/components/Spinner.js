import React from 'react'
import { ClipLoader } from 'react-spinners'
import { VerticallyCentered } from '../css/BaseLayout'


export default (props) => {
  return <VerticallyCentered> <ClipLoader loading={props.loading || true} /> </VerticallyCentered>
}
