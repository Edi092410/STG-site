import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import request from "../Assets/reques.svg";
import payment from "../Assets/payment.svg";
export const SidebarService = () => {
  return (
    <div className="w-[10vw] md:w-[20vw] border-r-[0.5px] border-[#E1E1E1] flex-shrink-0 flex justify-center text-[16px]">
      <div className="mt-10">
        {/* <div className="pb-6 hidden md:block">Миний листүүд</div> */}
        <ul>
          <li className="group flex items-center mb-5">
            <NavLink
              to="/service/list"
              className="flex"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              <img
                src={request}
                alt="Service"
                className="w-8 h-8 transition-transform transform-gpu group-hover:scale-125"
              />
              <div className="hidden md:block ml-[20px]">Хүсэлт</div>
            </NavLink>
          </li>
          <li className=" group flex items-center">
            <NavLink
              to="/service/payment"
              className="flex"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "black" : "",
              })}
            >
              <img
                src={payment}
                alt="payment"
                className="w-8 h-8 transition-transform transform-gpu group-hover:scale-125"
              />
              <div className=" hidden ml-5 md:block">Төлбөр</div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
