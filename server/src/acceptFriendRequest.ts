import { fromEvent, FunctionEvent } from 'graphcool-lib'
import { GraphQLClient } from 'graphql-request'

interface FriendRequest {
  id: string
}

interface EventData {
  id: string
}

export default async (event: FunctionEvent<EventData>) => {
  console.log(event)

  try {
    const graphcool = fromEvent(event)
    const api = graphcool.api('simple/v1')

    const { id } = event.data

    const friendRequest = await acceptFriendRequest(api, id).then(r => r.updateFriendRequest)

    const senderId = friendRequest.sender.id
    const recipientId = friendRequest.recipient.id

    const addFriendsPayload = await addFriend(api, senderId, recipientId).then(r => r.addToFriends)

    return { data: { user1Id: addFriendsPayload.friends1User.id, user2Id: addFriendsPayload.friends2User.id } }
  } catch (e) {
    console.log(e)
    return { error: 'An unexpected error occured while accepting friend request.' }
  }
}

async function acceptFriendRequest(api: GraphQLClient, id: string): Promise<{ FriendRequest }> {
  const mutation = `
    mutation acceptFriendRequest($id: ID!) {
      updateFriendRequest(
        id: $id,
        status: ACCEPTED
      ) {
        sender {
          id
        }
        recipient {
          id
        }
      }
    }
  `
  return api.request<{ FriendRequest }>(mutation, { id })
}

async function addFriend(api: GraphQLClient, userId: string, friendId: string): Promise<{ User }> {
  const mutation = `
    mutation addFriend($userId: ID!, $friendId: ID!) {
      addToFriends(
        friends1UserId: $userId,
        friends2UserId: $friendId
      ) {
        friends1User {
          id
        }
        friends2User {
          id
        }
      }
    }
  `
  return api.request<{ FriendRequest }>(mutation, { userId, friendId })
}
