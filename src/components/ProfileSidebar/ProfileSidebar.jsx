import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
export const ProfileSidebar = (props) => {
  return (
    <div className="flex justify-center w-fit md:w-[20vw] text-sm mt-7 md:mt-0">
      <div className="">
        <ul className="ml-[15%]">
          <li className="hidden md:block w-full ">
            <div className="w-full flex justify-center">
              <FaUserCircle className=" w-[100px] h-[100px] text-slate-800 ml-2" />
            </div>
          </li>
          <li className="mt-4 hidden md:block font-bold text-xl ml-4">
            {localStorage.getItem("name")}
          </li>
          <li className="mt-4">
            <NavLink
              to="personal"
              className="flex"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                  stroke="#121212"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.2101 15.74L15.67 19.2801C15.53 19.4201 15.4 19.68 15.37 19.87L15.18 21.22C15.11 21.71 15.45 22.05 15.94 21.98L17.29 21.79C17.48 21.76 17.75 21.63 17.88 21.49L21.42 17.95C22.03 17.34 22.32 16.63 21.42 15.73C20.53 14.84 19.8201 15.13 19.2101 15.74Z"
                  stroke="#121212"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.7002 16.25C19.0002 17.33 19.8402 18.17 20.9202 18.47"
                  stroke="#121212"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.41016 22C3.41016 18.13 7.26018 15 12.0002 15C13.0402 15 14.0402 15.15 14.9702 15.43"
                  stroke="#121212"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="hidden md:block ml-3">Хувийн тохиргоо</div>
            </NavLink>
          </li>
          <li className="mt-4">
            <NavLink
              to="/settings/multipleCompany"
              className="flex"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.6602 10.44L20.6802 14.62C19.8402 18.23 18.1802 19.69 15.0602 19.39C14.5602 19.35 14.0202 19.26 13.4402 19.12L11.7602 18.72C7.59018 17.73 6.30018 15.67 7.28018 11.49L8.26018 7.30001C8.46018 6.45001 8.70018 5.71001 9.00018 5.10001C10.1702 2.68001 12.1602 2.03001 15.5002 2.82001L17.1702 3.21001C21.3602 4.19001 22.6402 6.26001 21.6602 10.44Z"
                  stroke="#121212"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.0603 19.3901C14.4403 19.8101 13.6603 20.1601 12.7103 20.4701L11.1303 20.9901C7.16034 22.2701 5.07034 21.2001 3.78034 17.2301L2.50034 13.2801C1.22034 9.3101 2.28034 7.2101 6.25034 5.9301L7.83034 5.4101C8.24034 5.2801 8.63034 5.1701 9.00034 5.1001C8.70034 5.7101 8.46034 6.4501 8.26034 7.3001L7.28034 11.4901C6.30034 15.6701 7.59034 17.7301 11.7603 18.7201L13.4403 19.1201C14.0203 19.2601 14.5603 19.3501 15.0603 19.3901Z"
                  stroke="#121212"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="hidden md:block ml-3">Байгууллагын тохиргоо</div>
            </NavLink>
          </li>
          <li className="mt-4">
            <NavLink
              to="/settings/privacy"
              className="flex"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 11V10C9 8.34 9.5 7 12 7C14.5 7 15 8.34 15 10V11"
                  stroke="#121212"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.0004 14.5999C12.3317 14.5999 12.6003 14.3313 12.6003 13.9999C12.6003 13.6685 12.3317 13.3999 12.0004 13.3999C11.669 13.3999 11.4004 13.6685 11.4004 13.9999C11.4004 14.3313 11.669 14.5999 12.0004 14.5999Z"
                  stroke="#121212"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.5 17H9.5C7.5 17 7 16.5 7 14.5V13.5C7 11.5 7.5 11 9.5 11H14.5C16.5 11 17 11.5 17 13.5V14.5C17 16.5 16.5 17 14.5 17Z"
                  stroke="#121212"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#121212"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="hidden md:block ml-3">Нууцлал</div>
            </NavLink>
          </li>
          <li className="mt-4">
            <NavLink
              to="/settings/disable"
              className="flex"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                  stroke="#121212"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.41016 22C3.41016 18.13 7.26018 15 12.0002 15C12.9602 15 13.8902 15.13 14.7602 15.37"
                  stroke="#121212"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 18C22 18.32 21.96 18.63 21.88 18.93C21.79 19.33 21.63 19.72 21.42 20.06C20.73 21.22 19.46 22 18 22C16.97 22 16.04 21.61 15.34 20.97C15.04 20.71 14.78 20.4 14.58 20.06C14.21 19.46 14 18.75 14 18C14 16.92 14.43 15.93 15.13 15.21C15.86 14.46 16.88 14 18 14C19.18 14 20.25 14.51 20.97 15.33C21.61 16.04 22 16.98 22 18Z"
                  stroke="#121212"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.4897 17.98H16.5098"
                  stroke="#121212"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="hidden md:block ml-3">
                Хэрэглэгчийн эрх идэвхгүй болгох
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
