import React from "react";
import { Link } from "react-router-dom";

interface Banner {
  route: string;
  title: string;
  subtitle: string;
  content: string;
}

export const Banner: React.FC<Banner> = ({
  route,
  title,
  subtitle,
  content,
}) => (
  <div>
    <span>{route}</span>
    <div>
      <h3>{title}</h3>
      <h6>{subtitle}</h6>
    </div>
    <h4>{content}</h4>
  </div>
);
