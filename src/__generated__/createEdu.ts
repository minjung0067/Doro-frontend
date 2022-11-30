/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateEduInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: createEdu
// ====================================================

export interface createEdu_CreateEdu {
  __typename: "CreateEduOutput";
  error: string | null;
  ok: boolean;
}

export interface createEdu {
  CreateEdu: createEdu_CreateEdu;
}

export interface createEduVariables {
  createEduInput: CreateEduInput;
}
