import { Link } from "react-router-dom";

import { gql, useMutation, useReactiveVar } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { appendErrors, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { isLoggedInVar } from "../apollo";
import { Banner } from "../components/banner";
import { createEdu, createEduVariables} from "../__generated__/createEdu";
import createPostRoute from "../images/createPostRoute.png"; // to do
import { Helmet } from "react-helmet-async";

//mutation 부분은 전적으로 apollo를 위한 줄, apollo에서 앞에 $가 붙으면 해당 부분을 변수로 인식함.
const CREATE_EDU_MUTATION = gql`
  mutation createEdu($createEduInput: CreateEduInput!) {
    CreateEdu(input: $createEduInput) {
      error
      ok
    }
  }
`;

enum SCHOOL_RANKS {
  Elementary,
  Middle,
  High,
}

interface Detail_class_item{
  class_name: String;
  student_number: number;
  date: String;
  remark: String;
  unfixed: Boolean;
}

interface ICreateEduForm {
  name: String;
  institution_name: String;
  position: String;
  phone_number: String;
  email: String;
  student_count: number;
  school_rank: SCHOOL_RANKS;
  grade: number;
  budget: number;
  overall_remark: String;
  detail_classes: Detail_class_item[];
}

const onCompleted = (data: createEdu) => {
  const {
    createEdu: { ok, error },
  } = data;
  if (ok) {
    // navigate("/home", { replace: true, state: true }); //바로 완료 페이지로 보내면 안되고, 신청한 내용을 전부 확인하는 페이지로 일단 보내야함.
    alert("보내기 성공");
  } else {
    console.log(error);
  }
};

export const CreateEdu = () => {
  const { register, getValues, handleSubmit, setError, formState: {errors}} = useForm<ICreateEduForm>();
  
  const [createEduMutation, { data }] = useMutation<
    createEdu, createEduVariables
    >(CREATE_EDU_MUTATION, {
      onCompleted,
    });
  //mutation function, 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const onSubmit = () => {
    const {
      name,
      institution_name,
      position,
      phone_number,
      email,
      student_count,
      school_rank,
      grade,
      budget,
      overall_remark,
      detail_classes,
    } = getValues();

    createEduMutation({
      variables: {
        createEduInput: {
          name,
          institution_name,
          position,
          phone_number,
          email,
          student_count,
          school_rank,
          grade,
          budget,
          overall_remark,
          detail_classes,
        },
      },
    });
  };

  const onInvalid = () => {
    alert("교육 신청 중 오류가 발생하였습니다.")
  }


  return (
    <div className="Create-post-root">
      <Helmet>
        <title>Create | DORO</title>
      </Helmet>
      <Banner
        wid={5.444}
        route={createPostRoute}
        title="교육 신청"
        subtitle="Education Application"
        content="희망 교육과 문의 사항을 작성해주시면 빠르게 답변해드리겠습니다."
      />
      <div className="Create-post-content-root">
        <div className="Create-post-title">신청자 정보</div>
        <form className="Create-post-form" onSubmit={handleSubmit(onSubmit, onInvalid)}>
          <div className=" Create-post-input-parent ">
            <div className="Create-post-input-description-box">
              <span className="Create-post-input-description-text">
                문의자 성함
              </span>
              <span style={{ color: "red" }}>*</span>
            </div>
            <div className="Crxeate-post-input-input-box">
              <input
                {...register("name", { required: "성함을 입력해주세요.",  })}
                className="Create-post-input-input-content"
                name="name"
                placeholder="신청자 성함"
                maxLength={4}
                // defaultValue={userData?.me.name ? userData?.me.name : ""}
              />
              {/* {errors.name?.message &&(
                <span >{errors.name?.message}</span>
              )} */}
            </div>
          </div>
          <div className=" Create-post-input-parent">
            <div className="Create-post-input-description-box">
              <span className="Create-post-input-description-text">
                소속 기관(학원)
              </span>
            </div>
            <div className="Create-post-input-input-box">
              <input

                name="institution"
                placeholder="도로 초등학교"
                className="Create-post-input-input-content"
                // defaultValue={
                //   userData?.me.institution ? userData?.me.institution : ""
                // }
              />
            </div>
          </div>

          <div className=" Create-post-input-parent">
            <div className="Create-post-input-description-box">
              <span className="Create-post-input-description-text">연락처</span>
              <span style={{ color: "red" }}>*</span>
            </div>
            <div className="Create-post-input-input-box">
              <input
                // {...register("phoneNumber", { required: true })}
                name="phoneNumber"
                placeholder="하이픈(-) 없이 숫자만 입력"
                className="Create-post-input-input-content"
              />
            </div>
          </div>

          <div className=" Create-post-input-parent">
            <div className="Create-post-input-description-box">
              <span className="Create-post-input-description-text">이메일</span>
            </div>
            <div className="Create-post-input-input-box">
              <input
                // {...register("phoneNumber", { required: true,validate: (email:string) => email.includes("@") })}
                name="email"
                placeholder="이메일 주소 입력"
                className="Create-post-input-input-content"
                // defaultValue={userData?.me.email ? userData?.me.email : ""}
              />
            </div>
          </div>



          <div className="Create-post-title">문의내용</div>

          <div className=" Create-post-input-parent">
            <div className="Create-post-input-description-box Create-for-border">
              <span className="Create-post-input-description-text">
                글 제목
              </span>
              <span style={{ color: "red" }}>*</span>
            </div>
            <div className="Create-post-input-input-box Create-for-border">
              {/* <input
                {...register("title", { required: true })}
                name="title"
                maxLength={30}
                className="Create-post-input-input-content"
                placeholder=""
              /> */}
            </div>
          </div>

          <div className=" Create-post-input-textarea-parent">
            <div className="Create-post-input-textarea-span-box">
              <span className="Create-post-input-description-text">
                글 내용
              </span>
              <span style={{ color: "red" }}> *</span>
            </div>
            <div className="Create-post-input-textarea-div">
              <textarea
                // {...register("content", { required: true })}
                name="content"
                placeholder="문의 내용을 입력해주세요"
                className="Create-post-textarea"
              />
            </div>
          </div>

          <div
            className="Create-post-input-parent-notification"
          >
            <div className="Create-post-input-title-notification"></div>
            <div className="Create-post-input-input-box-notification">
              <div className=" create-post-notification-checkbox-parent">
                <div className="Create-post-agree-checkbox-parent flex flex-row justify-center">
                  <input
                    // {...register("agree", { required: true })}
                    className="Create-post-agree-checkbox"
                    name="agree"
                    type={"checkbox"}
                  />
                  <span className="Create-post-agree-notification">
                    본인은 [개인정보 수집 및 이용에 관한 동의] 내용을
                    확인하였으며 동의합니다.
                  </span>
                </div>

                {/* <div className="Create-post-agree-info-confirm-parent">
                  {isHovering ? (
                    <img src={infoConfirm} alt="info"></img>
                  ) : (
                    <></>
                  )}
                </div> */}
              </div>
            </div>
          </div>

          <div className=" Create-post-submit-button-parent">
            <button
              className={`${
                formState.isValid
                  ? "Create-post-submit-button-on"
                  : "Create-post-submit-button-off"
              }`}
            >
              {loading ? (
                <span className="Create-post-submit-text">로딩 중</span>
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

