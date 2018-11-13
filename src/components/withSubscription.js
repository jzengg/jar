import React from 'react'

const withSubscription = (WrappedComponent, subscribeFn) => {

  return class extends React.Component {

    componentDidMount() {
      this.subscription = subscribeFn && subscribeFn()
    }

    componentWillUnmount() {
      this.subscription && this.subscription.dispose()
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

export default withSubscription
