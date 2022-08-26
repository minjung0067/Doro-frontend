import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { Banner } from "../components/banner";
import {
  findPostForPost,
  findPostForPostVariables,
} from "../__generated__/findPostForPost";
import postsRoute from "../images/postsRoute.png";
import Modal from "react-modal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../components/button";
import {
  checkPassword,
  checkPasswordVariables,
} from "../__generated__/checkPassword";

export const POST_QUERY = gql`
  query findPostForPost($input: FindPostInput!) {
    findPost(input: $input) {
      ok
      error
      post {
        id
        createdAt
        title
        content
        password
        isLocked
        ownerName
        comments {
          content
        }
      }
    }
  }
`;

export const CHECK_PASSWORD = gql`
  query checkPassword($input: CheckPasswordInput!) {
    checkPassword(input: $input) {
      isSame
    }
  }
`;

export const Post = () => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalInputPassword, setModalInputPassword] = useState(false);
  const [passwordIsWrong, setPasswordIsWrong] = useState(false);
  const { register, formState, getValues, handleSubmit, reset } = useForm({
    mode: "onChange",
  });
  const editButton = () => {
    setModalIsOpen(true);
  };
  const { data } = useQuery<findPostForPost, findPostForPostVariables>(
    POST_QUERY,
    {
      variables: {
        input: {
          postId: +(params.id ?? ""),
        },
      },
    }
  );
  const onCompleted = (data: checkPassword) => {
    const {
      checkPassword: { isSame },
    } = data;
    console.log(isSame);
    if (isSame === true) {
      navigate("edit", { state: true });
    } else {
      reset();
      setPasswordIsWrong(true);
    }
  };
  const [callQuery, { loading, data: passwordData, called }] = useLazyQuery<
    checkPassword,
    checkPasswordVariables
  >(CHECK_PASSWORD, { onCompleted });
  const onSubmit = () => {
    const { password } = getValues();
    callQuery({
      variables: {
        input: {
          password,
          postId: +(params.id ?? ""),
        },
      },
    });
  };
  return (
    <div>
      <Helmet>
        <title>Post | DORO</title>
      </Helmet>
      <Banner
        route={postsRoute}
        title="문의 게시판"
        subtitle="Education inquiry board"
        content="문의 답변을 확인할 수 있습니다"
      />
      <div>
        <div>
          <h2>{data?.findPost.post?.title}</h2>
          <div>
            {data?.findPost.post?.comments.length !== 0 && (
              <span> 답변완료 </span>
            )}
            <span>{data?.findPost.post?.ownerName}</span>
            <span>{data?.findPost.post?.createdAt}</span>
          </div>
        </div>
        <hr />
        <div>
          <p>{data?.findPost.post?.content}</p>
        </div>
        <hr />
        <div>
          <div>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => {
                setModalInputPassword(false), setModalIsOpen(false);
              }}
            >
              {modalInputPassword ? (
                <>
                  <span>게시글 비밀번호를 입력해주세요</span>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {passwordIsWrong ? (
                      <input
                        {...register("password", { required: true })}
                        name="password"
                        placeholder="비밀번호가 틀렸습니다"
                      ></input>
                    ) : (
                      <input
                        {...register("password", { required: true })}
                        name="password"
                        placeholder="비밀번호를 입력해주세요"
                      ></input>
                    )}
                    <Button
                      canClick={formState.isValid}
                      loading={false}
                      actionText={"게시물 수정"}
                    />
                  </form>
                </>
              ) : (
                <>
                  <span>게시물을 수정하겠습니까?</span>
                  <button
                    onClick={() => {
                      setModalInputPassword(true);
                    }}
                  >
                    예
                  </button>
                  <button
                    onClick={() => {
                      setModalIsOpen(false);
                    }}
                  >
                    아니오
                  </button>
                </>
              )}
            </Modal>
            <button onClick={editButton}>Edit</button>
            <button>Delete</button>
            <button>
              <Link to="/posts">Back</Link>
            </button>
          </div>
        </div>
      </div>
      {data?.findPost.post?.comments.length !== 0 && (
        <div>
          <h2>문의 답변</h2>
          <hr />
          <div>
            <p>{data?.findPost.post?.comments[0]?.content}</p>
          </div>
          <hr />
        </div>
      )}
    </div>
  );
};
