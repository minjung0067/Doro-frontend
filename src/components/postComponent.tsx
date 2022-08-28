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
    <span>{num}</span>
    <span>{title}</span>
    {isLocked === true && (
      <img src={lock} alt="lock" style={{ display: "inline" }} />
    )}
    {comment && <span>답변완료</span>}
    <span>{ownerName}</span>
    <span>{createdAt}</span>
  </div>
);
