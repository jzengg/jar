import React from 'react'

class Subscription extends React.Component {

  componentDidMount() {
    this.subscription = this.props.startSub && this.props.startSub()
  }

  componentWillUnmount() {
    this.subscription && this.subscription.dispose()
  }

  render() {
    return (
      <React.Fragment>
        { this.props.render(this.subscription) }
      </React.Fragment>
    )
  }
}

export default Subscription
