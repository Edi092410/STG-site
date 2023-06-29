import React, { useState } from "react";
import { TiMessage } from "react-icons/ti";
import { BiWalletAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";
export const SidebarService = () => {
  return (
    <div className="w-[20vw] border-r-[0.2px] border-gray-500 flex-shrink-0">
      <div className="p-[15%]">
        <div className="pb-6 pl-4">Миний листүүд</div>
        <ul>
          <li>
            <NavLink
              to="/service/list"
              className="flex"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                transition: "font-weight 0.3s",
              })}
            >
              <TiMessage className="w-[50px] h-[50px] p-2 pt-0" />
              <div className="pt-2">Хүсэлтүүд</div>
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/service/payment"
              className="flex"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                transition: "font-weight 0.3s",
              })}
            >
              <BiWalletAlt className="w-[50px] h-[45px] p-2" />
              <div className="pt-2">Төлбөр</div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
