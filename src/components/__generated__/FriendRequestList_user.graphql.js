/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type FriendRequest_friendRequest$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FriendRequestList_user$ref: FragmentReference;
export type FriendRequestList_user = {|
  +receivedFriendRequests: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: {|
        +$fragmentRefs: FriendRequest_friendRequest$ref
      |}
    |}>
  |},
  +$refType: FriendRequestList_user$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "FriendRequestList_user",
  "type": "User",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "backward",
        "path": [
          "receivedFriendRequests"
        ]
      }
    ]
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "receivedFriendRequests",
      "name": "__FriendRequestList_receivedFriendRequests_connection",
      "storageKey": null,
      "args": null,
      "concreteType": "FriendRequestConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "FriendRequestEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "FriendRequest",
              "plural": false,
              "selections": [
                {
                  "kind": "FragmentSpread",
                  "name": "FriendRequest_friendRequest",
                  "args": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "__typename",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "cursor",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
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
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '2ccc6e5825fbd33ba37a68047bbf2ec9';
module.exports = node;
