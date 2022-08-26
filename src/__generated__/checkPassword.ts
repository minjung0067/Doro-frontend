/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CheckPasswordInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: checkPassword
// ====================================================

export interface checkPassword_checkPassword {
  __typename: "CheckPasswordOutput";
  isSame: boolean;
}

export interface checkPassword {
  checkPassword: checkPassword_checkPassword;
}

export interface checkPasswordVariables {
  input: CheckPasswordInput;
}
