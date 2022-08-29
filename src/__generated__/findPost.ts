/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FindPostInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: findPost
// ====================================================

export interface findPost_findPost_post {
  __typename: "Post";
  ownerName: string;
  institution: string | null;
  phoneNumber: string;
  email: string | null;
  title: string;
  content: string;
  password: string | null;
  isLocked: boolean;
}

export interface findPost_findPost {
  __typename: "FindPostOutput";
  ok: boolean;
  error: string | null;
  post: findPost_findPost_post | null;
}

export interface findPost {
  findPost: findPost_findPost;
}

export interface findPostVariables {
  input: FindPostInput;
}
