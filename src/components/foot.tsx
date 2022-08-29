import { Link } from "react-router-dom";
import doroLogo from "../images/logo.png";
import notion from "../images/notion_logo.png";
import insta from "../images/instagram_logo.png";

export const Foot: React.FC = () => {
  return (
    <div className="Foot-container">
      <div className="Foot-content-container">
        <div className="Foot-top-container">
          <div className="Foot-doro-logo">
            <Link to="/" className="Foot-logo-link">
              <img src={doroLogo} className="Foot-logo-img" alt="Doro" />
            </Link>
          </div>
          <div className="Foot-top-right-container">
            <div className="Foot-company-container">
              <p className="Foot-company">Company</p>
              <a
                className="Foot-introduce"
                href="https://www.notion.so/dojeonrobot/DORO-f71ed19434a5417c96516b4b39101be3"
              >
                회사소개
              </a>
              <a
                className="Foot-recruit"
                href="https://www.notion.so/dojeonrobot/DORO-f71ed19434a5417c96516b4b39101be3"
              >
                강사모집
              </a>
            </div>
            <div className="Foot-inquiry-container">
              <p className="Foot-inquiry-span">교육 문의</p>
              <p className="Foot-phone">고객센터 010-7633-0371</p>
              <p className="Foot-time">
                상담시간 10:00~18:00
                <br />
                일요일 및 공휴일 휴무
                <br />
                점심시간 PM 12:00~PM 13:00
              </p>
              <p className="Foot-email">이메일 dojeonrobot@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="Foot-bottom-container">
          <div className="Foot-information">
            <span className="Foot-information-doro">
              DORO(도로) | 대표 : 김진한 | 사업자 등록번호:825-01-02398
            </span>
            <span className="Foot-address">
              경기도 안산시 상록수 한양대학로 55 학연산클러스터 4층 ,KF-ROOM 2호
            </span>
          </div>
          <div className="Foot-bottom-right">
            <div className="Foot-sns">
              <a
                className="Foot-insta-frame"
                href="https://www.instagram.com/doro_edu/"
              >
                <img className="Foot-insta-img" src={insta} alt="Instagram" />
              </a>
              <a
                className="Foot-notion-frame"
                href="https://www.notion.so/dojeonrobot/DORO-f71ed19434a5417c96516b4b39101be3"
              >
                <img className="Foot-notion-img" src={notion} alt="Notion" />
              </a>
            </div>
            <div className="Foot-inquiry-frame">
              <Link to="/" className="Foot-inquiry-link">
                <button className="Foot-inquiry-button">교육 문의하기</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
