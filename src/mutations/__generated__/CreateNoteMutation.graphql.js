/**
 * @flow
 * @relayHash 903687ccf0625f27f408e36da85c4eaa
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateNoteInput = {
  text: string,
  jarId?: ?string,
  jar?: ?NotejarJar,
  clientMutationId: string,
};
export type NotejarJar = {
  description?: ?string,
  name: string,
  ownerId?: ?string,
  owner?: ?JarownerUser,
  notesIds?: ?$ReadOnlyArray<string>,
  notes?: ?$ReadOnlyArray<JarnotesNote>,
};
export type JarownerUser = {
  email: string,
  password: string,
  friendsIds?: ?$ReadOnlyArray<string>,
  friends?: ?$ReadOnlyArray<UserfriendsUser>,
  jarsIds?: ?$ReadOnlyArray<string>,
  jars?: ?$ReadOnlyArray<UserjarsJar>,
};
export type UserfriendsUser = {
  email: string,
  password: string,
  friendsIds?: ?$ReadOnlyArray<string>,
  friends?: ?$ReadOnlyArray<UserfriendsUser>,
  jarsIds?: ?$ReadOnlyArray<string>,
  jars?: ?$ReadOnlyArray<UserjarsJar>,
};
export type UserjarsJar = {
  description?: ?string,
  name: string,
  notesIds?: ?$ReadOnlyArray<string>,
  notes?: ?$ReadOnlyArray<JarnotesNote>,
};
export type JarnotesNote = {
  text: string
};
export type CreateNoteMutationVariables = {|
  input: CreateNoteInput
|};
export type CreateNoteMutationResponse = {|
  +createNote: ?{|
    +note: ?{|
      +id: string,
      +createdAt: any,
      +text: string,
      +jar: {|
        +id: string,
        +name: string,
      |},
    |}
  |}
|};
export type CreateNoteMutation = {|
  variables: CreateNoteMutationVariables,
  response: CreateNoteMutationResponse,
|};
*/


/*
mutation CreateNoteMutation(
  $input: CreateNoteInput!
) {
  createNote(input: $input) {
    note {
      id
      createdAt
      text
      jar {
        id
        name
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateNoteInput!",
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
    "kind": "LinkedField",
    "alias": null,
    "name": "createNote",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreateNoteInput!"
      }
    ],
    "concreteType": "CreateNotePayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "note",
        "storageKey": null,
        "args": null,
        "concreteType": "Note",
        "plural": false,
        "selections": [
          v1,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "createdAt",
            "args": null,
            "storageKey": null
          },
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
              v1,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "CreateNoteMutation",
  "id": null,
  "text": "mutation CreateNoteMutation(\n  $input: CreateNoteInput!\n) {\n  createNote(input: $input) {\n    note {\n      id\n      createdAt\n      text\n      jar {\n        id\n        name\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateNoteMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v2
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateNoteMutation",
    "argumentDefinitions": v0,
    "selections": v2
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '051c39da2424c606776ef27cb3e553cd';
module.exports = node;
