/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FindPostInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: findPostForPost
// ====================================================

export interface findPostForPost_findPost_post_comments {
  __typename: "Comment";
  content: string;
}

export interface findPostForPost_findPost_post {
  __typename: "Post";
  id: number;
  createdAt: any;
  title: string;
  content: string;
  password: string | null;
  isLocked: boolean;
  ownerName: string;
  comments: findPostForPost_findPost_post_comments[];
}

export interface findPostForPost_findPost {
  __typename: "FindPostOutput";
  ok: boolean;
  error: string | null;
  post: findPostForPost_findPost_post | null;
}

export interface findPostForPost {
  findPost: findPostForPost_findPost;
}

export interface findPostForPostVariables {
  input: FindPostInput;
}
