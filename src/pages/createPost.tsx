import { gql, useMutation } from "@apollo/client";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const { register, formState, getValues, handleSubmit } =
    useForm<ICreatePostForm>({
      mode: "onChange",
    });
  const [createPostMutation, { data: creataPostData, loading }] = useMutation<
    createPost,
    createPostVariables
  >(CREATE_POST_MUTATION);
  const onSubmit = () => {};

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
          {...(register("ownerName"), { required: true })}
          name="ownerName"
        ></input>
        <input {...register("institution")} name="institution"></input>
        <input
          {...(register("phoneNumber"), { required: true })}
          name="phoneNumber"
        ></input>
        <input
          {...(register("email"), { required: true })}
          name="email"
        ></input>
        <input {...register("password")} name="password"></input>
        <input
          {...(register("title"), { required: true })}
          name="title"
        ></input>
        <input
          {...(register("content"), { required: true })}
          name="content"
        ></input>
      </form>
    </div>
  );
};
