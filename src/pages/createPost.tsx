import { gql, useMutation, useReactiveVar } from "@apollo/client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { isLoggedInVar } from "../apollo";
import { Button } from "../components/button";
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
  password?: string;
  ownerName: string;
  institution: string;
  phoneNumber: string;
  email: string;
}

export const CreatePost = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  const { data: userData, refetch } = useMe();
  const navigate = useNavigate();
  const { register, formState, getValues, handleSubmit } =
    useForm<ICreatePostForm>({
      mode: "onChange",
    });
  const onCompleted = (data: createPost) => {
    const {
      createPost: { ok, error },
    } = data;
    if (ok) {
      navigate("/posts", { replace: true });
    } else {
      console.log(error);
    }
  };
  const [createPostMutation, { data: creataPostData, loading }] = useMutation<
    createPost,
    createPostVariables
  >(CREATE_POST_MUTATION, { onCompleted });
  const onSubmit = () => {
    const {
      ownerName,
      institution,
      phoneNumber,
      email,
      title,
      content,
      password,
    } = getValues();
    createPostMutation({
      variables: {
        input: {
          ownerName,
          institution,
          phoneNumber,
          email,
          title,
          content,
          password,
        },
      },
    });
  };

  return (
    <div>
      {isLoggedIn ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("ownerName")}
            name="ownerName"
            placeholder="ownerName"
            defaultValue={userData?.me.name ? userData?.me.name : ""}
          />
          <input
            {...register("institution")}
            name="institution"
            placeholder="institution"
            defaultValue={
              userData?.me.institution ? userData?.me.institution : ""
            }
          />
          <input
            {...register("phoneNumber")}
            name="phoneNumber"
            placeholder="phoneNumber"
            defaultValue={
              userData?.me.institution ? userData?.me.institution : ""
            }
          />
          <input
            {...register("email")}
            name="email"
            placeholder="email"
            defaultValue={userData?.me.email ? userData?.me.email : ""}
          />
          <input
            {...register("password")}
            name="password"
            placeholder="password"
          />
          <input
            {...register("title", { required: true })}
            name="title"
            placeholder="title"
          />
          <input
            {...register("content", { required: true })}
            name="content"
            placeholder="content"
          />
          <Button
            canClick={formState.isValid}
            loading={loading}
            actionText={"게시물 등록"}
          />
        </form>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("ownerName", { required: true })}
            name="ownerName"
            placeholder="ownerName"
            defaultValue={userData?.me.name ? userData?.me.name : ""}
          />
          <input
            {...register("institution", { required: true })}
            name="institution"
            placeholder="institution"
            defaultValue={
              userData?.me.institution ? userData?.me.institution : ""
            }
          />
          <input
            {...register("phoneNumber", { required: true })}
            name="phoneNumber"
            placeholder="phoneNumber"
            defaultValue={
              userData?.me.institution ? userData?.me.institution : ""
            }
          />
          <input
            {...register("email", { required: true })}
            name="email"
            placeholder="email"
            defaultValue={userData?.me.email ? userData?.me.email : ""}
          />
          <input
            {...register("password")}
            name="password"
            placeholder="password"
          />
          <input
            {...register("title", { required: true })}
            name="title"
            placeholder="title"
          />
          <input
            {...register("content", { required: true })}
            name="content"
            placeholder="content"
          />
          <Button
            canClick={formState.isValid}
            loading={loading}
            actionText={"게시물 등록"}
          />
        </form>
      )}
    </div>
  );
};
