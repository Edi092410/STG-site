import React, { useState } from "react";
import { NavLink } from "react-router-dom";
export const Navbar = ({ isMenuOpen }) => {
  const navbar = [
    {
      name: "Шийдэл",
      to: "/",
      key: "product",
    },
    {
      name: "Харилцагчийн үйлчилгээ",
      to: "/help",
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
      className={`absolute md:static md:min-h-fit min-h-[50vh] left-0 top-[55px] md:w-auto w-full flex items-center z-10 bg-[#2D3648]  ${
        isMenuOpen ? "block" : "hidden md:block"
      } `}
    >
      <ul className="flex md:flex-row flex-col text-[#717D96] text-[12px] 3xl:text-base md:items-center gap-[6vh] md:gap-0 ml-4 md:ml-0 text-left">
        {navbar.map((prop, index) => (
          <li
            key={prop.key}
            className={`mr-5 ${
              prop.name === "Харилцагчийн үйлчилгээ" &&
              localStorage.getItem("role") === "User" &&
              "hidden"
            }`}
          >
            <NavLink
              to={prop.to}
              className={({ isActive }) =>
                isActive
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
