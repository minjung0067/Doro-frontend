import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import doroLogo from "../images/logo.png";

export const Header: React.FC = () => {
  return (
    <>
      <header className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" className="flex items-center">
            <img src={doroLogo} className="ml-8" alt="Doro" />
          </Link>
          <div
            className="hidden w-full md:block md:w-auto mr-20"
            id="navbar-default"
          >
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/posts"
                  className="block py-2 pr-4 pl-3 font-bold text-gray-600 md:text-gray-600 md:p-0 dark:text-white hover:text-gray-500"
                  aria-current="page"
                >
                  커뮤니티
                </Link>
              </li>
              <li>
                <Link
                  to="/createPost"
                  className="block py-2 pr-4 pl-3 font-bold text-gray-600 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  교육문의
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
