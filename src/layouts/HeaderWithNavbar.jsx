import React from "react";
import logo from "../assets/logo.jpg";
import { Navbar } from "../components/Navbar/Navbar";
export const HeaderWithNavbar = () => {
  return (
    <header className="flex align-middle justify-around h-16 bg-slate-800 p-5">
      <img src={logo} alt="logo" className="rounded mr-auto pl-[10vw]"></img>
      <Navbar />
      <div className="flex text-white text-xs pr-[8vw]">
        <div className="mr-2">Та бүртгэлтэй бол</div>
        <div className="text-red-500">Нэвтрэх</div>
      </div>
    </header>
  );
};
