import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import doroLogo from "../images/logo.png";

export const Foot: React.FC = () => {
  return (
    <div>
      <Link to="/" className="flex items-center">
        <img src={doroLogo} className=" w-40 ml-36" alt="Doro" />
      </Link>
      <span>DORO(도로) | 대표 : 김진한 | 사업자 등록번호:825-01-02398</span>
      <span>
        경기도 안산시 상록수 한양대학로 55 학연산클러스터 4층 ,KF-ROOM 2호
      </span>
      <span>Company</span>
      <a href="https://www.notion.so/dojeonrobot/DORO-f71ed19434a5417c96516b4b39101be3">
        회사소개
      </a>
      <a href="https://www.notion.so/dojeonrobot/DORO-f71ed19434a5417c96516b4b39101be3">
        강사모집
      </a>
      <a href="https://www.notion.so/dojeonrobot/DORO-f71ed19434a5417c96516b4b39101be3">
        교육문의
      </a>
      <Link to="/login">매니저 로그인</Link>
      <span>
        고객센터 010-7633-0371 상담시간 10:00~18:00 일요일 및 공휴일 휴무
        점심시간 PM 12:00~PM 13:00 이메일 dojeonrobot@gmail.com
      </span>
      <button>
        <Link
          to="/createPost"
          className="block py-2 pr-4 pl-3 font-bold text-gray-600 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          교육문의
        </Link>
      </button>
    </div>
  );
};
