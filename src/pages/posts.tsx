import { gql, useLazyQuery, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Banner } from "../components/banner";
import { Button } from "../components/button";
import { PostComponent } from "../components/postComponent";
import {
  postsPageQuery,
  postsPageQueryVariables,
} from "../__generated__/postsPageQuery";
import postsRoute from "../images/postsRoute.png";
import lock from "../images/lock.png";
import Modal from "react-modal";
import {
  checkPasswordForPostOpen,
  checkPasswordForPostOpenVariables,
} from "../__generated__/checkPasswordForPostOpen";

const POSTS_QUERY = gql`
  query postsPageQuery($input: FindAllPostsInput!) {
    findAllPosts(input: $input) {
      ok
      error
      totalPages
      totalResults
      results {
        createdAt
        title
        ownerName
        email
        id
        password
        isLocked
        comments {
          id
        }
      }
    }
  }
`;

export const CHECK_PASSWORD = gql`
  query checkPasswordForPostOpen($input: CheckPasswordInput!) {
    checkPassword(input: $input) {
      isSame
    }
  }
`;

interface IFormProps {
  page: number;
}

export const Posts = () => {
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  const [modalInputPassword, setModalInputPassword] = useState(false);
  const [passwordIsWrong, setPasswordIsWrong] = useState(false);
  const [postIndex, setPostIndex] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [page, setPage] = useState(1);
  let notice = 0;
  const { data, loading, refetch } = useQuery<
    postsPageQuery,
    postsPageQueryVariables
  >(POSTS_QUERY, { variables: { input: { page } } });
  const onNextPageClick = () => setPage((current) => current + 1);
  const onPrevPageClick = () => setPage((current) => current - 1);
  const onFirstPageClick = () => setPage((current) => 1);
  const onLastPageClick = () =>
    setPage((current) =>
      data?.findAllPosts.totalPages ? data?.findAllPosts.totalPages : 1
    );
  console.log(data?.findAllPosts.results);
  data?.findAllPosts.results!.map(
    (post) => post.password === "doro2020" && (notice = notice + 1)
  );
  const { register, handleSubmit, getValues, reset, formState } =
    useForm<IFormProps>();
  const navigate = useNavigate();
  const onCheckPasswordOpenCompleted = (data: checkPasswordForPostOpen) => {
    const {
      checkPassword: { isSame },
    } = data;
    if (isSame === false) {
      reset();
      setPasswordIsWrong(true);
    }
  };
  const [callQueryForOpen] = useLazyQuery<
    checkPasswordForPostOpen,
    checkPasswordForPostOpenVariables
  >(CHECK_PASSWORD, { onCompleted: onCheckPasswordOpenCompleted });

  const onOpenPasswordSubmit = (id: number) => {
    const { password } = getValues();
    callQueryForOpen({
      variables: {
        input: {
          password,
          postId: +(id ?? ""),
        },
      },
    });
  };

  return (
    <div>
      <Helmet>
        <title>Home | DORO</title>
      </Helmet>
      <Banner
        route={postsRoute}
        title="문의 게시판"
        subtitle="Education inquiry board"
        content="문의 답변을 확인할 수 있습니다"
      />
      {!loading && (
        <div className="h-screen flex items-center flex-col mt-10 lg:mt-28">
          <div className="w-full max-w-screen-sm flex flex-col px-5 items-center">
            {`총 ` + (data?.findAllPosts.totalResults! - notice) + "건"}
            {data?.findAllPosts.results?.map((post, index) => (
              <>
                {post.password === "doro2020" ? (
                  <>
                    <Link to={`/post/${post.id}`}>
                      <div>
                        <span>공지</span>
                        <span>{post.title}</span>
                        {post.isLocked === true && (
                          <img
                            src={lock}
                            alt="lock"
                            style={{ display: "inline" }}
                          />
                        )}
                        <span>{post.ownerName}</span>
                        <span>{post.createdAt}</span>
                      </div>
                    </Link>
                    <hr className=" w-2/5" />
                  </>
                ) : (
                  <>
                    <PostComponent
                      key={post.id}
                      num={
                        data.findAllPosts.totalResults
                          ? data.findAllPosts.totalResults -
                            index -
                            (page - 1) * (11 - notice)
                          : +""
                      }
                      id={post.id}
                      ownerName={post.ownerName}
                      title={post.title}
                      createdAt={post.createdAt}
                      lock={lock}
                      isLocked={post.isLocked}
                    />
                    <hr className=" w-2/5" />
                  </>
                )}
                <Modal
                  isOpen={ModalIsOpen}
                  onRequestClose={() => {
                    setModalInputPassword(false);
                    setModalIsOpen(false);
                  }}
                >
                  <>
                    <span>게시글 비밀번호를 입력해주세요</span>
                    <form
                      onSubmit={handleSubmit(() =>
                        onOpenPasswordSubmit(post.id)
                      )}
                    >
                      {passwordIsWrong ? (
                        <input
                          {...register("pass", { required: true })}
                          name="pass"
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
                        actionText={"확인"}
                      />
                    </form>
                  </>
                </Modal>
              </>
            ))}
          </div>

          <div>
            <button
              onClick={onFirstPageClick}
              className="focus:outline-none font-medium text-2xl"
              disabled={page > 1 ? false : true}
            >
              &laquo;
            </button>
            <button
              onClick={onPrevPageClick}
              className="focus:outline-none font-medium text-2xl"
              disabled={page > 1 ? false : true}
            >
              &lsaquo;
            </button>
            <span>{page}</span>
            <button
              onClick={onNextPageClick}
              className="focus:outline-none font-medium text-2xl"
              disabled={page !== data?.findAllPosts.totalPages ? false : true}
            >
              &rsaquo;
            </button>
            <button
              onClick={onLastPageClick}
              className="focus:outline-none font-medium text-2xl"
              disabled={page !== data?.findAllPosts.totalPages ? false : true}
            >
              &raquo;
            </button>
          </div>
          <Link to="/createPost">
            <Button
              canClick={true}
              loading={false}
              actionText={"교육 문의하기"}
            />
          </Link>
        </div>
      )}
    </div>
  );
};
