import { gql, useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { findPost, findPostVariables } from "../__generated__/findPost";
import { FIND_POST_QUERY } from "./editPost";

export const Post = () => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();
  const editButton = () => {
    navigate("edit");
  };
  return (
    <div>
      Post{params.id}
      <button onClick={editButton}>edit</button>
    </div>
  );
};
