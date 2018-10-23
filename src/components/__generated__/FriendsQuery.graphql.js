/**
 * @flow
 * @relayHash 95802d4a8d6429074bfee908812d9293
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FriendList_user$ref = any;
export type FriendsQueryVariables = {|
  userId?: ?string
|};
export type FriendsQueryResponse = {|
  +viewer: {|
    +User: ?{|
      +email: string,
      +$fragmentRefs: FriendList_user$ref,
    |}
  |}
|};
export type FriendsQuery = {|
  variables: FriendsQueryVariables,
  response: FriendsQueryResponse,
|};
*/


/*
query FriendsQuery(
  $userId: ID
) {
  viewer {
    User(id: $userId) {
      email
      ...FriendList_user
      id
    }
    id
  }
}

fragment FriendList_user on User {
  friends(last: 100, orderBy: createdAt_DESC) {
    edges {
      node {
        ...Friend_friend
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

fragment Friend_friend on User {
  id
  email
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
    "type": "UserOrderBy"
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
  "name": "FriendsQuery",
  "id": null,
  "text": "query FriendsQuery(\n  $userId: ID\n) {\n  viewer {\n    User(id: $userId) {\n      email\n      ...FriendList_user\n      id\n    }\n    id\n  }\n}\n\nfragment FriendList_user on User {\n  friends(last: 100, orderBy: createdAt_DESC) {\n    edges {\n      node {\n        ...Friend_friend\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment Friend_friend on User {\n  id\n  email\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "FriendsQuery",
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
                "name": "FriendList_user",
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
    "name": "FriendsQuery",
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
                "name": "friends",
                "storageKey": "friends(last:100,orderBy:\"createdAt_DESC\")",
                "args": v3,
                "concreteType": "UserConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "UserEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": [
                          v4,
                          v2,
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
                "name": "friends",
                "args": v3,
                "handle": "connection",
                "key": "FriendList_friends",
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
(node/*: any*/).hash = '90bb2ef82b88bb186083fd7bb8869101';
module.exports = node;
