import { GC_AUTH_TOKEN } from './constants'
import { SubscriptionClient } from 'subscriptions-transport-ws'

const {
  Environment,
  Network,
  RecordSource,
  Store,
} = require('relay-runtime')


const fetchQuery = (operation,variables) => {
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

const setupSubscription = (config, variables, cacheConfig, observer) => {
  const query = config.text

  const subscriptionClient = new SubscriptionClient('wss://subscriptions.us-west-2.graph.cool/v1/cjn6n3fw25jr50120xugu4ged', {
    reconnect: true,
    timeout: 30000,
    connectionParams: {
      authToken: localStorage.getItem(GC_AUTH_TOKEN),
    }
  })
  const client = subscriptionClient.request({ query, variables }).subscribe({
    next: result => {
      observer.onNext({ data: result.data });
    },
    complete: () => {
      observer.onCompleted();
    },
    error: error => {
      observer.onError(error);
    }
  });

  return {
    dispose: client.unsubscribe
  };

}

const network = Network.create(fetchQuery, setupSubscription)

const source = new RecordSource()
const store = new Store(source)

export default new Environment({
  network,
  store,
})
