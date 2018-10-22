/**
 * @flow
 * @relayHash e4c9936c6a7987b9a12fed4694c62145
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateFriendRequestMutationVariables = {|
  email: string,
  senderId: string,
|};
export type CreateFriendRequestMutationResponse = {|
  +addFriendByEmail: ?{|
    +id: string
  |}
|};
export type CreateFriendRequestMutation = {|
  variables: CreateFriendRequestMutationVariables,
  response: CreateFriendRequestMutationResponse,
|};
*/


/*
mutation CreateFriendRequestMutation(
  $email: String!
  $senderId: ID!
) {
  addFriendByEmail(email: $email, senderId: $senderId) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "email",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "senderId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addFriendByEmail",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email",
        "type": "String!"
      },
      {
        "kind": "Variable",
        "name": "senderId",
        "variableName": "senderId",
        "type": "ID!"
      }
    ],
    "concreteType": "AddFriendByEmailPayload",
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
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "CreateFriendRequestMutation",
  "id": null,
  "text": "mutation CreateFriendRequestMutation(\n  $email: String!\n  $senderId: ID!\n) {\n  addFriendByEmail(email: $email, senderId: $senderId) {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateFriendRequestMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateFriendRequestMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0e44d741a465389c1bd69333f814c64c';
module.exports = node;
