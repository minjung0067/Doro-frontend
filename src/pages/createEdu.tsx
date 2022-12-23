import { Link } from "react-router-dom";

import { gql, useMutation, useReactiveVar, useLazyQuery, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { appendErrors, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { isLoggedInVar } from "../apollo";
import { Banner } from "../components/banner";
import { createEdu, createEduVariables} from "../__generated__/createEdu";
// import createPostRoute from "../images/createPostRoute.png"; // to do
import { Helmet } from "react-helmet-async";
import infoConfirm from "../images/Frame68.svg";
import { SendAuthNum, SendAuthNumVariables} from "../__generated__/SendAuthNum";
import { sendOption } from "../__generated__/globalTypes";
import { checkAuthNumQuery, checkAuthNumQueryVariables} from "../__generated__/checkAuthNumQuery";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel"
import { setAppElement } from "react-modal";
// import { useSelector } from 'react-redux'


//date picker language custom
const weekDays = ["일", "월", "화", "수", "목", "금", "토"]
const months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]

const CREATE_EDU_MUTATION = gql`
  mutation createEdu($createEduInput: CreateEduInput!) {
    CreateEdu(CreateEduInput: $createEduInput) {
      error
      ok
    }
  }
`;

const SEND_AUTH_NUM_MUTATION = gql`
  mutation SendAuthNum($input: SendAuthNumInput!) {
    SendAuthNum(input: $input) {
      error
      ok
    }
  }
`;

const CHECK_AUTH_NUM_QUERY = gql`
  query checkAuthNumQuery($input: CheckAuthNumInput!) {
    CheckAuthNum(input: $input) {
      ok
      error
    }
  }
`
interface Detail_class_item{
  class_name: string;
  student_number: number;
  date: string;
  remark: string;
  unfixed: boolean;
}

interface ICreateEduForm {
  name: string;
  institution_name: string;
  position: string;
  phone_number: string;
  email: string;
  student_count: number;
  school_rank: string;
  budget: number;
  overall_remark: string;
  detail_classes: Detail_class_item[];
}

interface ICreateEduForm {
  name: string;
  institution_name: string;
  position: string;
  phone_number: string;
  email: string;
  student_count: number;
  school_rank: string;
  budget: number;
  overall_remark: string;
  detail_classes: Detail_class_item[];
}

interface ISendAuthNumForm {
  name: string;
  phoneNumber: string;
  Option: sendOption;
}

interface ICheckAuthForm {
  authNum: string;
  phoneNumber: string;
}

export const CreateEdu = () => {
  const [startDate, setapplyDate] = useState(new Date());
  const { register, getValues, handleSubmit, formState} = useForm<ICreateEduForm>();
  const { register:register_send, getValues:getValues_send, handleSubmit:handleSubmit_send,} = useForm<ISendAuthNumForm>();
  const { register:register_check, getValues:getValues_check, handleSubmit:handleSubmit_check} = useForm<ICheckAuthForm>();

  const [isHovering, setIsHovering] = useState(0);
  const navigate = useNavigate();

  const onCompleted = (data:SendAuthNum) => {
    console.log("oncompleted");
    const {
      SendAuthNum: { ok, error },
    } = data;
    console.log("dddd");
    if (ok) {
      alert("카톡 왔는지 확인");
    } else {
      console.log(error);
      alert("카톡 안 옴")
    }
  };

  const onSubmit_create = () => {
    const {
      name,
      institution_name,
      position,
      phone_number,
      email,
      student_count,
      school_rank,
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
          budget,
          overall_remark,
          detail_classes,
        },
      },
    });
  };

  const onInvalid_create = () => {
    alert("교육 신청 중 오류가 발생하였습니다.")
  }

  const onInvalid_send = () => {
    try {
      const {
        name,
        phoneNumber,
      } = getValues_send();
      console.log(name, phoneNumber);
      console.log("try)");
    } catch (error) {
     console.log(error); 
    }
    console.log("ㅑinvalid 통과");
  }

  const onSubmit_send = () => {
    const {
      name,
      phoneNumber,
    } = getValues_send();
    console.log(name, phoneNumber)
    console.log("submit");
    try{
      sendAuthNumMutation({
        variables: {
          input: {
            name,
            phoneNumber,
            Option: sendOption.auth,
          },
        },
      });      
    } catch (error) {
      console.log(error);
    }
    console.log("submi22t");    
  };

  const onSubmit_check = () => {
    const { 
      authNum,
    } = getValues_check();
    const {
      phoneNumber,
    } = getValues_send();
    checkAuthNumQuery({
      variables: {
        input: {
          authNum,
          phoneNumber,
        },
      },
    });
  };

  const onCompleted_check = (data: checkAuthNumQuery) => {
    console.log("oncompleted_check");
    const {
      CheckAuthNum: { ok, error },
    } = data;
    console.log("dddd");
    if (ok) {
      alert("인증번호 일치 , 확인 완료 ");
    } else {
      console.log(error);
      alert(error);
    }
  };

  const [createEduMutation] = useMutation<
    createEdu,
    createEduVariables
  >(CREATE_EDU_MUTATION);

  const [sendAuthNumMutation,{ data: sendAuthNum,}] = useMutation<
    SendAuthNum,
    SendAuthNumVariables
  >(SEND_AUTH_NUM_MUTATION, { onCompleted });

  const [checkAuthNumQuery, { data: checkData }] = useLazyQuery<
    checkAuthNumQuery,
    checkAuthNumQueryVariables
  >(CHECK_AUTH_NUM_QUERY, { onCompleted: onCompleted_check });

  return (
    <div className="Create-post-root">
      <Helmet>
        <title>Create | DORO</title>
      </Helmet>
      <Banner
        wid={5.444}
        route=""
        title="교육 신청"
        subtitle="Education Application"
        content="희망 교육과 문의 사항을 작성해주시면 빠르게 답변해드리겠습니다."
        contentClass="Banner-content Subtitle-2"
      />
      <div className="CreateEdu-content-root">
        <div className="CreateEdu-title">신청자 정보</div>
        <form className="Create-post-form" onSubmit={handleSubmit(onSubmit_create, onInvalid_create)}>
          <div className=" Create-post-input-parent">
            <div className="Create-post-input-description-box">
              <span className="Create-post-input-description-text">
                신청자 성함
              </span>
            </div>
            <div className="Create-post-input-input-box">
              <input
                {...register("name", { required: true,  })}
                {...register_send("name", {required: true })}
                className="Create-post-input-input-content"
                name="name"
                placeholder="신청자 성함"
              />
            </div>
          </div>

          <div className=" Create-post-input-parent">
            <div className="Create-post-input-description-box">
              <span className="Create-post-input-description-text">
                소속 기관명
              </span>
            </div>
            <div className="Create-post-input-input-box">
              <input
                {...register("institution_name", { required: true,  })}
                name="institution_name"
                placeholder="도로 초등학교"
                className="Create-post-input-input-content"
              />
            </div>
          </div>

          <div className=" Create-post-input-parent">
            <div className="Create-post-input-description-box">
              <span className="Create-post-input-description-text">직위</span>
            </div>
            <div className="Create-post-input-input-box">
              <input
                {...register("position", { required: true })}
                name="position"
                placeholder="진로 선생님"
                className="Create-post-input-input-content"
              />
            </div>
          </div>

          <div className=" Create-post-input-parent">
            <div className="Create-post-input-description-box">
              <span className="Create-post-input-description-text">휴대폰 번호</span>
            </div>
            <div >
              <input
                {...register_send("phoneNumber", {required: true })}
                name="phoneNumber"
                placeholder="01012345678"
              />

              <button 
                className="Create-post-input-input-content"
                onClick={handleSubmit_send(onSubmit_send, onInvalid_send)}
                >
                카카오톡 인증
              </button>
            </div>
          </div>

          <div className=" Create-post-input-parent">
            <div className="Create-post-input-description-box">
              <span className="Create-post-input-description-text">카카오톡 인증</span>
            </div>
            <div>
              <input
                {...register_check("authNum", {required: true })}
                name="authNum"
                placeholder="인증번호 입력"
              />
              <button
              className="Create-post-input-input-content"
              onClick={handleSubmit_check(onSubmit_check)}
              >
                인증 하기
              </button>
            </div>
          </div>

          <div className=" Create-post-input-parent">
            <div className="Create-post-input-description-box">
              <span className="Create-post-input-description-text">이메일</span>
            </div>
            <div className="Create-post-input-input-box">
              <input
                {...register("email", { required: true,validate: (email:string) => email.includes("@") })}
                name="email"
                placeholder="E-Mail"
                className="Create-post-input-input-content"
              />
            </div>
          </div>


          {/* 교육생 정보 */}
          <div className="CreateEdu-title">교육생 정보</div>
            <div className=" Create-post-input-parent">
              <div className="Create-post-input-description-box">
                <span className="Create-post-input-description-text">
                  교육 학생 수
                </span>
              </div>
              <div className="Create-post-input-input-box">
                <input
                  {...register("student_count", { required: true,  })}
                  className="Create-post-input-input-content"
                  name="student_count"
                  placeholder="총 학생 수를 입력해주세요."
                />
              </div>
            </div>

            <div className=" Create-post-input-parent">
              <div className="Create-post-input-description-box">
                <span className="Create-post-input-description-text">
                  학생 정보
                </span>
              </div>
              <div className="Create-post-input-input-box">
                <input
                  {...register("institution_name", { required: true,  })}
                  name="institution_name"
                  placeholder="초등학교 1학년, 3학년"
                  className="Create-post-input-input-content"
                />
              </div>
            </div>

            <div className=" Create-post-input-parent">
              <div className="Create-post-input-description-box">
                <span className="Create-post-input-description-text">교육 예산</span>
              </div>
              <div className="Create-post-input-input-box">
                <input
                  {...register("position", { required: true })}
                  name="position"
                  placeholder="교육 커리큘럼 제안에 활용되는 정보입니다."
                  className="Create-post-input-input-content"
                />
              </div>
            </div>

          <div className="CreateEdu-title">학급별 교육 일정</div>
          <div >
            
            <div>
              <span>학급 이름</span>
              <input
                {...register("detail_classes.0.class_name", { required: true})}
                name="class_name"
                placeholder="6학년 3반"
              />
            </div>
            <div>
              <span>교육 컨셉</span>
              <input
                {...register("detail_classes.0.class_name", { required: true})}
                name="class_name"
                placeholder="6학년 3반"
              />
            </div>
            <div>
              <span>학생 수</span>
              <input
                {...register("detail_classes.0.class_name", { required: true})}
                name="class_name"
                placeholder="6학년 3반"
              />
            </div>
            <div>
              <span>교육 날짜</span>
              <DatePicker 
                multiple
                weekDays = {weekDays}
                months={months}
                plugins={[
                  <DatePanel />
                ]}
                placeholder="교육 날짜를 입력해주세요."
                containerClassName="custom-container"
                calendarPosition="bottom-center"
              />
            </div>
            <div>
              <span>희망 교육 시간</span>
              <input
                {...register("detail_classes.0.class_name", { required: true})}
                name="class_name"
                placeholder="6학년 3반"
              />
            </div>
          </div>

          <div className="CreateEdu-title">교육 특이사항</div>

          <div className=" Create-post-input-textarea-parent">
            <div className="Create-post-input-textarea-span-box">
              <span className="Create-post-input-description-text">
                교육 특이사항
              </span>
            </div>
            <div className="Create-post-input-textarea-div">
              <textarea
                {...register("overall_remark", { required: true })}
                name="overall_remark"
                placeholder="교육 특이사항을 입력해주세요"
                className="Create-post-textarea"
              />
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
              {/* {loading ? (
                <span className="Create-post-submit-text">로딩 중</span>
              ) : ( */}
                <span className="Create-post-submit-text">접수하기</span>
              {/* )} */}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

