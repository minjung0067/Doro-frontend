import { gql, useMutation, useReactiveVar } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { isLoggedInVar } from "../apollo";
import { Banner } from "../components/banner";
import { Button } from "../components/button";
import { useMe } from "../hooks/useMe";
import { createPost, createPostVariables } from "../__generated__/createPost";
import infoConfirm from "../images/Frame68.png";
import createPostRoute from "../images/createPostRoute.png";
import { Helmet } from "react-helmet-async";

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
  isLocked: boolean;
  agree: boolean;
}

export const CreatePost = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const { data: userData, refetch } = useMe();
  const [isHovering, setIsHovering] = useState(0);
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
      isLocked,
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
          isLocked,
        },
      },
    });
  };

  return (
    <div>
      <Helmet>
        <title>Create | DORO</title>
      </Helmet>
      <Banner
        route={createPostRoute}
        title="교육문의"
        subtitle="Education inquiry"
        content="궁금하신 점이나 상담을 원하시는 부분은 언제든 문의주시면 신속하게 답변 드리도록 하겠습니다."
      />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("ownerName", { required: true })}
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
            {...register("phoneNumber", { required: true })}
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
          <div>
            <span>비밀글</span>
            <input
              {...register("isLocked")}
              name="isLocked"
              type={"checkbox"}
            />
          </div>

          <input
            {...register("password", { required: true })}
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
          <div
            onMouseOver={() => setIsHovering(1)}
            onMouseOut={() => setIsHovering(0)}
          >
            <input
              {...register("agree", { required: true })}
              name="agree"
              type={"checkbox"}
            />
            <span>
              본인은 [개인정보 수집 및 이용에 관한 동의] 내용을 확인하였으며
              동의합니다.
            </span>
            {isHovering ? <img src={infoConfirm}></img> : <></>}
          </div>

          <Button
            canClick={formState.isValid}
            loading={loading}
            actionText={"게시물 등록"}
          />
        </form>
      </div>
    </div>
  );
};
