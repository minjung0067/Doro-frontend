import React from "react";
import { gql, useMutation } from "@apollo/client";
import { UserRole } from "../../__generated__/globalTypes";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  createUserMutation,
  createUserMutationVariables,
} from "../../__generated__/createUserMutation";
import { Button } from "../../components/button";

export const CREATE_USER_MUTATION = gql`
  mutation createUserMutation($createUserInput: CreateUserInput!) {
    createUser(input: $createUserInput) {
      ok
      error
    }
  }
`;

interface ICreateUserForm {
  email: string;
  password: string;
  role: UserRole;
  name: string;
}

export const CreateUser = () => {
  const navigate = useNavigate();
  const { register, formState, getValues, handleSubmit } =
    useForm<ICreateUserForm>({
      mode: "onChange",
      defaultValues: {
        role: UserRole.Client,
      },
    });
  const onSubmit = () => {
    if (!loading) {
      const { email, password, role, name } = getValues();
      createUserMutation({
        variables: {
          createUserInput: {
            email,
            password,
            role,
            name,
          },
        },
      });
    }
  };
  const onCompleted = (data: createUserMutation) => {
    const {
      createUser: { ok },
    } = data;
    if (ok) {
      navigate("/", { replace: true });
    }
  };
  const [createUserMutation, { data: createUserData, loading }] = useMutation<
    createUserMutation,
    createUserMutationVariables
  >(CREATE_USER_MUTATION, {
    onCompleted,
  });
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
          name="email"
          required
          type="email"
          placeholder="아이디"
        />
        <input
          {...register("password", {
            required: true,
          })}
          required
          name="password"
          type="password"
          placeholder="비밀번호"
        />
        <select {...register("role", { required: true })} name="role">
          {Object.keys(UserRole).map((role, index) => (
            <option key={index}>{role}</option>
          ))}
        </select>
        <Button
          canClick={formState.isValid}
          loading={loading}
          actionText={"회원가입"}
        />
      </form>
    </div>
  );
};
