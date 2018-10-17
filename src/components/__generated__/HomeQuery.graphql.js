/**
 * @flow
 * @relayHash 39e84dfb2f3885c59190ab852b9b6e10
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type JarList_user$ref = any;
export type HomeQueryVariables = {|
  userId?: ?string
|};
export type HomeQueryResponse = {|
  +viewer: {|
    +User: ?{|
      +email: string,
      +$fragmentRefs: JarList_user$ref,
    |}
  |}
|};
export type HomeQuery = {|
  variables: HomeQueryVariables,
  response: HomeQueryResponse,
|};
*/


/*
query HomeQuery(
  $userId: ID
) {
  viewer {
    User(id: $userId) {
      email
      ...JarList_user
      id
    }
    id
  }
}

fragment JarList_user on User {
  jars(last: 100, orderBy: createdAt_DESC) {
    edges {
      node {
        ...Jar_jar
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

fragment Jar_jar on Jar {
  id
  name
  ...NoteList_jar
}

fragment NoteList_jar on Jar {
  notes(last: 100, orderBy: createdAt_DESC) {
    edges {
      node {
        ...Note_note
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

fragment Note_note on Note {
  id
  text
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
v3 = {
  "kind": "Literal",
  "name": "last",
  "value": 100,
  "type": "Int"
},
v4 = [
  v3,
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": "createdAt_DESC",
    "type": "JarOrderBy"
  }
],
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v6 = [
  v3,
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": "createdAt_DESC",
    "type": "NoteOrderBy"
  }
],
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v9 = {
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
  "name": "HomeQuery",
  "id": null,
  "text": "query HomeQuery(\n  $userId: ID\n) {\n  viewer {\n    User(id: $userId) {\n      email\n      ...JarList_user\n      id\n    }\n    id\n  }\n}\n\nfragment JarList_user on User {\n  jars(last: 100, orderBy: createdAt_DESC) {\n    edges {\n      node {\n        ...Jar_jar\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment Jar_jar on Jar {\n  id\n  name\n  ...NoteList_jar\n}\n\nfragment NoteList_jar on Jar {\n  notes(last: 100, orderBy: createdAt_DESC) {\n    edges {\n      node {\n        ...Note_note\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment Note_note on Note {\n  id\n  text\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "HomeQuery",
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
                "name": "JarList_user",
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
    "name": "HomeQuery",
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
                "name": "jars",
                "storageKey": "jars(last:100,orderBy:\"createdAt_DESC\")",
                "args": v4,
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
                          v5,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "name",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "notes",
                            "storageKey": "notes(last:100,orderBy:\"createdAt_DESC\")",
                            "args": v6,
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
                                      v5,
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "text",
                                        "args": null,
                                        "storageKey": null
                                      },
                                      v7
                                    ]
                                  },
                                  v8
                                ]
                              },
                              v9
                            ]
                          },
                          {
                            "kind": "LinkedHandle",
                            "alias": null,
                            "name": "notes",
                            "args": v6,
                            "handle": "connection",
                            "key": "NoteList_notes",
                            "filters": []
                          },
                          v7
                        ]
                      },
                      v8
                    ]
                  },
                  v9
                ]
              },
              {
                "kind": "LinkedHandle",
                "alias": null,
                "name": "jars",
                "args": v4,
                "handle": "connection",
                "key": "JarList_jars",
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
(node/*: any*/).hash = '39a6b844f6cb64087cf0698d0d65bac1';
module.exports = node;
