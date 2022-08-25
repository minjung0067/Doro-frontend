import React from "react";
import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import {
  editUserMutation,
  editUserMutationVariables,
} from "../../__generated__/editUserMutation";
import { useMe } from "../../hooks/useMe";
import { Helmet } from "react-helmet-async";

export const EDIT_USER_MUTATION = gql`
  mutation editUserMutation($editUserInput: editUserInput!) {
    editUser(input: $editUserInput) {
      ok
      error
    }
  }
`;

interface IEditUserForm {
  email: string;
  password: string;
  name: string;
  institution: string;
  phoneNumber: string;
  place: string;
  rank: string;
}

export const EditUser = () => {
  const { data: userData } = useMe();
  console.log(userData?.me.email);
  const navigate = useNavigate();
  const { register, formState, getValues, handleSubmit } =
    useForm<IEditUserForm>({
      mode: "onChange",
    });
  const onSubmit = () => {
    if (!loading) {
      const { email, password, name, institution, phoneNumber, place, rank } =
        getValues();
      editUserMutation({
        variables: {
          editUserInput: {
            email,
            password,
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
  const onCompleted = (data: editUserMutation) => {
    const {
      editUser: { ok },
    } = data;
    if (ok) {
      navigate("/", { replace: true });
    }
  };
  const [editUserMutation, { data: editUserData, loading }] = useMutation<
    editUserMutation,
    editUserMutationVariables
  >(EDIT_USER_MUTATION, {
    onCompleted,
  });
  return (
    <div>
      <Helmet>
        <title>Edit User | Nuber Eats</title>
      </Helmet>
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
          defaultValue={userData?.me.email}
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
          defaultValue={userData?.me.name}
        />
        <input
          {...register("institution", {
            required: true,
          })}
          required
          name="institution"
          type="text"
          placeholder="Institition"
          defaultValue={userData?.me.institution}
        />
        <input
          {...register("phoneNumber", {
            required: true,
          })}
          required
          name="phoneNumber"
          type="tel"
          placeholder="010-0000-0000"
          defaultValue={userData?.me.phoneNumber}
        />
        <input
          {...register("place", {
            required: true,
          })}
          required
          name="place"
          type="text"
          placeholder="Ansan"
          defaultValue={userData?.me.place}
        />
        <input
          {...register("rank", {
            required: true,
          })}
          required
          name="rank"
          type="text"
          placeholder="직급을 입력해주세요."
          defaultValue={userData?.me.rank ? userData?.me.rank : ""}
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
