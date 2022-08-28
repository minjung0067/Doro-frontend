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
  comment: boolean;
}

export const PostComponent: React.FC<IPostProps> = ({
  createdAt,
  title,
  ownerName,
  id,
  num,
  isLocked,
  lock,
  comment,
}) => (
  <div>
    <span className="Posts-post-num">{num}</span>
    <span className="Posts-post-title">{title}</span>
    {isLocked === true && (
      <img
        src={lock}
        alt="lock"
        style={{ display: "inline", marginLeft: "0.792rem" }}
      />
    )}
    {comment && <span className="Posts-comment">답변완료</span>}
    <span>{ownerName}</span>
    <span>{createdAt}</span>
  </div>
);
