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
  <div className="Banner-container">
    <div className="Banner-content-container">
      <div className="Banner-con">
        <img src={route} alt="route" className="Banner-route" />
        <div className="Banner-title-div">
          <span className="Banner-title Headline-2">{title}</span>
          <span className="Banner-subtitle Body-1">{subtitle}</span>
        </div>
      </div>
      <h4 className="Banner-content Subtitle-2">{content}</h4>
    </div>
  </div>
);
