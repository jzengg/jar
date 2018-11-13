import React from 'react'
import { GC_USER_ID } from '../constants'

const withSubscription = (WrappedComponent, subscribeFn) => {
  const userId = localStorage.getItem(GC_USER_ID)

  return class extends React.component {

    componentDidMount() {
      this.subscription = subscribeFn && subscribeFn(userId)
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
