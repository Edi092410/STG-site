import React from "react";
import logo from "../assets/logo.jpg";
import { Navbar } from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";  
export const HeaderWithNavbar = () => {
  return (
    <header className="flex align-middle justify-around h-16 bg-slate-800 p-5">
      <img src={logo} alt="logo" className="rounded mr-auto pl-[10vw]"></img>
      <Navbar />
      <div className="flex text-white text-xs pr-[8vw]">
        <div className="mr-2"><Link to="/login">Нэвтрэх</Link></div>
        <div className="text-red-500"><Link to="/register">Бүртгүүлэх</Link></div>
      </div>
    </header>
  );
};
