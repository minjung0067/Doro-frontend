import React from "react";
import { Link } from "react-router-dom";

interface IPostProps {
  createdAt: string;
  title: string;
  ownerName: string;
  id: number;
  num: number | string;
  isLocked: boolean;
  lock: string;
}

export const PostComponent: React.FC<IPostProps> = ({
  createdAt,
  title,
  ownerName,
  id,
  num,
  isLocked,
  lock,
}) => (
  <Link to={`/post/${id}`}>
    <div>
      <span>{num}</span>
      <span>{title}</span>
      {isLocked === true && (
        <img src={lock} alt="lock" style={{ display: "inline" }} />
      )}
      <span>{ownerName}</span>
      <span>{createdAt}</span>
    </div>
  </Link>
);
