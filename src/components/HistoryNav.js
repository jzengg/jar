import React from 'react'

class HistoryNav extends React.Component {
  render () {
    const interval = this.props.interval
    return (
        <nav>
          <a onClick={this.props.back}>
            back
          </a>

          <a> random {interval} </a>
          <a> random {interval} </a>

          <a onClick={this.props.next}>
              next
          </a>

          <a> current {interval} </a>
        </nav>
    )
  }
}

export default HistoryNav
