import { gql, useQuery } from "@apollo/client";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { Banner } from "../components/banner";
import {
  findPostForPost,
  findPostForPostVariables,
} from "../__generated__/findPostForPost";
import postsRoute from "../images/postsRoute.png";

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

export const Post = () => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();
  const editButton = () => {
    navigate("edit");
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
