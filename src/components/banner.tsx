import React from "react";
import { Link } from "react-router-dom";
import { LOCALSTORAGE_TOKEN } from './../constants';

interface Banner {
  route: string;
  title: string;
  subtitle: string;
  content: string;
  contentBottom?: string;
  contentClass: string;
  wid: number;
}

export const Banner: React.FC<Banner> = ({
  route,
  title,
  subtitle,
  content,
  contentBottom,
  contentClass,
  wid,


  
}) => (
  <div className="Banner-container">
    <div className="Banner-content-container">
      <div className="Banner-con">
        <img
          src={route}
          alt="route"
          className="Banner-route"
          style={{ width: `${wid}rem`, height: "1.111rem" }}
        />
        <div className="Banner-title-div">
          <span className="Banner-title Headline-2">{title}</span>
          <span className="Banner-subtitle Body-1">{subtitle}</span>
        </div>
      </div>
      <p className={`${contentClass}`}>{content}<br/>{contentBottom}</p>
    </div>
  </div>
);


