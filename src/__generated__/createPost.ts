/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreatePostInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: createPost
// ====================================================

export interface createPost_createPost {
  __typename: "CreatePostOutut";
  error: string | null;
  ok: boolean;
}

export interface createPost {
  createPost: createPost_createPost;
}

export interface createPostVariables {
  input: CreatePostInput;
}
