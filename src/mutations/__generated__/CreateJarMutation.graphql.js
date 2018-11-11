/**
 * @flow
 * @relayHash a4b45afd3f874c0e6b04a5251edd09b2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FriendRequestStatus = "ACCEPTED" | "IGNORED" | "PENDING" | "%future added value";
export type CreateJarInput = {
  description?: ?string,
  name: string,
  ownerId?: ?string,
  owner?: ?JarownerUser,
  notesIds?: ?$ReadOnlyArray<string>,
  notes?: ?$ReadOnlyArray<JarnotesNote>,
  clientMutationId: string,
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
export type CreateJarMutationVariables = {|
  input: CreateJarInput
|};
export type CreateJarMutationResponse = {|
  +createJar: ?{|
    +viewer: {|
      +id: string
    |},
    +jar: ?{|
      +id: string,
      +name: string,
      +owner: {|
        +id: string
      |},
    |},
  |}
|};
export type CreateJarMutation = {|
  variables: CreateJarMutationVariables,
  response: CreateJarMutationResponse,
|};
*/


/*
mutation CreateJarMutation(
  $input: CreateJarInput!
) {
  createJar(input: $input) {
    viewer {
      id
    }
    jar {
      id
      name
      owner {
        id
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
    "type": "CreateJarInput!",
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
  v1
],
v3 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createJar",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreateJarInput!"
      }
    ],
    "concreteType": "CreateJarPayload",
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
        "selections": v2
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
            "selections": v2
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "CreateJarMutation",
  "id": null,
  "text": "mutation CreateJarMutation(\n  $input: CreateJarInput!\n) {\n  createJar(input: $input) {\n    viewer {\n      id\n    }\n    jar {\n      id\n      name\n      owner {\n        id\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateJarMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v3
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateJarMutation",
    "argumentDefinitions": v0,
    "selections": v3
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6cecbc50407df44b65e3ad9b1f6c35b7';
module.exports = node;
