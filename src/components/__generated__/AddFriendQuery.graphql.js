/**
 * @flow
 * @relayHash 59cf3366ef594756830307731191aadd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ReceivedFriendRequestList_user$ref = any;
type SentFriendRequestList_user$ref = any;
export type FriendRequestStatus = "ACCEPTED" | "IGNORED" | "PENDING" | "%future added value";
export type FriendRequestFilter = {
  AND?: ?$ReadOnlyArray<FriendRequestFilter>,
  OR?: ?$ReadOnlyArray<FriendRequestFilter>,
  createdAt?: ?any,
  createdAt_not?: ?any,
  createdAt_in?: ?$ReadOnlyArray<any>,
  createdAt_not_in?: ?$ReadOnlyArray<any>,
  createdAt_lt?: ?any,
  createdAt_lte?: ?any,
  createdAt_gt?: ?any,
  createdAt_gte?: ?any,
  id?: ?string,
  id_not?: ?string,
  id_in?: ?$ReadOnlyArray<string>,
  id_not_in?: ?$ReadOnlyArray<string>,
  id_lt?: ?string,
  id_lte?: ?string,
  id_gt?: ?string,
  id_gte?: ?string,
  id_contains?: ?string,
  id_not_contains?: ?string,
  id_starts_with?: ?string,
  id_not_starts_with?: ?string,
  id_ends_with?: ?string,
  id_not_ends_with?: ?string,
  status?: ?FriendRequestStatus,
  status_not?: ?FriendRequestStatus,
  status_in?: ?$ReadOnlyArray<FriendRequestStatus>,
  status_not_in?: ?$ReadOnlyArray<FriendRequestStatus>,
  updatedAt?: ?any,
  updatedAt_not?: ?any,
  updatedAt_in?: ?$ReadOnlyArray<any>,
  updatedAt_not_in?: ?$ReadOnlyArray<any>,
  updatedAt_lt?: ?any,
  updatedAt_lte?: ?any,
  updatedAt_gt?: ?any,
  updatedAt_gte?: ?any,
  recipient?: ?UserFilter,
  sender?: ?UserFilter,
};
export type UserFilter = {
  AND?: ?$ReadOnlyArray<UserFilter>,
  OR?: ?$ReadOnlyArray<UserFilter>,
  createdAt?: ?any,
  createdAt_not?: ?any,
  createdAt_in?: ?$ReadOnlyArray<any>,
  createdAt_not_in?: ?$ReadOnlyArray<any>,
  createdAt_lt?: ?any,
  createdAt_lte?: ?any,
  createdAt_gt?: ?any,
  createdAt_gte?: ?any,
  email?: ?string,
  email_not?: ?string,
  email_in?: ?$ReadOnlyArray<string>,
  email_not_in?: ?$ReadOnlyArray<string>,
  email_lt?: ?string,
  email_lte?: ?string,
  email_gt?: ?string,
  email_gte?: ?string,
  email_contains?: ?string,
  email_not_contains?: ?string,
  email_starts_with?: ?string,
  email_not_starts_with?: ?string,
  email_ends_with?: ?string,
  email_not_ends_with?: ?string,
  id?: ?string,
  id_not?: ?string,
  id_in?: ?$ReadOnlyArray<string>,
  id_not_in?: ?$ReadOnlyArray<string>,
  id_lt?: ?string,
  id_lte?: ?string,
  id_gt?: ?string,
  id_gte?: ?string,
  id_contains?: ?string,
  id_not_contains?: ?string,
  id_starts_with?: ?string,
  id_not_starts_with?: ?string,
  id_ends_with?: ?string,
  id_not_ends_with?: ?string,
  password?: ?string,
  password_not?: ?string,
  password_in?: ?$ReadOnlyArray<string>,
  password_not_in?: ?$ReadOnlyArray<string>,
  password_lt?: ?string,
  password_lte?: ?string,
  password_gt?: ?string,
  password_gte?: ?string,
  password_contains?: ?string,
  password_not_contains?: ?string,
  password_starts_with?: ?string,
  password_not_starts_with?: ?string,
  password_ends_with?: ?string,
  password_not_ends_with?: ?string,
  updatedAt?: ?any,
  updatedAt_not?: ?any,
  updatedAt_in?: ?$ReadOnlyArray<any>,
  updatedAt_not_in?: ?$ReadOnlyArray<any>,
  updatedAt_lt?: ?any,
  updatedAt_lte?: ?any,
  updatedAt_gt?: ?any,
  updatedAt_gte?: ?any,
  friends_every?: ?UserFilter,
  friends_some?: ?UserFilter,
  friends_none?: ?UserFilter,
  jars_every?: ?JarFilter,
  jars_some?: ?JarFilter,
  jars_none?: ?JarFilter,
  receivedFriendRequests_every?: ?FriendRequestFilter,
  receivedFriendRequests_some?: ?FriendRequestFilter,
  receivedFriendRequests_none?: ?FriendRequestFilter,
  sentFriendRequests_every?: ?FriendRequestFilter,
  sentFriendRequests_some?: ?FriendRequestFilter,
  sentFriendRequests_none?: ?FriendRequestFilter,
};
export type JarFilter = {
  AND?: ?$ReadOnlyArray<JarFilter>,
  OR?: ?$ReadOnlyArray<JarFilter>,
  createdAt?: ?any,
  createdAt_not?: ?any,
  createdAt_in?: ?$ReadOnlyArray<any>,
  createdAt_not_in?: ?$ReadOnlyArray<any>,
  createdAt_lt?: ?any,
  createdAt_lte?: ?any,
  createdAt_gt?: ?any,
  createdAt_gte?: ?any,
  description?: ?string,
  description_not?: ?string,
  description_in?: ?$ReadOnlyArray<string>,
  description_not_in?: ?$ReadOnlyArray<string>,
  description_lt?: ?string,
  description_lte?: ?string,
  description_gt?: ?string,
  description_gte?: ?string,
  description_contains?: ?string,
  description_not_contains?: ?string,
  description_starts_with?: ?string,
  description_not_starts_with?: ?string,
  description_ends_with?: ?string,
  description_not_ends_with?: ?string,
  id?: ?string,
  id_not?: ?string,
  id_in?: ?$ReadOnlyArray<string>,
  id_not_in?: ?$ReadOnlyArray<string>,
  id_lt?: ?string,
  id_lte?: ?string,
  id_gt?: ?string,
  id_gte?: ?string,
  id_contains?: ?string,
  id_not_contains?: ?string,
  id_starts_with?: ?string,
  id_not_starts_with?: ?string,
  id_ends_with?: ?string,
  id_not_ends_with?: ?string,
  name?: ?string,
  name_not?: ?string,
  name_in?: ?$ReadOnlyArray<string>,
  name_not_in?: ?$ReadOnlyArray<string>,
  name_lt?: ?string,
  name_lte?: ?string,
  name_gt?: ?string,
  name_gte?: ?string,
  name_contains?: ?string,
  name_not_contains?: ?string,
  name_starts_with?: ?string,
  name_not_starts_with?: ?string,
  name_ends_with?: ?string,
  name_not_ends_with?: ?string,
  updatedAt?: ?any,
  updatedAt_not?: ?any,
  updatedAt_in?: ?$ReadOnlyArray<any>,
  updatedAt_not_in?: ?$ReadOnlyArray<any>,
  updatedAt_lt?: ?any,
  updatedAt_lte?: ?any,
  updatedAt_gt?: ?any,
  updatedAt_gte?: ?any,
  notes_every?: ?NoteFilter,
  notes_some?: ?NoteFilter,
  notes_none?: ?NoteFilter,
  owner?: ?UserFilter,
};
export type NoteFilter = {
  AND?: ?$ReadOnlyArray<NoteFilter>,
  OR?: ?$ReadOnlyArray<NoteFilter>,
  createdAt?: ?any,
  createdAt_not?: ?any,
  createdAt_in?: ?$ReadOnlyArray<any>,
  createdAt_not_in?: ?$ReadOnlyArray<any>,
  createdAt_lt?: ?any,
  createdAt_lte?: ?any,
  createdAt_gt?: ?any,
  createdAt_gte?: ?any,
  id?: ?string,
  id_not?: ?string,
  id_in?: ?$ReadOnlyArray<string>,
  id_not_in?: ?$ReadOnlyArray<string>,
  id_lt?: ?string,
  id_lte?: ?string,
  id_gt?: ?string,
  id_gte?: ?string,
  id_contains?: ?string,
  id_not_contains?: ?string,
  id_starts_with?: ?string,
  id_not_starts_with?: ?string,
  id_ends_with?: ?string,
  id_not_ends_with?: ?string,
  text?: ?string,
  text_not?: ?string,
  text_in?: ?$ReadOnlyArray<string>,
  text_not_in?: ?$ReadOnlyArray<string>,
  text_lt?: ?string,
  text_lte?: ?string,
  text_gt?: ?string,
  text_gte?: ?string,
  text_contains?: ?string,
  text_not_contains?: ?string,
  text_starts_with?: ?string,
  text_not_starts_with?: ?string,
  text_ends_with?: ?string,
  text_not_ends_with?: ?string,
  updatedAt?: ?any,
  updatedAt_not?: ?any,
  updatedAt_in?: ?$ReadOnlyArray<any>,
  updatedAt_not_in?: ?$ReadOnlyArray<any>,
  updatedAt_lt?: ?any,
  updatedAt_lte?: ?any,
  updatedAt_gt?: ?any,
  updatedAt_gte?: ?any,
  jar?: ?JarFilter,
};
export type AddFriendQueryVariables = {|
  userId?: ?string,
  friendRequestFilter?: ?FriendRequestFilter,
|};
export type AddFriendQueryResponse = {|
  +viewer: {|
    +User: ?{|
      +email: string,
      +$fragmentRefs: SentFriendRequestList_user$ref & ReceivedFriendRequestList_user$ref,
    |}
  |}
|};
export type AddFriendQuery = {|
  variables: AddFriendQueryVariables,
  response: AddFriendQueryResponse,
|};
*/


