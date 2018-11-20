import { fromEvent, FunctionEvent } from 'graphcool-lib'
import { GraphQLClient } from 'graphql-request'
import * as moment from 'moment'

interface Note {
  createdAt: string
}

export default async (event: FunctionEvent<{}>) => {
  console.log(event)

  try {
    if (!event.context.auth || !event.context.auth.nodeId) {
      return { data: null }
    }

    const userId = event.context.auth.nodeId

    const graphcool = fromEvent(event)
    const api = graphcool.api('simple/v1')

    const filter = {
      jar: { owner: { id: userId } },
   }

    const notes = await getNotes(api, filter).then(r => r.allNotes)
    let day
    if (notes.length) {
      const note = notes[Math.floor(Math.random() * notes.length)]
      day = note.createdAt
    } else {
      day = moment()
    }

    return { data: { day: day } }
  } catch (e) {
    console.log(e)
    return { error: 'An unexpected error occured while getting random note.' }
  }
}

async function getNotes(api: GraphQLClient, filter): Promise<{ Note }> {
  const query = `
    query getNotes($filter: NoteFilter!) {
      allNotes(filter: $filter) {
        createdAt
      }
    }
  `

  const variables = {
    filter
  }

  return api.request<{ Note }>(query, variables)
}
