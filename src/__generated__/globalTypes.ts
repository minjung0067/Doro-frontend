/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum UserRole {
  Client = "Client",
  Manager = "Manager",
}

export interface CreatePostInput {
  title: string;
  content: string;
  password?: string | null;
  ownerName: string;
  institution?: string | null;
  phoneNumber: string;
  email?: string | null;
}

export interface CreateUserInput {
  email: string;
  password: string;
  name: string;
  institution: string;
  phoneNumber: string;
  plcae: string;
  rank?: string | null;
  role: UserRole;
}

export interface LoginInput {
  email: string;
  password: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
