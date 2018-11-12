/**
 * @flow
 * @relayHash 0ddd311e78597b30357b82b6511938df
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type EditableNote_note$ref = any;
type HistoryNav_user$ref = any;
export type FriendRequestStatus = "ACCEPTED" | "IGNORED" | "PENDING" | "%future added value";
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
export type HistoryQueryVariables = {|
  userId?: ?string,
  noteFilter?: ?NoteFilter,
|};
export type HistoryQueryResponse = {|
  +viewer: {|
    +User: ?{|
      +$fragmentRefs: HistoryNav_user$ref
    |},
    +getRandomNoteDay: ?{|
      +day: any
    |},
    +allNotes: {|
      +edges: ?$ReadOnlyArray<?{|
        +node: {|
          +createdAt: any,
          +$fragmentRefs: EditableNote_note$ref,
        |}
      |}>
    |},
  |}
|};
export type HistoryQuery = {|
  variables: HistoryQueryVariables,
  response: HistoryQueryResponse,
|};
*/


/*
query HistoryQuery(
  $userId: ID
  $noteFilter: NoteFilter
) {
  viewer {
    User(id: $userId) {
      ...HistoryNav_user
      id
    }
    getRandomNoteDay {
      day
    }
    allNotes(last: 100, orderBy: createdAt_DESC, filter: $noteFilter) {
      edges {
        node {
          createdAt
          ...EditableNote_note
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
    id
  }
}

fragment HistoryNav_user on User {
  jars(last: 100, orderBy: createdAt_DESC) {
    edges {
      node {
        id
        name
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

fragment EditableNote_note on Note {
  id
  text
  createdAt
  jar {
    id
    name
    owner {
      id
      email
      jars {
        edges {
          node {
            id
            name
          }
        }
      }
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
    "name": "noteFilter",
    "type": "NoteFilter",
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
  "kind": "LinkedField",
  "alias": null,
  "name": "getRandomNoteDay",
  "storageKey": null,
  "args": null,
  "concreteType": "getRandomNoteDayPayload",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "day",
      "args": null,
      "storageKey": null
    }
  ]
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "createdAt",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v6 = {
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
},
v7 = {
  "kind": "Literal",
  "name": "last",
  "value": 100,
  "type": "Int"
},
v8 = [
  v7,
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": "createdAt_DESC",
    "type": "JarOrderBy"
  }
],
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v11 = [
  {
    "kind": "Variable",
    "name": "filter",
    "variableName": "noteFilter",
    "type": "NoteFilter"
  },
  v7,
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": "createdAt_DESC",
    "type": "NoteOrderBy"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "HistoryQuery",
  "id": null,
  "text": "query HistoryQuery(\n  $userId: ID\n  $noteFilter: NoteFilter\n) {\n  viewer {\n    User(id: $userId) {\n      ...HistoryNav_user\n      id\n    }\n    getRandomNoteDay {\n      day\n    }\n    allNotes(last: 100, orderBy: createdAt_DESC, filter: $noteFilter) {\n      edges {\n        node {\n          createdAt\n          ...EditableNote_note\n          id\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        hasPreviousPage\n        startCursor\n      }\n    }\n    id\n  }\n}\n\nfragment HistoryNav_user on User {\n  jars(last: 100, orderBy: createdAt_DESC) {\n    edges {\n      node {\n        id\n        name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment EditableNote_note on Note {\n  id\n  text\n  createdAt\n  jar {\n    id\n    name\n    owner {\n      id\n      email\n      jars {\n        edges {\n          node {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "backward",
        "path": [
          "viewer",
          "allNotes"
        ]
      }
    ]
  },
  "fragment": {
    "kind": "Fragment",
    "name": "HistoryQuery",
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
              {
                "kind": "FragmentSpread",
                "name": "HistoryNav_user",
                "args": null
              }
            ]
          },
          v2,
          {
            "kind": "LinkedField",
            "alias": "allNotes",
            "name": "__NoteList_allNotes_connection",
            "storageKey": null,
            "args": null,
            "concreteType": "NoteConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "NoteEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Note",
                    "plural": false,
                    "selections": [
                      v3,
                      {
                        "kind": "FragmentSpread",
                        "name": "EditableNote_note",
                        "args": null
                      },
                      v4
                    ]
                  },
                  v5
                ]
              },
              v6
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HistoryQuery",
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
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "jars",
                "storageKey": "jars(last:100,orderBy:\"createdAt_DESC\")",
                "args": v8,
                "concreteType": "JarConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "JarEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Jar",
                        "plural": false,
                        "selections": [
                          v9,
                          v10,
                          v4
                        ]
                      },
                      v5
                    ]
                  },
                  v6
                ]
              },
              {
                "kind": "LinkedHandle",
                "alias": null,
                "name": "jars",
                "args": v8,
                "handle": "connection",
                "key": "HistoryNav_jars",
                "filters": []
              },
              v9
            ]
          },
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "allNotes",
            "storageKey": null,
            "args": v11,
            "concreteType": "NoteConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "NoteEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Note",
                    "plural": false,
                    "selections": [
                      v3,
                      v9,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "text",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "jar",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Jar",
                        "plural": false,
                        "selections": [
                          v9,
                          v10,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "owner",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": false,
                            "selections": [
                              v9,
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "email",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "jars",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "JarConnection",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "edges",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "JarEdge",
                                    "plural": true,
                                    "selections": [
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "node",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": "Jar",
                                        "plural": false,
                                        "selections": [
                                          v9,
                                          v10
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      v4
                    ]
                  },
                  v5
                ]
              },
              v6
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "allNotes",
            "args": v11,
            "handle": "connection",
            "key": "NoteList_allNotes",
            "filters": []
          },
          v9
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bebc728951ba9c09816a7d8268d06e99';
module.exports = node;
