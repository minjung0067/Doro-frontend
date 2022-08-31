import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import instructor1 from "../images/instructor1.png";
import instructor2 from "../images/instructor2.png";
import instructor3 from "../images/instructor3.png";
import instructor4 from "../images/instructor4.png";
import leftButton from "../images/left-button.png";
import rightButton from "../images/right-button.png";
import speaker from "../images/speaker.png";
import mood from "../images/mood.png";
import game from "../images/game.png";
import balancing from "../images/balancing.png";

import child1 from "../images/main6-1.png";
import child2 from "../images/main6-2.png";
import child3 from "../images/main6-3.png";
import child4 from "../images/main6-4.png";

import doroLogoGray from "../images/doroLogoGray.png";
import process1 from "../images/process1.png";
import process2 from "../images/process2.png";
import process3 from "../images/process3.png";
import process4 from "../images/process4.png";
import process5 from "../images/process5.png";
import main8Logo from "../images/main8Logo.png";

import empty from "../images/empty.png";
import ansan from "../images/ansan.png";

export const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const horizontalScrollRef = useRef<HTMLInputElement>(null);
  const main6ScrollRef = useRef<HTMLInputElement>(null);

  const handleNextButtonClick = (nextType: "prev" | "next") => {
    console.log(horizontalScrollRef.current);
    if (!horizontalScrollRef.current) return;
    if (nextType === "prev") {
      horizontalScrollRef.current.scrollTo({
        left: horizontalScrollRef.current.scrollLeft - 180,
        behavior: "smooth",
      });
    } else {
      horizontalScrollRef.current.scrollTo({
        left: horizontalScrollRef.current.scrollLeft + 180,
        behavior: "smooth",
      });
    }
  };

  const main6handleNextButtonClick = (nextType: "prev" | "next") => {
    console.log(horizontalScrollRef.current);
    if (!main6ScrollRef.current) return;
    if (nextType === "prev") {
      main6ScrollRef.current.scrollTo({
        left: main6ScrollRef.current.scrollLeft - 180,
        behavior: "smooth",
      });
    } else {
      main6ScrollRef.current.scrollTo({
        left: main6ScrollRef.current.scrollLeft + 180,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="Main-Container">
      <div className="Main1">
        <div className="Main1-content-container">
          <p className="Main1-title">
            안녕하세요,
            <br />
            대학생 강사 기획사
            <br />
            DORO 입니다
          </p>
          <p className="Main1-subtitle">
            DORO의 모든 교육은 대학생 강사가 함께합니다.
          </p>
          <Link to="/createPost" className="Main1-button-frame">
            <button className="Main1-button">교육 문의하기</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
