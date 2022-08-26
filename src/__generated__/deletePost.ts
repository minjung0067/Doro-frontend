/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DeletePostInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: deletePost
// ====================================================

export interface deletePost_deletePost {
  __typename: "DeletePostOutput";
  ok: boolean;
  error: string | null;
}

export interface deletePost {
  deletePost: deletePost_deletePost;
}

export interface deletePostVariables {
  input: DeletePostInput;
}
