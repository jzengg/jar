/**
 * @flow
 * @relayHash cbbfbbf4b17fe99250d9dd2fb004953c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ReceivedFriendRequestBadge_user$ref = any;
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
export type HeaderQueryVariables = {|
  id?: ?string,
  friendRequestFilter?: ?FriendRequestFilter,
|};
export type HeaderQueryResponse = {|
  +viewer: {|
    +id: string,
    +User: ?{|
      +email: string,
      +$fragmentRefs: ReceivedFriendRequestBadge_user$ref,
    |},
  |}
|};
export type HeaderQuery = {|
  variables: HeaderQueryVariables,
  response: HeaderQueryResponse,
|};
*/


/*
query HeaderQuery(
  $id: ID
  $friendRequestFilter: FriendRequestFilter
) {
  viewer {
    id
    User(id: $id) {
      email
      ...ReceivedFriendRequestBadge_user_2yZ5GC
      id
    }
  }
}

fragment ReceivedFriendRequestBadge_user_2yZ5GC on User {
  receivedFriendRequests(last: 100, orderBy: createdAt_DESC, filter: $friendRequestFilter) {
    edges {
      node {
        id
        status
        sender {
          id
          email
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
    "name": "id",
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
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID"
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
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
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "HeaderQuery",
  "id": null,
  "text": "query HeaderQuery(\n  $id: ID\n  $friendRequestFilter: FriendRequestFilter\n) {\n  viewer {\n    id\n    User(id: $id) {\n      email\n      ...ReceivedFriendRequestBadge_user_2yZ5GC\n      id\n    }\n  }\n}\n\nfragment ReceivedFriendRequestBadge_user_2yZ5GC on User {\n  receivedFriendRequests(last: 100, orderBy: createdAt_DESC, filter: $friendRequestFilter) {\n    edges {\n      node {\n        id\n        status\n        sender {\n          id\n          email\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "HeaderQuery",
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
          v1,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "User",
            "storageKey": null,
            "args": v2,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v3,
              {
                "kind": "FragmentSpread",
                "name": "ReceivedFriendRequestBadge_user",
                "args": [
                  {
                    "kind": "Variable",
                    "name": "friendRequestFilter",
                    "variableName": "friendRequestFilter",
                    "type": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HeaderQuery",
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
          v1,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "User",
            "storageKey": null,
            "args": v2,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v3,
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
                          v1,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "status",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "sender",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": false,
                            "selections": [
                              v1,
                              v3
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
                "args": v4,
                "handle": "connection",
                "key": "ReceivedFriendRequestBadge_receivedFriendRequests",
                "filters": []
              },
              v1
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f0392dfff8395d25888a9b1b9af1528c';
module.exports = node;
