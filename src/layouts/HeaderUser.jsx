import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.jpg";
import { Navbar } from "../components/Navbar/Navbar";
import { FaRegUserCircle } from "react-icons/fa";
import { ProfileMenu } from "../components/ProfileMenu/ProfileMenu";
import { Menu } from "../components/ProfileMenu/Menu";

export const HeaderUser = (props) => {
  return (
    <>
      <header className="flex align-middle justify-around h-16 bg-slate-800 p-5">
        <img src={logo} alt="logo" className="rounded mr-auto pl-[10vw]"></img>
        <Navbar />
        <div className="flex text-slate-200 text-xs pr-[8vw]">
          <div className="flex mr-2">
            {/* <FaRegUserCircle className="w-6 h-6 mr-1 pb-2" /> */}
            {/* <div 
            className="cursor-pointer"
            ref={buttonRef}
            >{props.user}
            </div> */}
            <Menu
              user="Binderiya"
              email="binderiya.siticom@gmail.com"
              className=" h-4"
            />
          </div>
          <div className="text-red-500">Гарах</div>
        </div>
      </header>
      {/* {modal && (
        <div className="transition-opacity duration-300">
          <ProfileMenu
            closeModal={closeModal}
            name="Binderiya"
            email="binderiya.siticom@gmail.com"
            ref={menuRef}
          />
        </div>
      )} */}
    </>
  );
};
