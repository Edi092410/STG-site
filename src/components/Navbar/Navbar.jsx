import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
// import { ProgramContext } from "../../context/ProgramProvider";

export const Navbar = ({ isMenuOpen }) => {
  // const { selectedChips } = useContext(ProgramContext);
  const selectedChips = JSON.parse(localStorage.getItem("programmes"));
  const companies = JSON.parse(localStorage.getItem("companies"));
  const location = useLocation();
  const navbar = [
    {
      name: "Шийдэл",
      to: "/",
      key: "product",
    },
    {
      name: "Харилцагчийн үйлчилгээ",
      to:
        !selectedChips || (selectedChips && selectedChips.length == 0)
          ? "/help"
          : "/test",
      key: "service",
    },
    {
      name: "Сургалт",
      to: "/course",
      key: "course",
    },
    {
      name: "Бичвэр",
      to: "/article",
      key: "article",
    },
  ];
  return (
    <div
      className={` md:min-h-fit min-h-[50vh]  bg-[#2D3648] ${
        isMenuOpen ? "block" : "hidden md:block"
      } `}
    >
      <ul className="flex md:flex-row flex-col text-[#717D96] text-[12px] 3xl:text-base md:items-center gap-[6vh] md:gap-0 ml-4 md:ml-0 text-left">
        {navbar.map((prop, index) => (
          <li
            key={prop.key}
            className={`mr-5 ${
              prop.name === "Харилцагчийн үйлчилгээ" &&
              (localStorage.getItem("role") === "User" ||
                localStorage.getItem("role") === "Admin") &&
              "hidden"
            }`}
          >
            <NavLink
              to={prop.to}
              className={({ isActive }) =>
                isActive ||
                (location.pathname == "/program" &&
                  prop.name === "Харилцагчийн үйлчилгээ")
                  ? "pb-[5px] text-[#DEDEDE] border-b-2 border-white"
                  : "hover:pb-[5px] hover:border-b-2 hover:border-white hover:text-white  transition-all duration-300"
              }
            >
              {prop.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
