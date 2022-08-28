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
  <div className=" w-screen h-72" style={{ backgroundColor: "#0072B9" }}>
    <div className="flex flex-col items-start px-80 py-12">
      <img src={route} alt="route" />
      <div className=" py-6">
        <h3 className=" text-4xl font-bold text-white">{title}</h3>
        <h6 className="py-2 px-1 text-gray-300 opacity-70">{subtitle}</h6>
      </div>
      <h4 className=" text-lg text-white">{content}</h4>
    </div>
  </div>
);
