/**
 * @flow
 * @relayHash abb3b6fc2abd1bd1bdf2cc11e5d58b0a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FriendRequestStatus = "ACCEPTED" | "IGNORED" | "PENDING" | "%future added value";
export type _ModelMutationType = "CREATED" | "DELETED" | "UPDATED" | "%future added value";
export type NoteSubscriptionFilter = {
  AND?: ?$ReadOnlyArray<NoteSubscriptionFilter>,
  OR?: ?$ReadOnlyArray<NoteSubscriptionFilter>,
  mutation_in?: ?$ReadOnlyArray<_ModelMutationType>,
  updatedFields_contains?: ?string,
  updatedFields_contains_every?: ?$ReadOnlyArray<string>,
  updatedFields_contains_some?: ?$ReadOnlyArray<string>,
  node?: ?NoteSubscriptionFilterNode,
};
export type NoteSubscriptionFilterNode = {
  createdAt?: ?any,
  createdAt_not?: ?any,
  createdAt_in?: ?$ReadOnlyArray<any>,
  createdAt_not_in?: ?$ReadOnlyArray<any>,
  createdAt_lt?: ?any,
  createdAt_lte?: ?any,
  createdAt_gt?: ?any,
  createdAt_gte?: ?any,
  id?: ?string,
  id_not?: ?string,
  id_in?: ?$ReadOnlyArray<string>,
  id_not_in?: ?$ReadOnlyArray<string>,
  id_lt?: ?string,
  id_lte?: ?string,
  id_gt?: ?string,
  id_gte?: ?string,
  id_contains?: ?string,
  id_not_contains?: ?string,
  id_starts_with?: ?string,
  id_not_starts_with?: ?string,
  id_ends_with?: ?string,
  id_not_ends_with?: ?string,
  text?: ?string,
  text_not?: ?string,
  text_in?: ?$ReadOnlyArray<string>,
  text_not_in?: ?$ReadOnlyArray<string>,
  text_lt?: ?string,
  text_lte?: ?string,
  text_gt?: ?string,
  text_gte?: ?string,
  text_contains?: ?string,
  text_not_contains?: ?string,
  text_starts_with?: ?string,
  text_not_starts_with?: ?string,
  text_ends_with?: ?string,
  text_not_ends_with?: ?string,
  updatedAt?: ?any,
  updatedAt_not?: ?any,
  updatedAt_in?: ?$ReadOnlyArray<any>,
  updatedAt_not_in?: ?$ReadOnlyArray<any>,
  updatedAt_lt?: ?any,
  updatedAt_lte?: ?any,
  updatedAt_gt?: ?any,
  updatedAt_gte?: ?any,
  jar?: ?JarFilter,
};
export type JarFilter = {
  AND?: ?$ReadOnlyArray<JarFilter>,
  OR?: ?$ReadOnlyArray<JarFilter>,
  createdAt?: ?any,
  createdAt_not?: ?any,
  createdAt_in?: ?$ReadOnlyArray<any>,
  createdAt_not_in?: ?$ReadOnlyArray<any>,
  createdAt_lt?: ?any,
  createdAt_lte?: ?any,
  createdAt_gt?: ?any,
  createdAt_gte?: ?any,
  description?: ?string,
  description_not?: ?string,
  description_in?: ?$ReadOnlyArray<string>,
  description_not_in?: ?$ReadOnlyArray<string>,
  description_lt?: ?string,
  description_lte?: ?string,
  description_gt?: ?string,
  description_gte?: ?string,
  description_contains?: ?string,
  description_not_contains?: ?string,
  description_starts_with?: ?string,
  description_not_starts_with?: ?string,
  description_ends_with?: ?string,
  description_not_ends_with?: ?string,
  id?: ?string,
  id_not?: ?string,
  id_in?: ?$ReadOnlyArray<string>,
  id_not_in?: ?$ReadOnlyArray<string>,
  id_lt?: ?string,
  id_lte?: ?string,
  id_gt?: ?string,
  id_gte?: ?string,
  id_contains?: ?string,
  id_not_contains?: ?string,
  id_starts_with?: ?string,
  id_not_starts_with?: ?string,
  id_ends_with?: ?string,
  id_not_ends_with?: ?string,
  name?: ?string,
  name_not?: ?string,
  name_in?: ?$ReadOnlyArray<string>,
  name_not_in?: ?$ReadOnlyArray<string>,
  name_lt?: ?string,
  name_lte?: ?string,
  name_gt?: ?string,
  name_gte?: ?string,
  name_contains?: ?string,
  name_not_contains?: ?string,
  name_starts_with?: ?string,
  name_not_starts_with?: ?string,
  name_ends_with?: ?string,
  name_not_ends_with?: ?string,
  updatedAt?: ?any,
  updatedAt_not?: ?any,
  updatedAt_in?: ?$ReadOnlyArray<any>,
  updatedAt_not_in?: ?$ReadOnlyArray<any>,
  updatedAt_lt?: ?any,
  updatedAt_lte?: ?any,
  updatedAt_gt?: ?any,
  updatedAt_gte?: ?any,
  notes_every?: ?NoteFilter,
  notes_some?: ?NoteFilter,
  notes_none?: ?NoteFilter,
  owner?: ?UserFilter,
};
export type NoteFilter = {
  AND?: ?$ReadOnlyArray<NoteFilter>,
  OR?: ?$ReadOnlyArray<NoteFilter>,
  createdAt?: ?any,
  createdAt_not?: ?any,
  createdAt_in?: ?$ReadOnlyArray<any>,
  createdAt_not_in?: ?$ReadOnlyArray<any>,
  createdAt_lt?: ?any,
  createdAt_lte?: ?any,
  createdAt_gt?: ?any,
  createdAt_gte?: ?any,
  id?: ?string,
  id_not?: ?string,
  id_in?: ?$ReadOnlyArray<string>,
  id_not_in?: ?$ReadOnlyArray<string>,
  id_lt?: ?string,
  id_lte?: ?string,
  id_gt?: ?string,
  id_gte?: ?string,
  id_contains?: ?string,
  id_not_contains?: ?string,
  id_starts_with?: ?string,
  id_not_starts_with?: ?string,
  id_ends_with?: ?string,
  id_not_ends_with?: ?string,
  text?: ?string,
  text_not?: ?string,
  text_in?: ?$ReadOnlyArray<string>,
  text_not_in?: ?$ReadOnlyArray<string>,
  text_lt?: ?string,
  text_lte?: ?string,
  text_gt?: ?string,
  text_gte?: ?string,
  text_contains?: ?string,
  text_not_contains?: ?string,
  text_starts_with?: ?string,
  text_not_starts_with?: ?string,
  text_ends_with?: ?string,
  text_not_ends_with?: ?string,
  updatedAt?: ?any,
  updatedAt_not?: ?any,
  updatedAt_in?: ?$ReadOnlyArray<any>,
  updatedAt_not_in?: ?$ReadOnlyArray<any>,
  updatedAt_lt?: ?any,
  updatedAt_lte?: ?any,
  updatedAt_gt?: ?any,
  updatedAt_gte?: ?any,
  jar?: ?JarFilter,
};
export type UserFilter = {
  AND?: ?$ReadOnlyArray<UserFilter>,
  OR?: ?$ReadOnlyArray<UserFilter>,
  createdAt?: ?any,
  createdAt_not?: ?any,
  createdAt_in?: ?$ReadOnlyArray<any>,
  createdAt_not_in?: ?$ReadOnlyArray<any>,
  createdAt_lt?: ?any,
  createdAt_lte?: ?any,
  createdAt_gt?: ?any,
  createdAt_gte?: ?any,
  email?: ?string,
  email_not?: ?string,
  email_in?: ?$ReadOnlyArray<string>,
  email_not_in?: ?$ReadOnlyArray<string>,
  email_lt?: ?string,
  email_lte?: ?string,
  email_gt?: ?string,
  email_gte?: ?string,
  email_contains?: ?string,
  email_not_contains?: ?string,
  email_starts_with?: ?string,
  email_not_starts_with?: ?string,
  email_ends_with?: ?string,
  email_not_ends_with?: ?string,
  id?: ?string,
  id_not?: ?string,
  id_in?: ?$ReadOnlyArray<string>,
  id_not_in?: ?$ReadOnlyArray<string>,
  id_lt?: ?string,
  id_lte?: ?string,
  id_gt?: ?string,
  id_gte?: ?string,
  id_contains?: ?string,
  id_not_contains?: ?string,
  id_starts_with?: ?string,
  id_not_starts_with?: ?string,
  id_ends_with?: ?string,
  id_not_ends_with?: ?string,
  password?: ?string,
  password_not?: ?string,
  password_in?: ?$ReadOnlyArray<string>,
  password_not_in?: ?$ReadOnlyArray<string>,
  password_lt?: ?string,
  password_lte?: ?string,
  password_gt?: ?string,
  password_gte?: ?string,
  password_contains?: ?string,
  password_not_contains?: ?string,
  password_starts_with?: ?string,
  password_not_starts_with?: ?string,
  password_ends_with?: ?string,
  password_not_ends_with?: ?string,
  updatedAt?: ?any,
  updatedAt_not?: ?any,
  updatedAt_in?: ?$ReadOnlyArray<any>,
  updatedAt_not_in?: ?$ReadOnlyArray<any>,
  updatedAt_lt?: ?any,
  updatedAt_lte?: ?any,
  updatedAt_gt?: ?any,
  updatedAt_gte?: ?any,
  friends_every?: ?UserFilter,
  friends_some?: ?UserFilter,
  friends_none?: ?UserFilter,
  jars_every?: ?JarFilter,
  jars_some?: ?JarFilter,
  jars_none?: ?JarFilter,
  receivedFriendRequests_every?: ?FriendRequestFilter,
  receivedFriendRequests_some?: ?FriendRequestFilter,
  receivedFriendRequests_none?: ?FriendRequestFilter,
  sentFriendRequests_every?: ?FriendRequestFilter,
  sentFriendRequests_some?: ?FriendRequestFilter,
  sentFriendRequests_none?: ?FriendRequestFilter,
};
export type FriendRequestFilter = {
  AND?: ?$ReadOnlyArray<FriendRequestFilter>,
  OR?: ?$ReadOnlyArray<FriendRequestFilter>,
  createdAt?: ?any,
  createdAt_not?: ?any,
  createdAt_in?: ?$ReadOnlyArray<any>,
  createdAt_not_in?: ?$ReadOnlyArray<any>,
  createdAt_lt?: ?any,
  createdAt_lte?: ?any,
  createdAt_gt?: ?any,
  createdAt_gte?: ?any,
  id?: ?string,
  id_not?: ?string,
  id_in?: ?$ReadOnlyArray<string>,
  id_not_in?: ?$ReadOnlyArray<string>,
  id_lt?: ?string,
  id_lte?: ?string,
  id_gt?: ?string,
  id_gte?: ?string,
  id_contains?: ?string,
  id_not_contains?: ?string,
  id_starts_with?: ?string,
  id_not_starts_with?: ?string,
  id_ends_with?: ?string,
  id_not_ends_with?: ?string,
  status?: ?FriendRequestStatus,
  status_not?: ?FriendRequestStatus,
  status_in?: ?$ReadOnlyArray<FriendRequestStatus>,
  status_not_in?: ?$ReadOnlyArray<FriendRequestStatus>,
  updatedAt?: ?any,
  updatedAt_not?: ?any,
  updatedAt_in?: ?$ReadOnlyArray<any>,
  updatedAt_not_in?: ?$ReadOnlyArray<any>,
  updatedAt_lt?: ?any,
  updatedAt_lte?: ?any,
  updatedAt_gt?: ?any,
  updatedAt_gte?: ?any,
  recipient?: ?UserFilter,
  sender?: ?UserFilter,
};
export type NewFriendNoteSubscriptionVariables = {|
  filter?: ?NoteSubscriptionFilter
|};
export type NewFriendNoteSubscriptionResponse = {|
  +Note: ?{|
    +mutation: _ModelMutationType,
    +previousValues: ?{|
      +id: string
    |},
    +node: ?{|
      +id: string,
      +text: string,
      +createdAt: any,
      +jar: {|
        +owner: {|
          +id: string,
          +email: string,
        |}
      |},
    |},
  |}
|};
export type NewFriendNoteSubscription = {|
  variables: NewFriendNoteSubscriptionVariables,
  response: NewFriendNoteSubscriptionResponse,
|};
*/


