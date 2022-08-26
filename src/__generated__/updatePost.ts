/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdatePostInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: updatePost
// ====================================================

export interface updatePost_updatePost {
  __typename: "UpdatePostOutput";
  error: string | null;
  ok: boolean;
}

export interface updatePost {
  updatePost: updatePost_updatePost;
}

export interface updatePostVariables {
  input: UpdatePostInput;
}
