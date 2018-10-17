import { GC_AUTH_TOKEN } from './constants'

const {
  Environment,
  Network,
  RecordSource,
  Store,
} = require('relay-runtime')


function fetchQuery(operation,variables) {
  return fetch('https://api.graph.cool/relay/v1/cjn6n3fw25jr50120xugu4ged', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem(GC_AUTH_TOKEN)}`

    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json()
  })
}

const network = Network.create(fetchQuery)

const source = new RecordSource()
const store = new Store(source)

export default new Environment({
  network,
  store,
})
