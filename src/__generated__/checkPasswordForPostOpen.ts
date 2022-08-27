/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CheckPasswordInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: checkPasswordForPostOpen
// ====================================================

export interface checkPasswordForPostOpen_checkPassword {
  __typename: "CheckPasswordOutput";
  isSame: boolean;
}

export interface checkPasswordForPostOpen {
  checkPassword: checkPasswordForPostOpen_checkPassword;
}

export interface checkPasswordForPostOpenVariables {
  input: CheckPasswordInput;
}
