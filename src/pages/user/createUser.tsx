import React from "react";
import { gql, useMutation } from "@apollo/client";
import { UserRole } from "../../__generated__/globalTypes";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import {
  createUserMutation,
  createUserMutationVariables,
} from "../../__generated__/createUserMutation";

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
  institution: string;
  phoneNumber: string;
  place: string;
  rank: string;
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
      const {
        email,
        password,
        role,
        name,
        institution,
        phoneNumber,
        place,
        rank,
      } = getValues();
      createUserMutation({
        variables: {
          createUserInput: {
            email,
            password,
            role,
            name,
            institution,
            phoneNumber,
            place,
            rank,
          },
        },
      });
    }
  };
  const onCompleted = (data: createUserMutation) => {
    const {
      createUser: { ok, error },
    } = data;
    if (ok) {
      navigate("/", { replace: true });
    } else {
      alert(`${error}`);
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
          placeholder="User ID"
        />
        <input
          {...register("password", {
            required: true,
          })}
          required
          name="password"
          type="password"
          placeholder="PassWord"
        />
        <input
          {...register("name", {
            required: true,
          })}
          required
          name="name"
          type="text"
          placeholder="User Name"
        />
        <input
          {...register("institution", {
            required: true,
          })}
          required
          name="institution"
          type="text"
          placeholder="Institition"
        />
        <input
          {...register("phoneNumber", {
            required: true,
          })}
          required
          name="phoneNumber"
          type="tel"
          placeholder="010-0000-0000"
        />
        <input
          {...register("place", {
            required: true,
          })}
          required
          name="place"
          type="text"
          placeholder="Ansan"
        />
        <input
          {...register("rank", {
            required: true,
          })}
          required
          name="rank"
          type="text"
          placeholder="직급을 입력해주세요."
        />

        <Button
          canClick={formState.isValid}
          loading={loading}
          actionText={"회원가입"}
        />
      </form>
    </div>
  );
};
