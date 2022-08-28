/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CheckPasswordInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: checkPasswordForPostOpen
// ====================================================

export interface checkPasswordForPostOpen_checkPassword_post {
  __typename: "Post";
  id: number;
  isLocked: boolean;
}

export interface checkPasswordForPostOpen_checkPassword {
  __typename: "CheckPasswordOutput";
  isSame: boolean;
  post: checkPasswordForPostOpen_checkPassword_post | null;
}

export interface checkPasswordForPostOpen {
  checkPassword: checkPasswordForPostOpen_checkPassword;
}

export interface checkPasswordForPostOpenVariables {
  input: CheckPasswordInput;
}
