import { fromEvent, FunctionEvent } from 'graphcool-lib'
import { GraphQLClient } from 'graphql-request'

interface User {
  id: string
}

interface FriendRequest {
  id: string
}

interface EventData {
  email: string
  senderId: string
}

export default async (event: FunctionEvent<EventData>) => {
  console.log(event)

  try {
    const graphcool = fromEvent(event)
    const api = graphcool.api('simple/v1')

    const { email, senderId } = event.data

    // check if user exists
    const recipient: User = await getUser(api, email).then(r => r.User)
    if (!recipient) {
      return { error: {
        message: 'User with that email does not exist',
        debugMessage: 'Email not in db'
      } }    } else if (recipient.id == senderId) {
        return { error: {
          message: "You cannot add yourself as a friend",
          debugMessage: 'Cannot add self as friend'
        } }    }

    const alreadyFriends: boolean = recipient.friends.map(friend => friend.id).includes(senderId)

    const friendRequests: FriendRequest[] = await getExistingFriendRequests(api, senderId, recipient.id).then(r => r.allFriendRequests)

    if (alreadyFriends) {
       return { error: {
         message: 'You are already friends',
         debugMessage: 'Already friends'
       } }
    } else if (friendRequests.length !== 0) {
      return { error: {
        message: 'A request has already been sent',
        debugMessage: 'Friend request already exists'
      } }    }

    const friendRequest = await createFriendRequest(api, senderId, recipient.id).then(r => r.createFriendRequest)

    return { data: { id: friendRequest.id } }
  } catch (e) {
    console.log(e)
    return { error: {
      message: 'An unexpected error occured while sending friend request.',
      debugMessage: 'Server error check add friend by email function'
    } }  }
}

async function createFriendRequest(api: GraphQLClient, senderId: string, recipientId: string): Promise<{ FriendRequest }> {
  const mutation = `
    mutation createFriendRequest($senderId: ID!, $recipientId: ID!) {
      createFriendRequest(
        senderId: $senderId,
        recipientId: $recipientId
      ) {
        id
      }
    }
  `
  return api.request<{ FriendRequest }>(mutation, { senderId, recipientId })
}

async function getExistingFriendRequests(api: GraphQLClient, senderId: string, recipientId: string): Promise< { FriendRequest }> {
  const query = `
    query existingFriendRequests($senderId: ID!, $recipientId: ID!) {
       allFriendRequests(filter:{
        AND:[
          {recipient: {id: $recipientId}},
          {sender: {id: $senderId}}
        ]
      }) {
        id
      }
    }
  `
  return api.request<{ FriendRequest }>(query, { senderId, recipientId })
}

async function getUser(api: GraphQLClient, email: string): Promise<{ User }> {
  const query = `
    query getUser($email: String!) {
      User(email: $email) {
        id
        friends {
          id
        }
      }
    }
  `

  return api.request<{ User }>(query, { email })
}
