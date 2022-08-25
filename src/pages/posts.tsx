import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Post } from "../components/post";
import {
  postsPageQuery,
  postsPageQueryVariables,
} from "../__generated__/postsPageQuery";

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
        id
      }
    }
  }
`;

interface IFormProps {
  page: number;
}

export const Posts = () => {
  const [page, setPage] = useState(1);
  const { data, loading } = useQuery<postsPageQuery, postsPageQueryVariables>(
    POSTS_QUERY,
    { variables: { input: { page } } }
  );
  console.log(data?.findAllPosts.totalPages);
  const onNextPageClick = () => setPage((current) => current + 1);
  const onPrevPageClick = () => setPage((current) => current - 1);
  const onFirstPageClick = () => setPage((current) => 1);
  const onLastPageClick = () =>
    setPage((current) =>
      data?.findAllPosts.totalPages ? data?.findAllPosts.totalPages : 1
    );
  const { register, handleSubmit, getValues } = useForm<IFormProps>();
  const navigate = useNavigate();
  return (
    <div>
      <Helmet>
        <title>Home | Nuber Eats</title>
      </Helmet>
      {!loading && (
        <div>
          <div>
            {data?.findAllPosts.results?.map((post) => (
              <Post
                key={post.id}
                id={post.id}
                ownerName={post.ownerName}
                title={post.title}
                createdAt={post.createdAt}
              />
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
        </div>
      )}
    </div>
  );
};
