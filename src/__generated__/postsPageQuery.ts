/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FindAllPostsInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: postsPageQuery
// ====================================================

export interface postsPageQuery_findAllPosts_results_comments {
  __typename: "Comment";
  id: number;
}

export interface postsPageQuery_findAllPosts_results {
  __typename: "Post";
  createdAt: any;
  title: string;
  ownerName: string;
  email: string | null;
  id: number;
  password: string | null;
  isLocked: boolean;
  comments: postsPageQuery_findAllPosts_results_comments[];
}

export interface postsPageQuery_findAllPosts {
  __typename: "FindAllPostsOutput";
  ok: boolean;
  error: string | null;
  totalPages: number | null;
  totalResults: number | null;
  results: postsPageQuery_findAllPosts_results[] | null;
}

export interface postsPageQuery {
  findAllPosts: postsPageQuery_findAllPosts;
}

export interface postsPageQueryVariables {
  input: FindAllPostsInput;
}