/*
subscription NewFriendNoteSubscription(
  $filter: NoteSubscriptionFilter
) {
  Note(filter: $filter) {
    mutation
    previousValues {
      id
    }
    node {
      id
      text
      createdAt
      jar {
        owner {
          id
          email
        }
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "filter",
    "type": "NoteSubscriptionFilter",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "filter",
    "variableName": "filter",
    "type": "NoteSubscriptionFilter"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "mutation",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "previousValues",
  "storageKey": null,
  "args": null,
  "concreteType": "NotePreviousValues",
  "plural": false,
  "selections": [
    v3
  ]
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "text",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "createdAt",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "owner",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    v3,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "email",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "subscription",
  "name": "NewFriendNoteSubscription",
  "id": null,
  "text": "subscription NewFriendNoteSubscription(\n  $filter: NoteSubscriptionFilter\n) {\n  Note(filter: $filter) {\n    mutation\n    previousValues {\n      id\n    }\n    node {\n      id\n      text\n      createdAt\n      jar {\n        owner {\n          id\n          email\n        }\n        id\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "NewFriendNoteSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "Note",
        "storageKey": null,
        "args": v1,
        "concreteType": "NoteSubscriptionPayload",
        "plural": false,
        "selections": [
          v2,
          v4,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Note",
            "plural": false,
            "selections": [
              v3,
              v5,
              v6,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "jar",
                "storageKey": null,
                "args": null,
                "concreteType": "Jar",
                "plural": false,
                "selections": [
                  v7
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "NewFriendNoteSubscription",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "Note",
        "storageKey": null,
        "args": v1,
        "concreteType": "NoteSubscriptionPayload",
        "plural": false,
        "selections": [
          v2,
          v4,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Note",
            "plural": false,
            "selections": [
              v3,
              v5,
              v6,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "jar",
                "storageKey": null,
                "args": null,
                "concreteType": "Jar",
                "plural": false,
                "selections": [
                  v7,
                  v3
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '27c065e50d1787e0d4a78ba27ff7d6dc';
module.exports = node;
