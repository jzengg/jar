/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CreateFriendRequest_viewer$ref: FragmentReference;
export type CreateFriendRequest_viewer = {|
  +loggedInUser: ?{|
    +id: string
  |},
  +$refType: CreateFriendRequest_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "CreateFriendRequest_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
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
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '30a25525002f8b1b63f118758887e5b6';
module.exports = node;
