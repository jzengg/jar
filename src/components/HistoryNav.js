import React from 'react'

class HistoryNav extends React.Component {
  render () {
    const interval = this.props.interval
    const intervalOptions = this.props.intervalOptions

    return (
        <nav>
          <button onClick={this.props.setPrevInterval}>
            back
          </button>

          <select value={ interval } onChange={ this.props.updateInterval }>
            {intervalOptions.map(({ value, name }) => {
              return (
                <option key={ value } value={ value }>
                  { name }
                </option>
              )
            })}

          </select>
          <button onClick={this.props.setNextInterval}>
              next
          </button>
        </nav>
    )
  }
}

export default HistoryNav
