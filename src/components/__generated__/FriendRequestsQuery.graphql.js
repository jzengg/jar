/**
 * @flow
 * @relayHash cb3d3baabd15db29834826bf1d1e7a23
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FriendRequestList_user$ref = any;
export type FriendRequestsQueryVariables = {|
  userId?: ?string
|};
export type FriendRequestsQueryResponse = {|
  +viewer: {|
    +User: ?{|
      +email: string,
      +$fragmentRefs: FriendRequestList_user$ref,
    |}
  |}
|};
export type FriendRequestsQuery = {|
  variables: FriendRequestsQueryVariables,
  response: FriendRequestsQueryResponse,
|};
*/


/*
query FriendRequestsQuery(
  $userId: ID
) {
  viewer {
    User(id: $userId) {
      email
      ...FriendRequestList_user
      id
    }
    id
  }
}

fragment FriendRequestList_user on User {
  receivedFriendRequests(last: 100, orderBy: createdAt_DESC) {
    edges {
      node {
        ...FriendRequest_friendRequest
        id
        __typename
      }
      cursor
    }
    pageInfo {
      hasPreviousPage
      startCursor
    }
  }
}

fragment FriendRequest_friendRequest on FriendRequest {
  id
  sender {
    email
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "userId",
    "type": "ID",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "userId",
    "type": "ID"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 100,
    "type": "Int"
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": "createdAt_DESC",
    "type": "FriendRequestOrderBy"
  }
],
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "FriendRequestsQuery",
  "id": null,
  "text": "query FriendRequestsQuery(\n  $userId: ID\n) {\n  viewer {\n    User(id: $userId) {\n      email\n      ...FriendRequestList_user\n      id\n    }\n    id\n  }\n}\n\nfragment FriendRequestList_user on User {\n  receivedFriendRequests(last: 100, orderBy: createdAt_DESC) {\n    edges {\n      node {\n        ...FriendRequest_friendRequest\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment FriendRequest_friendRequest on FriendRequest {\n  id\n  sender {\n    email\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "FriendRequestsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "User",
            "storageKey": null,
            "args": v1,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v2,
              {
                "kind": "FragmentSpread",
                "name": "FriendRequestList_user",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FriendRequestsQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "User",
            "storageKey": null,
            "args": v1,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v2,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "receivedFriendRequests",
                "storageKey": "receivedFriendRequests(last:100,orderBy:\"createdAt_DESC\")",
                "args": v3,
                "concreteType": "FriendRequestConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "FriendRequestEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "FriendRequest",
                        "plural": false,
                        "selections": [
                          v4,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "sender",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": false,
                            "selections": [
                              v2,
                              v4
                            ]
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "__typename",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "cursor",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "pageInfo",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "hasPreviousPage",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "startCursor",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedHandle",
                "alias": null,
                "name": "receivedFriendRequests",
                "args": v3,
                "handle": "connection",
                "key": "FriendRequestList_receivedFriendRequests",
                "filters": []
              },
              v4
            ]
          },
          v4
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7bf409b755e5ca6e37c21dd86031ec6c';
module.exports = node;
