/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: meQuery
// ====================================================

export interface meQuery_me {
  __typename: "User";
  name: string;
  email: string;
  institution: string;
  phoneNumber: string;
}

export interface meQuery {
  me: meQuery_me;
}
