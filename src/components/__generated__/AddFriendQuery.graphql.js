/**
 * @flow
 * @relayHash db1a9355a1073dc5505e7f886ab3ad1f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CreateFriendRequest_viewer$ref = any;
export type AddFriendQueryVariables = {||};
export type AddFriendQueryResponse = {|
  +viewer: {|
    +$fragmentRefs: CreateFriendRequest_viewer$ref
  |}
|};
export type AddFriendQuery = {|
  variables: AddFriendQueryVariables,
  response: AddFriendQueryResponse,
|};
*/


/*
query AddFriendQuery {
  viewer {
    ...CreateFriendRequest_viewer
    id
  }
}

fragment CreateFriendRequest_viewer on Viewer {
  loggedInUser {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "AddFriendQuery",
  "id": null,
  "text": "query AddFriendQuery {\n  viewer {\n    ...CreateFriendRequest_viewer\n    id\n  }\n}\n\nfragment CreateFriendRequest_viewer on Viewer {\n  loggedInUser {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AddFriendQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
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
            "kind": "FragmentSpread",
            "name": "CreateFriendRequest_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AddFriendQuery",
    "argumentDefinitions": [],
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
            "name": "loggedInUser",
            "storageKey": null,
            "args": null,
            "concreteType": "LoggedInUserPayload",
            "plural": false,
            "selections": [
              v0
            ]
          },
          v0
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd7572daff5e4577fd6a80656d2ec239e';
module.exports = node;
