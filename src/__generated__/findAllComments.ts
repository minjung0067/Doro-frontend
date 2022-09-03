/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FindAllCommentsInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: findAllComments
// ====================================================

export interface findAllComments_findAllComments_comments {
  __typename: "Comment";
  content: string;
}

export interface findAllComments_findAllComments {
  __typename: "FindAllCommentsOutput";
  ok: boolean;
  error: string | null;
  comments: findAllComments_findAllComments_comments[] | null;
}

export interface findAllComments {
  findAllComments: findAllComments_findAllComments;
}

export interface findAllCommentsVariables {
  input: FindAllCommentsInput;
}
