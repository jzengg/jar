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


    const notes = await getNotes(api, userId).then(r => r.allNotes)
    const note = notes[Math.floor(Math.random() * notes.length)]

    return { data: { day: note.createdAt } }
  } catch (e) {
    console.log(e)
    return { error: 'An unexpected error occured while getting random note.' }
  }
}

async function getNotes(api: GraphQLClient, id: string): Promise<{ Note }> {
  const query = `
    query getNotes($filter: NoteFilter!) {
      allNotes(filter: $filter) {
        createdAt
      }
    }
  `

  const filter = {
    jar: { owner: { id: id } },
    createdAt_lte: moment.utc().startOf('day')
 }

  const variables = {
    filter
  }

  return api.request<{ Note }>(query, variables)
}
