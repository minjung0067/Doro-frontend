/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserRole } from "./globalTypes";

// ====================================================
// GraphQL query operation: meQuery
// ====================================================

export interface meQuery_me {
  __typename: "User";
  name: string;
  email: string;
  institution: string;
  phoneNumber: string;
  rank: string | null;
  place: string;
  role: UserRole;
}

export interface meQuery {
  me: meQuery_me;
}
