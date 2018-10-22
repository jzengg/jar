import React, { Component } from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import environment from '../Environment'

import CreateFriendRequest from './CreateFriendRequest'

const AddFriendQuery = graphql`
  query AddFriendQuery {
    viewer {
      ...CreateFriendRequest_viewer
    }
  }
`

class AddFriend extends Component {

  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={AddFriendQuery}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return (
              <div>
                <h2> Add a friend </h2>
                <CreateFriendRequest viewer={props.viewer} />
              </div>
            )

          }
          return <div>Loading</div>
        }}
      />
    )
  }

}

export default AddFriend
