/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type EditableNote_note$ref: FragmentReference;
export type EditableNote_note = {|
  +id: string,
  +text: string,
  +createdAt: any,
  +jar: {|
    +id: string,
    +name: string,
    +owner: {|
      +id: string,
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
  +$refType: EditableNote_note$ref,
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
  "name": "EditableNote_note",
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
            v0,
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
(node/*: any*/).hash = '22258be7887964ff1ce0a68f66908a9c';
module.exports = node;
