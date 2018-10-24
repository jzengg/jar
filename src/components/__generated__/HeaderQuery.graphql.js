/**
 * @flow
 * @relayHash aa4f93317c0fe06afa51ba8bbe2bb06f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type HeaderQueryVariables = {|
  id?: ?string
|};
export type HeaderQueryResponse = {|
  +viewer: {|
    +User: ?{|
      +email: string
    |}
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
) {
  viewer {
    User(id: $id) {
      email
      id
    }
    id
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
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
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
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "HeaderQuery",
  "id": null,
  "text": "query HeaderQuery(\n  $id: ID\n) {\n  viewer {\n    User(id: $id) {\n      email\n      id\n    }\n    id\n  }\n}\n",
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "User",
            "storageKey": null,
            "args": v1,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v2
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
              v3
            ]
          },
          v3
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '23526b98f60aad907fea4f7cadc373e4';
module.exports = node;
