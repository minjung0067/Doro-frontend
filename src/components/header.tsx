import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import doroLogo from "../images/logo.png";

export const Header: React.FC = () => {
  return (
    <>
      <header className="py-4">
        <div className="w-full px-2 max-w-screen-2xl mx-auto flex justify-center items-center gap-2">
          <Link to="/">
            <img src={doroLogo} className="w-44" alt="Doro" />
          </Link>
          <div>
            <span className="text-xs">DORO </span>
            <span className="text-xs">제품 & 서비스 </span>
            <span className="text-xs">커뮤니티 </span>
            <span className="text-xs">교육문의 </span>
          </div>
          <div>
            <span className="text-xs">
              <Link to="/login">로그인 </Link>
            </span>
            <span className="text-xs">
              <Link to="/createUser">회원가입</Link>
            </span>
          </div>
        </div>
      </header>
    </>
  );
};
