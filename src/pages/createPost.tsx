import { gql, useMutation, useReactiveVar } from "@apollo/client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { isLoggedInVar } from "../apollo";
import { useMe } from "../hooks/useMe";
import { createPost, createPostVariables } from "../__generated__/createPost";

const CREATE_POST_MUTATION = gql`
  mutation createPost($input: CreatePostInput!) {
    createPost(input: $input) {
      error
      ok
    }
  }
`;

interface ICreatePostForm {
  title: string;
  content: string;
  password: string;
  ownerName: string;
  institution: string;
  phoneNumber: string;
  email: string;
}

export const CreatePost = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  if (isLoggedIn) {
  }
  const { data: userData } = useMe();
  console.log(userData?.me.email);
  const navigate = useNavigate();
  const { register, formState, getValues, handleSubmit } =
    useForm<ICreatePostForm>({
      mode: "onChange",
    });
  const [createPostMutation, { data: creataPostData, loading }] = useMutation<
    createPost,
    createPostVariables
  >(CREATE_POST_MUTATION);
  const onSubmit = () => {
    const { ownerName, institution, phoneNumber, email, title, content } =
      getValues();
  };

  const onCompleted = (data: createPost) => {
    const {
      createPost: { ok },
    } = data;
    if (ok) {
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("ownerName", { required: true })}
          name="ownerName"
        />
        <input {...register("institution")} name="institution" />
        <input
          {...register("phoneNumber", { required: true })}
          name="phoneNumber"
        />
        <input {...register("email", { required: true })} name="email" />
        <input {...register("password")} name="password" />
        <input {...register("title", { required: true })} name="title" />
        <input {...register("content", { required: true })} name="content" />
      </form>
    </div>
  );
};