/*
query AddFriendQuery(
  $userId: ID
  $friendRequestFilter: FriendRequestFilter
) {
  viewer {
    User(id: $userId) {
      email
      ...SentFriendRequestList_user_2yZ5GC
      ...ReceivedFriendRequestList_user_2yZ5GC
      id
    }
    id
  }
}

fragment SentFriendRequestList_user_2yZ5GC on User {
  sentFriendRequests(last: 100, orderBy: createdAt_DESC, filter: $friendRequestFilter) {
    edges {
      node {
        id
        createdAt
        recipient {
          email
          id
        }
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

fragment ReceivedFriendRequestList_user_2yZ5GC on User {
  receivedFriendRequests(last: 100, orderBy: createdAt_DESC, filter: $friendRequestFilter) {
    edges {
      node {
        id
        status
        createdAt
        sender {
          email
          id
        }
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "userId",
    "type": "ID",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "friendRequestFilter",
    "type": "FriendRequestFilter",
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
    "kind": "Variable",
    "name": "friendRequestFilter",
    "variableName": "friendRequestFilter",
    "type": null
  }
],
v4 = [
  {
    "kind": "Variable",
    "name": "filter",
    "variableName": "friendRequestFilter",
    "type": "FriendRequestFilter"
  },
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
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "createdAt",
  "args": null,
  "storageKey": null
},
v7 = [
  v2,
  v5
],
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v10 = {
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
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "AddFriendQuery",
  "id": null,
  "text": "query AddFriendQuery(\n  $userId: ID\n  $friendRequestFilter: FriendRequestFilter\n) {\n  viewer {\n    User(id: $userId) {\n      email\n      ...SentFriendRequestList_user_2yZ5GC\n      ...ReceivedFriendRequestList_user_2yZ5GC\n      id\n    }\n    id\n  }\n}\n\nfragment SentFriendRequestList_user_2yZ5GC on User {\n  sentFriendRequests(last: 100, orderBy: createdAt_DESC, filter: $friendRequestFilter) {\n    edges {\n      node {\n        id\n        createdAt\n        recipient {\n          email\n          id\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment ReceivedFriendRequestList_user_2yZ5GC on User {\n  receivedFriendRequests(last: 100, orderBy: createdAt_DESC, filter: $friendRequestFilter) {\n    edges {\n      node {\n        id\n        status\n        createdAt\n        sender {\n          email\n          id\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AddFriendQuery",
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
                "name": "SentFriendRequestList_user",
                "args": v3
              },
              {
                "kind": "FragmentSpread",
                "name": "ReceivedFriendRequestList_user",
                "args": v3
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AddFriendQuery",
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
                "name": "sentFriendRequests",
                "storageKey": null,
                "args": v4,
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
                          v5,
                          v6,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "recipient",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": false,
                            "selections": v7
                          },
                          v8
                        ]
                      },
                      v9
                    ]
                  },
                  v10
                ]
              },
              {
                "kind": "LinkedHandle",
                "alias": null,
                "name": "sentFriendRequests",
                "args": v4,
                "handle": "connection",
                "key": "FriendRequestList_sentFriendRequests",
                "filters": []
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "receivedFriendRequests",
                "storageKey": null,
                "args": v4,
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
                          v5,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "status",
                            "args": null,
                            "storageKey": null
                          },
                          v6,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "sender",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": false,
                            "selections": v7
                          },
                          v8
                        ]
                      },
                      v9
                    ]
                  },
                  v10
                ]
              },
              {
                "kind": "LinkedHandle",
                "alias": null,
                "name": "receivedFriendRequests",
                "args": v4,
                "handle": "connection",
                "key": "FriendRequestList_receivedFriendRequests",
                "filters": []
              },
              v5
            ]
          },
          v5
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2c75824d001fea9e03b13cc3fb339be8';
module.exports = node;
