/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type NoteList_jar$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Jar_jar$ref: FragmentReference;
export type Jar_jar = {|
  +id: string,
  +name: string,
  +$fragmentRefs: NoteList_jar$ref,
  +$refType: Jar_jar$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Jar_jar",
  "type": "Jar",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "NoteList_jar",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '69c28fd5c89efa66907049e19339af3e';
module.exports = node;
