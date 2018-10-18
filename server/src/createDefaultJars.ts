import { fromEvent, FunctionEvent } from 'graphcool-lib'
import { GraphQLClient } from 'graphql-request'

interface EventData {
  id: string
}

export default async (event: FunctionEvent<EventData>) => {
  console.log(event)

  try {
    const graphcool = fromEvent(event)
    const api = graphcool.api('simple/v1')

    const { id } = event.data.User.node

    // Create mutation
    const createDefaultJar = `
      mutation createDefaultJar($description: String, $name: String!, $ownerId: ID!) {
        createJar(
          name: $name,
          description: $description,
          ownerId: $ownerId
        ) {
          id
        }
      }
    `
    // Create variables for mutations
    const forward_variables = {
      ownerId: id,
      name: 'Looking forward jar',
      description: "Things you're looking forward to.",
    }

    const glad_variables = {
      ownerId: id,
      name: 'Glad jar',
      description: "Things you're glad about."
    }

    // Send mutation with variables
    let lookingForwardJar = await api.request<{ Jar }>(createDefaultJar, forward_variables)

    let gladJar = await api.request<{ Jar }>(createDefaultJar, glad_variables)

    return { data: { id: id } }

  } catch (e) {
    console.log(e)
    return { error: 'An unexpected error occured during jar creation.' }
  }
}
