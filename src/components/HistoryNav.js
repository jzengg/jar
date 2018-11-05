import React from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

import { SecondaryButton } from '../css/BaseButton'

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
            back
          </SecondaryButton>
          <div css={`margin: 0 1rem;`} >
            <Dropdown options={intervalOptions} onChange={this.props.updateInterval} value={interval} />
          </div>
          <SecondaryButton onClick={this.props.setNextInterval}>
              next
          </SecondaryButton>
        </nav>
    )
  }
}

export default HistoryNav
