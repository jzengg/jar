/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Note_note$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type NoteList_viewer$ref: FragmentReference;
export type NoteList_viewer = {|
  +allNotes: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: {|
        +$fragmentRefs: Note_note$ref
      |}
    |}>
  |},
  +$refType: NoteList_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "NoteList_viewer",
  "type": "Viewer",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "backward",
        "path": [
          "allNotes"
        ]
      }
    ]
  },
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "noteFilter",
      "type": "NoteFilter",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "orderBy",
      "type": "NoteOrderBy",
      "defaultValue": "createdAt_DESC"
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "allNotes",
      "name": "__NoteList_allNotes_connection",
      "storageKey": null,
      "args": null,
      "concreteType": "NoteConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "NoteEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "Note",
              "plural": false,
              "selections": [
                {
                  "kind": "FragmentSpread",
                  "name": "Note_note",
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
(node/*: any*/).hash = '1ed5433c7a8cddf315cc7f2f25872f0c';
module.exports = node;