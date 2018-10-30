import {
  graphql,
  requestSubscription
} from 'react-relay'

import environment from '../Environment'

const newFriendNoteSubscription = graphql`
  subscription NewFriendNoteSubscription($filter: NoteSubscriptionFilter) {
    Note(filter: $filter) {
     node {
       id
     }
   }
  }
`

export default (userId) => {

  const subscriptionConfig = {
    subscription: newFriendNoteSubscription,
    variables: { userId },
    onCompleted: () => console.log('new note'),
    // updater: proxyStore => {
    //   const createVoteField = proxyStore.getRootField('Vote')
    //   const newVote = createVoteField.getLinkedRecord('node')
    //   const updatedLink = newVote.getLinkedRecord('link')
    //   const linkId = updatedLink.getValue('id')
    //   const newVotes = updatedLink.getLinkedRecord('_votesMeta')
    //   const newVoteCount = newVotes.getValue('count')
    //
    //   const link = proxyStore.get(linkId)
    //   link.getLinkedRecord('votes').setValue(newVoteCount, 'count')
    // },
    onError: error => console.log(`An error occured:`, error)
  }

  requestSubscription(
    environment,
    subscriptionConfig
  )

}
