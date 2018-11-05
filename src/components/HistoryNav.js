import React from 'react'

import { SecondaryButton } from '../css/BaseButton'



class HistoryNav extends React.Component {
  render () {
    const interval = this.props.interval
    const intervalOptions = this.props.intervalOptions

    return (
        <nav css={`
            padding: 1.5rem;
            `}>
          <SecondaryButton onClick={this.props.setPrevInterval}>
            back
          </SecondaryButton>

          <select css={`
              margin: 0 1rem;
              `} value={ interval } onChange={ this.props.updateInterval }>
            {intervalOptions.map(({ value, name }) => {
              return (
                <option key={ value } value={ value }>
                  { name }
                </option>
              )
            })}

          </select>
          <SecondaryButton onClick={this.props.setNextInterval}>
              next
          </SecondaryButton>
        </nav>
    )
  }
}

export default HistoryNav
