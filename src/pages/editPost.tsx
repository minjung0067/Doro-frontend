import { gql, useMutation, useQuery, useReactiveVar } from "@apollo/client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { isLoggedInVar } from "../apollo";
import { Banner } from "../components/banner";
import { Button } from "../components/button";
import { useMe } from "../hooks/useMe";
import { findPost, findPostVariables } from "../__generated__/findPost";

import { updatePost, updatePostVariables } from "../__generated__/updatePost";

const EDIT_POST_MUTATION = gql`
  mutation updatePost($input: UpdatePostInput!) {
    updatePost(input: $input) {
      error
      ok
    }
  }
`;

export const FIND_POST_QUERY = gql`
  query findPost($input: FindPostInput!) {
    findPost(input: $input) {
      ok
      error
      post {
        ownerName
        institution
        phoneNumber
        email
        title
        content
        password
      }
    }
  }
`;

interface IEditPostForm {
  title: string;
  content: string;
  password?: string;
  ownerName: string;
  institution: string;
  phoneNumber: string;
  email: string;
  isLocked: boolean;
  id: number;
}

export const EditPost = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: FindPostData,
    error,
    refetch,
  } = useQuery<findPost, findPostVariables>(FIND_POST_QUERY, {
    variables: {
      input: {
        postId: +(id ?? ""),
      },
    },
  });
  const navigate = useNavigate();

  const { register, formState, getValues, handleSubmit } =
    useForm<IEditPostForm>({
      mode: "onChange",
    });
  const onCompleted = (data: updatePost) => {
    const {
      updatePost: { ok, error },
    } = data;
    if (ok) {
      refetch();
      navigate("/posts", { replace: true });
    } else {
      console.log(error);
    }
  };
  const [updatePost, { data: updatePostData, loading }] = useMutation<
    updatePost,
    updatePostVariables
  >(EDIT_POST_MUTATION, { onCompleted });
  const onSubmit = () => {
    const {
      ownerName,
      institution,
      phoneNumber,
      email,
      title,
      content,
      password,
      isLocked,
    } = getValues();

    updatePost({
      variables: {
        input: {
          ownerName,
          institution,
          phoneNumber,
          email,
          title,
          content,
          password,
          isLocked,
          id: +(id ?? ""),
        },
      },
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("ownerName", { required: true })}
          name="ownerName"
          placeholder="ownerName"
          defaultValue={
            FindPostData?.findPost?.post?.ownerName
              ? FindPostData?.findPost?.post?.ownerName
              : ""
          }
        />
        <input
          {...register("institution")}
          name="institution"
          placeholder="institution"
          defaultValue={
            FindPostData?.findPost?.post?.institution
              ? FindPostData?.findPost?.post?.institution
              : ""
          }
        />
        <input
          {...register("phoneNumber", { required: true })}
          name="phoneNumber"
          placeholder="phoneNumber"
          defaultValue={
            FindPostData?.findPost?.post?.phoneNumber
              ? FindPostData?.findPost?.post?.phoneNumber
              : ""
          }
        />
        <input
          {...register("email")}
          name="email"
          placeholder="email"
          defaultValue={
            FindPostData?.findPost?.post?.email
              ? FindPostData?.findPost?.post?.email
              : ""
          }
        />
        <div>
          <span>비밀글</span>
          <input {...register("isLocked")} name="isLocked" type={"checkbox"} />
        </div>

        <input
          {...register("password", { required: true })}
          name="password"
          placeholder="password"
          defaultValue={
            FindPostData?.findPost?.post?.password
              ? FindPostData?.findPost?.post?.password
              : ""
          }
        />
        <input
          {...register("title", { required: true })}
          name="title"
          placeholder="title"
          defaultValue={
            FindPostData?.findPost?.post?.title
              ? FindPostData?.findPost?.post?.title
              : ""
          }
        />
        <input
          {...register("content", { required: true })}
          name="content"
          placeholder="content"
          defaultValue={
            FindPostData?.findPost?.post?.content
              ? FindPostData?.findPost?.post?.content
              : ""
          }
        />
        <Button
          canClick={formState.isValid}
          loading={loading}
          actionText={"게시물 등록"}
        />
      </form>
    </div>
  );
};
