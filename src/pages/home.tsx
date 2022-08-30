import React, { useEffect } from "react";
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

export const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

      <div className="Main2">
        <div className="Main2-content-container">
          <div className="Main2-letter-container">
            <p className="Main2-title">전공 지식을 갖춘 대학생 강사</p>
            <p className="Main2-subtitle">
              DORO의 대학생 강사들은 로봇공학, 전자공학, 생명공학 등<br />
              다양한 이공계 전공 지식을 갖춘 3,4학년으로 구성되어 있습니다.
            </p>
          </div>
          <div className="Main2-image-container">
            <img
              src={instructor1}
              alt="Instructor"
              className="Main2-image1"
            ></img>
            <img
              src={instructor2}
              alt="Instructor"
              className="Main2-image2"
            ></img>
            <img
              src={instructor3}
              alt="Instructor"
              className="Main2-image3"
            ></img>
            <img
              src={instructor4}
              alt="Instructor"
              className="Main2-image4"
            ></img>
          </div>
        </div>
      </div>

      <div className="Main3">
        <div className="Main3-content-container">
          <div className="Main3-top-container">
            <div className="Main3-top-letter-container">
              <p className="Main3-title">과제 결과물을 교육 컨텐츠로</p>
              <p className="Main3-subtitle">
                DORO는 대학교 전공 수업 중 탄생한 과제 결과물을 청소년 교육
                컨텐츠로 활용합니다.
              </p>
            </div>
            <div className="Main3-top-button-container">
              <button className="Main3-top-left-button">
                <img
                  src={leftButton}
                  alt="Left"
                  className="Main3-top-left-image"
                ></img>
              </button>
              <button className="Main3-top-left-button">
                <img
                  src={rightButton}
                  alt="Right"
                  className="Main3-top-left-image"
                ></img>
              </button>
            </div>
          </div>
          <div className="Main3-bottom-container">
            <div className="Main3-bottom-image1-container">
              <img
                src={speaker}
                alt="Program"
                className="Main3-bottom-image1"
              ></img>
              <div className="Main3-bottom-image1-letters">
                <p className="Main3-bottom-image-title">
                  DORO DIY 블루투스 스피커
                </p>
                <p className="Main3-bottom-image-subtitle">
                  #IOT #블루투스 #음향학
                </p>
                <Link to="/createPost" className="Main3-bottom-image-button">
                  <button className="Main3-bottom-image-button">
                    <span className="Main3-bottom-image-inquiry">
                      프로그램 문의하기
                    </span>
                    <span className="Main3-bottom-image-arrow">&rsaquo;</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="Main3-bottom-image2-container">
              <img
                src={mood}
                alt="Program"
                className="Main3-bottom-image2"
              ></img>
              <div className="Main3-bottom-image2-letters">
                <p className="Main3-bottom-image-title">DORO DIY 미니 무드등</p>
                <p className="Main3-bottom-image-subtitle">
                  #기초회로 #전자공학 #소재공학
                </p>
                <button className="Main3-bottom-image-button">
                  <span className="Main3-bottom-image-inquiry">
                    프로그램 문의하기
                  </span>
                  <span className="Main3-bottom-image-arrow">&rsaquo;</span>
                </button>
              </div>
            </div>
            <div className="Main3-bottom-image3-container">
              <img
                src={game}
                alt="Program"
                className="Main3-bottom-image3"
              ></img>
              <div className="Main3-bottom-image3-letters">
                <p className="Main3-bottom-image-title">DORO 아두이노 게임기</p>
                <p className="Main3-bottom-image-subtitle">
                  #중급회로 #임베디드 #아두이노 #코딩
                </p>
                <Link to="/createPost" className="Main3-bottom-image-button">
                  <button className="Main3-bottom-image-button">
                    <span className="Main3-bottom-image-inquiry">
                      프로그램 문의하기
                    </span>
                    <span className="Main3-bottom-image-arrow">&rsaquo;</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="Main3-bottom-image4-container">
              <img
                src={balancing}
                alt="Program"
                className="Main3-bottom-image4"
              ></img>
              <div className="Main3-bottom-image4-letters">
                <p className="Main3-bottom-image-title">DORO 밸런싱 로봇</p>
                <p className="Main3-bottom-image-subtitle">
                  #제어공학 #로봇공학 #아두이노 #코딩
                </p>
                <Link to="/createPost" className="Main3-bottom-image-button">
                  <button className="Main3-bottom-image-button">
                    <span className="Main3-bottom-image-inquiry">
                      프로그램 문의하기
                    </span>
                    <span className="Main3-bottom-image-arrow">&rsaquo;</span>
                  </button>
                </Link>
              </div>
            </div>

            <div className="Main3-bottom-image4-container">
              <img
                src={balancing}
                alt="Program"
                className="Main3-bottom-image4"
              ></img>
              <div className="Main3-bottom-image4-letters">
                <p className="Main3-bottom-image-title">DORO 밸런싱 로봇</p>
                <p className="Main3-bottom-image-subtitle">
                  #제어공학 #로봇공학 #아두이노 #코딩
                </p>
                <Link to="/createPost" className="Main3-bottom-image-button">
                  <button className="Main3-bottom-image-button">
                    <span className="Main3-bottom-image-inquiry">
                      프로그램 문의하기
                    </span>
                    <span className="Main3-bottom-image-arrow">&rsaquo;</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Main4">
        <div className="Main4-content-container">
          <div className="Main4-letter-container">
            <p className="Main4-title">DORO 교육은 청소년재단과 함께 합니다</p>
            <p className="Main4-subtitle">
              DORO 교육은 청소년재단과 함께 진행되어 학교 예산 부담을
              줄여줍니다.
              <br /> 청소년재단 협업 교육 가능 지역 : 경기도 안산시, 시흥시,
              안양시, 수원시, 군포시
            </p>
          </div>
          <div className="Main4-image-container">
            <img src="" alt="Ansan x DORO" className="Main4-image"></img>
          </div>
        </div>
      </div>

      <div className="Main5">
        <div className="Main5-content-container">
          <div className="Main5-letter-container">
            <p className="Main5-title">DORO 교육은 청소년재단과 함께 합니다</p>
          </div>
          <div className="Main5-datas-container">
            <div className="Main5-data1-container">
              <span className="Main5-data1-letter">강의 누적 교육생</span>
              <span className="Main5-data1-number">3187명</span>
            </div>
            <div className="Main5-data2-container">
              <span className="Main5-data2-letter">누적 키트 판매수</span>
              <span className="Main5-data2-number">2139개</span>
            </div>
            <div className="Main5-data3-container">
              <span className="Main5-data3-letter">강의 누적 시간</span>
              <span className="Main5-data3-number">274시간</span>
            </div>
            <div className="Main5-data4-container">
              <span className="Main5-data4-letter">강의 출강 학교 수</span>
              <span className="Main5-data4-number">27개교</span>
            </div>
          </div>
          <img src="" alt="dotologogray" className="Main5-doro-gray"></img>
        </div>
      </div>

      <div className="Main6">
        <div className="Main6-content-container">
          <div className="Main6-top-container">
            <div className="Main6-top-letter-container">
              <p className="Main6-title">DORO와 함께한 순간들</p>
              <p className="Main6-subtitle">
                DORO는 경기도 안산시를 중심으로 다양한 학교 학생들에게 경험을
                전달하고 있습니다.
              </p>
            </div>
            <div className="Main6-top-button-container">
              <button className="Main6-top-left-button">
                <img
                  src={leftButton}
                  alt="Left"
                  className="Main6-top-left-image"
                ></img>
              </button>
              <button className="Main6-top-left-button">
                <img
                  src={rightButton}
                  alt="Right"
                  className="Main6-top-left-image"
                ></img>
              </button>
            </div>
          </div>
          <div className="Main6-bottom-container">
            <div className="Main6-bottom-image1-container">
              <img
                src={child1}
                alt="Program"
                className="Main6-bottom-image1"
              ></img>
            </div>
            <div className="Main6-bottom-image2-container">
              <img
                src={child2}
                alt="Program"
                className="Main6-bottom-image2"
              ></img>
            </div>
            <div className="Main6-bottom-image3-container">
              <img
                src={child3}
                alt="Program"
                className="Main6-bottom-image3"
              ></img>
            </div>
            <div className="Main6-bottom-image4-container">
              <img
                src={child4}
                alt="Program"
                className="Main6-bottom-image4"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div className="Main7">
        <div className="Main7-content-container">
          <p className="Main7-title">DORO 교육 프로세스</p>
          <img src="" alt="ProcessImage" className="Main7-image"></img>
        </div>
      </div>

      <div className="Main8">
        <div className="Main8-content-container">
          <img src="" alt="dorologo" className="Main8-dorologo"></img>
          <p className="Main8-title">
            더 유익하고, 더 즐거운
            <br />
            교육을 아이들에게 선물해주세요
          </p>
          <Link to="/createPost" className="Main8-button-frame">
            <button className="Main8-button">교육 문의하기</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
