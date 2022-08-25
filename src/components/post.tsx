import React from "react";
import { Link } from "react-router-dom";

interface IPostProps {
  createdAt: string;
  title: string;
  ownerName: string;
  id: number;
}

export const Post: React.FC<IPostProps> = ({
  createdAt,
  title,
  ownerName,
  id,
}) => (
  <Link to={`/posts/${id}`}>
    <div>
      <span>{id}</span>
      <span>{title}</span>
      <span>{ownerName}</span>
      <span>{createdAt}</span>
    </div>
  </Link>
);
