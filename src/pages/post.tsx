import { useNavigate, useParams } from "react-router-dom";

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
