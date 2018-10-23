/**
 * @flow
 * @relayHash e1f1926704dbbabac4db7a8dce266c15
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AcceptFriendRequestMutationVariables = {|
  id: string
|};
export type AcceptFriendRequestMutationResponse = {|
  +acceptFriendRequest: ?{|
    +user1Id: string,
    +user2Id: string,
  |}
|};
export type AcceptFriendRequestMutation = {|
  variables: AcceptFriendRequestMutationVariables,
  response: AcceptFriendRequestMutationResponse,
|};
*/


/*
mutation AcceptFriendRequestMutation(
  $id: ID!
) {
  acceptFriendRequest(id: $id) {
    user1Id
    user2Id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "acceptFriendRequest",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id",
        "type": "ID!"
      }
    ],
    "concreteType": "acceptFriendRequestPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "user1Id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "user2Id",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "AcceptFriendRequestMutation",
  "id": null,
  "text": "mutation AcceptFriendRequestMutation(\n  $id: ID!\n) {\n  acceptFriendRequest(id: $id) {\n    user1Id\n    user2Id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AcceptFriendRequestMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "AcceptFriendRequestMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b5430d5af2975929d0fa3622c924537a';
module.exports = node;
