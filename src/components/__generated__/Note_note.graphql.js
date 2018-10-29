/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Note_note$ref: FragmentReference;
export type Note_note = {|
  +id: string,
  +text: string,
  +createdAt: any,
  +jar: {|
    +id: string,
    +name: string,
    +owner: {|
      +email: string,
      +jars: ?{|
        +edges: ?$ReadOnlyArray<?{|
          +node: {|
            +id: string,
            +name: string,
          |}
        |}>
      |},
    |},
  |},
  +$refType: Note_note$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "Note_note",
  "type": "Note",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    v0,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "text",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "createdAt",
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
        v0,
        v1,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "owner",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "email",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "jars",
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
                        v0,
                        v1
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '051416c5d301afee375841320b17c35e';
module.exports = node;
