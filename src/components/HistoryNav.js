import React from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { MdArrowBack, MdArrowForward } from "react-icons/md"
import { css } from 'react-emotion'

import { SecondaryButton } from '../css/BaseButton'

const iconSize = css `
  font-size: 1rem;
`

class HistoryNav extends React.Component {
  render () {
    const interval = this.props.interval
    const intervalOptions = this.props.intervalOptions

    return (
        <nav css={`
            display: flex;
            justify-content: center;
            `}>
          <SecondaryButton onClick={this.props.setPrevInterval}>
            <MdArrowBack css={iconSize}/>
          </SecondaryButton>
          <div css={`margin: 0 1rem;`} >
            <Dropdown options={intervalOptions} onChange={this.props.updateInterval} value={interval} />
          </div>
          <SecondaryButton onClick={this.props.setNextInterval}>
            <MdArrowForward css={iconSize} />
          </SecondaryButton>
        </nav>
    )
  }
}

export default HistoryNav
