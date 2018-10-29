/**
 * @flow
 * @relayHash 8b881fb0a7679bbc72a0a09518ab5981
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteNoteInput = {
  id: string,
  clientMutationId: string,
};
export type DeleteNoteMutationVariables = {|
  input: DeleteNoteInput
|};
export type DeleteNoteMutationResponse = {|
  +deleteNote: ?{|
    +viewer: {|
      +id: string
    |},
    +deletedId: ?string,
  |}
|};
export type DeleteNoteMutation = {|
  variables: DeleteNoteMutationVariables,
  response: DeleteNoteMutationResponse,
|};
*/


/*
mutation DeleteNoteMutation(
  $input: DeleteNoteInput!
) {
  deleteNote(input: $input) {
    viewer {
      id
    }
    deletedId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteNoteInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteNote",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "DeleteNoteInput!"
      }
    ],
    "concreteType": "DeleteNotePayload",
    "plural": false,
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
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "deletedId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "DeleteNoteMutation",
  "id": null,
  "text": "mutation DeleteNoteMutation(\n  $input: DeleteNoteInput!\n) {\n  deleteNote(input: $input) {\n    viewer {\n      id\n    }\n    deletedId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteNoteMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteNoteMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '591dbf65b0fc31e23925889829044e5d';
module.exports = node;
