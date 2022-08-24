import { gql } from "@apollo/client";
import React from "react";

export const Login = () => {
  const LOGIN_MUTATION = gql`
    mutation PotatoMutation($email: String!, $password: String!) {
      login(input: { email: $email, password: $password }) {
        ok
        token
        error
      }
    }
  `;
  return <span>Login</span>;
};
