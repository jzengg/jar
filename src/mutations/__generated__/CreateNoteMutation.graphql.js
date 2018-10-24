/**
 * @flow
 * @relayHash 3734482973ff498d5283ce92da318862
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FriendRequestStatus = "ACCEPTED" | "IGNORED" | "PENDING" | "%future added value";
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
  receivedFriendRequestsIds?: ?$ReadOnlyArray<string>,
  receivedFriendRequests?: ?$ReadOnlyArray<UserreceivedFriendRequestsFriendRequest>,
  sentFriendRequestsIds?: ?$ReadOnlyArray<string>,
  sentFriendRequests?: ?$ReadOnlyArray<UsersentFriendRequestsFriendRequest>,
};
export type UserfriendsUser = {
  email: string,
  password: string,
  friendsIds?: ?$ReadOnlyArray<string>,
  friends?: ?$ReadOnlyArray<UserfriendsUser>,
  jarsIds?: ?$ReadOnlyArray<string>,
  jars?: ?$ReadOnlyArray<UserjarsJar>,
  receivedFriendRequestsIds?: ?$ReadOnlyArray<string>,
  receivedFriendRequests?: ?$ReadOnlyArray<UserreceivedFriendRequestsFriendRequest>,
  sentFriendRequestsIds?: ?$ReadOnlyArray<string>,
  sentFriendRequests?: ?$ReadOnlyArray<UsersentFriendRequestsFriendRequest>,
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
export type UserreceivedFriendRequestsFriendRequest = {
  status?: ?FriendRequestStatus,
  senderId?: ?string,
  sender?: ?FriendRequestsenderUser,
};
export type FriendRequestsenderUser = {
  email: string,
  password: string,
  friendsIds?: ?$ReadOnlyArray<string>,
  friends?: ?$ReadOnlyArray<UserfriendsUser>,
  jarsIds?: ?$ReadOnlyArray<string>,
  jars?: ?$ReadOnlyArray<UserjarsJar>,
  receivedFriendRequestsIds?: ?$ReadOnlyArray<string>,
  receivedFriendRequests?: ?$ReadOnlyArray<UserreceivedFriendRequestsFriendRequest>,
  sentFriendRequestsIds?: ?$ReadOnlyArray<string>,
  sentFriendRequests?: ?$ReadOnlyArray<UsersentFriendRequestsFriendRequest>,
};
export type UsersentFriendRequestsFriendRequest = {
  status?: ?FriendRequestStatus,
  recipientId?: ?string,
  recipient?: ?FriendRequestrecipientUser,
};
export type FriendRequestrecipientUser = {
  email: string,
  password: string,
  friendsIds?: ?$ReadOnlyArray<string>,
  friends?: ?$ReadOnlyArray<UserfriendsUser>,
  jarsIds?: ?$ReadOnlyArray<string>,
  jars?: ?$ReadOnlyArray<UserjarsJar>,
  receivedFriendRequestsIds?: ?$ReadOnlyArray<string>,
  receivedFriendRequests?: ?$ReadOnlyArray<UserreceivedFriendRequestsFriendRequest>,
  sentFriendRequestsIds?: ?$ReadOnlyArray<string>,
  sentFriendRequests?: ?$ReadOnlyArray<UsersentFriendRequestsFriendRequest>,
};
export type CreateNoteMutationVariables = {|
  input: CreateNoteInput
|};
export type CreateNoteMutationResponse = {|
  +createNote: ?{|
    +viewer: {|
      +id: string
    |},
    +note: ?{|
      +id: string,
      +createdAt: any,
      +text: string,
      +jar: {|
        +id: string,
        +name: string,
        +owner: {|
          +id: string,
          +email: string,
        |},
      |},
    |},
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
    viewer {
      id
    }
    note {
      id
      createdAt
      text
      jar {
        id
        name
        owner {
          id
          email
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
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          v1
        ]
      },
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
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "owner",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  v1,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "email",
                    "args": null,
                    "storageKey": null
                  }
                ]
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
  "text": "mutation CreateNoteMutation(\n  $input: CreateNoteInput!\n) {\n  createNote(input: $input) {\n    viewer {\n      id\n    }\n    note {\n      id\n      createdAt\n      text\n      jar {\n        id\n        name\n        owner {\n          id\n          email\n        }\n      }\n    }\n  }\n}\n",
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
(node/*: any*/).hash = 'f8520f455b62802313b8249760b1ba07';
module.exports = node;
