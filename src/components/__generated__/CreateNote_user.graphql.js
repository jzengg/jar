/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type JarList_user$ref = any;
type Jar_jar$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type CreateNote_user$ref: FragmentReference;
export type CreateNote_user = {|
  +id: string,
  +jars: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: {|
        +$fragmentRefs: Jar_jar$ref
      |}
    |}>
  |},
  +$fragmentRefs: JarList_user$ref,
  +$refType: CreateNote_user$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "CreateNote_user",
  "type": "User",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "backward",
        "path": [
          "jars"
        ]
      }
    ]
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "JarList_user",
      "args": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": "jars",
      "name": "__CreateNote_jars_connection",
      "storageKey": null,
      "args": null,
      "concreteType": "JarConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "JarEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "Jar",
              "plural": false,
              "selections": [
                {
                  "kind": "FragmentSpread",
                  "name": "Jar_jar",
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
(node/*: any*/).hash = '426ce8520072cfc2933cdc47c3613c43';
module.exports = node;
