/**
 * @flow
 * @relayHash ce5c4ebe29665000f35cd6cdf8faa3f7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FriendRequestStatus = "ACCEPTED" | "IGNORED" | "PENDING" | "%future added value";
export type UpdateFriendRequestInput = {
  id: string,
  status?: ?FriendRequestStatus,
  recipientId?: ?string,
  recipient?: ?FriendRequestrecipientUser,
  senderId?: ?string,
  sender?: ?FriendRequestsenderUser,
  clientMutationId: string,
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
export type IgnoreFriendRequestMutationVariables = {|
  input: UpdateFriendRequestInput
|};
export type IgnoreFriendRequestMutationResponse = {|
  +updateFriendRequest: ?{|
    +friendRequest: ?{|
      +id: string,
      +status: FriendRequestStatus,
    |},
    +recipient: ?{|
      +id: string,
      +email: string,
    |},
    +sender: ?{|
      +id: string,
      +email: string,
    |},
  |}
|};
export type IgnoreFriendRequestMutation = {|
  variables: IgnoreFriendRequestMutationVariables,
  response: IgnoreFriendRequestMutationResponse,
|};
*/


/*
mutation IgnoreFriendRequestMutation(
  $input: UpdateFriendRequestInput!
) {
  updateFriendRequest(input: $input) {
    friendRequest {
      id
      status
    }
    recipient {
      id
      email
    }
    sender {
      id
      email
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateFriendRequestInput!",
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
  v1,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "email",
    "args": null,
    "storageKey": null
  }
],
v3 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateFriendRequest",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "UpdateFriendRequestInput!"
      }
    ],
    "concreteType": "UpdateFriendRequestPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "friendRequest",
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
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "recipient",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": v2
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "sender",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": v2
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "IgnoreFriendRequestMutation",
  "id": null,
  "text": "mutation IgnoreFriendRequestMutation(\n  $input: UpdateFriendRequestInput!\n) {\n  updateFriendRequest(input: $input) {\n    friendRequest {\n      id\n      status\n    }\n    recipient {\n      id\n      email\n    }\n    sender {\n      id\n      email\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "IgnoreFriendRequestMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v3
  },
  "operation": {
    "kind": "Operation",
    "name": "IgnoreFriendRequestMutation",
    "argumentDefinitions": v0,
    "selections": v3
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5c75cbfe3e8f51f892a22d708858afd0';
module.exports = node;
