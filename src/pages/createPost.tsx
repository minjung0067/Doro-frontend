import { gql, useMutation, useReactiveVar } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { isLoggedInVar } from "../apollo";
import { Banner } from "../components/banner";
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
    <div className="Create-post-page-parent">
      <Helmet>
        <title>Create | DORO</title>
      </Helmet>
      <Banner
        route={createPostRoute}
        title="교육문의"
        subtitle="Education inquiry"
        content="궁금하신 점이나 상담을 원하시는 부분은 언제든 문의주시면 신속하게 답변 드리도록 하겠습니다."
      />
      <div className="Create-post-content-parent">
        <div className="Create-post-title">문의신청정보</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" Create-post-input-parent ">
            <div className="Create-post-input-title">
              <span className="Create-post-input-description">문의자 성함</span>
            </div>
            <div className="Create-post-Frame-72">
              <input
                {...register("ownerName", { required: true, maxLength: 4 })}
                className="Create-post-input"
                name="ownerName"
                placeholder="ownerName"
                maxLength={4}
                defaultValue={userData?.me.name ? userData?.me.name : ""}
              />
            </div>
          </div>
          <div className=" Create-post-input-parent">
            <div className="Create-post-input-title">
              <span className="Create-post-input-description">
                소속 기관(학원)
              </span>
            </div>
            <div className="Create-post-Frame-72">
              <input
                {...register("institution")}
                name="institution"
                placeholder="institution"
                className="Create-post-input"
                defaultValue={
                  userData?.me.institution ? userData?.me.institution : ""
                }
              />
            </div>
          </div>

          <div className=" Create-post-input-parent">
            <div className="Create-post-input-title">
              <span className="Create-post-input-description">연락처</span>
            </div>
            <div className="Create-post-Frame-72">
              <input
                {...register("phoneNumber", { required: true })}
                name="phoneNumber"
                placeholder="phoneNumber"
                className="Create-post-input"
                defaultValue={
                  userData?.me.institution ? userData?.me.institution : ""
                }
              />
            </div>
          </div>

          <div className=" Create-post-input-parent">
            <div className="Create-post-input-title">
              <span className="Create-post-input-description">이메일</span>
            </div>
            <div className="Create-post-Frame-72">
              <input
                {...register("email")}
                name="email"
                placeholder="email"
                className="Create-post-input"
                defaultValue={userData?.me.email ? userData?.me.email : ""}
              />
            </div>
          </div>

          <div className=" Create-post-input-parent">
            <div className="Create-post-input-title">
              <span className="Create-post-input-description">비밀글</span>
            </div>
            <div className="Create-post-Frame-72-checkbox">
              <input
                {...register("isLocked")}
                name="isLocked"
                className="Create-post-input-checkbox  w-6 h-6 ml-4 mt-2"
                type={"checkbox"}
              />
            </div>
          </div>

          <div className=" Create-post-input-parent">
            <div className="Create-post-input-title">
              <span className="Create-post-input-description">
                게시글 비밀번호
              </span>
            </div>
            <div className="Create-post-Frame-72">
              <input
                {...register("password", { required: true })}
                name="password"
                className="Create-post-input"
                placeholder="password"
              />
            </div>
          </div>

          <div className="Create-post-title">문의내용</div>

          <div className=" Create-post-input-parent">
            <div className="Create-post-input-title">
              <span className="Create-post-input-description">글 제목</span>
            </div>
            <div className="Create-post-Frame-72">
              <input
                {...register("title", { required: true })}
                name="title"
                maxLength={15}
                className="Create-post-input"
                placeholder="title"
              />
            </div>
          </div>

          <div className=" Create-post-input-textarea-parent">
            <div className="Create-post-Rectangle-49">
              <span className="Create-post-input-description">글 내용</span>
            </div>
            <div className="Create-post-Frame-91">
              <textarea
                {...register("content", { required: true })}
                name="content"
                placeholder="content"
                className="Create-post-textarea"
              />
            </div>
          </div>

          <div
            className="Create-post-input-parent-notification"
            onMouseOver={() => setIsHovering(1)}
            onMouseOut={() => setIsHovering(0)}
          >
            <div className="Create-post-input-title-notification"></div>
            <div className="Create-post-Frame-72-notification">
              <div className=" create-post-notification-checkbox-parent">
                <div className=" flex-col justify-center align-middle">
                  <input
                    {...register("agree", { required: true })}
                    className="Create-post-Rectangle-63 "
                    name="agree"
                    type={"checkbox"}
                  />
                  <span className="Create-post-agree-notification">
                    본인은 [개인정보 수집 및 이용에 관한 동의] 내용을
                    확인하였으며 동의합니다.
                  </span>
                </div>

                <div className="Create-post-agree-info-confirm-parent">
                  {isHovering ? <img src={infoConfirm}></img> : <></>}
                </div>
              </div>
            </div>
          </div>

          <div className=" Create-post-submit-button-parent">
            <button
              role="button"
              className={` Create-post-submit-button py-4  transition-colors ${
                formState.isValid
                  ? " bg-blue-700 hover:  bg-blue-900"
                  : " bg-slate-500 pointer-events-none"
              }`}
            >
              {loading ? (
                <span className="Create-post-submit-text">로딩 중..."</span>
              ) : (
                <span className="Create-post-submit-text">접수하기</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
