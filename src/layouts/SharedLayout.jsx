import React from "react";
import { HeaderWithNavbar } from "./HeaderWithNavbar";
import { HeaderUser } from "./HeaderUser";
import Footer from "./Footer";
import { Link, Outlet } from "react-router-dom";
// import { useAuth } from "./context/AuthProvider";

export const SharedLayout = () => {
  // const { auth } = useAuth();
  // const user = localStorage.getItem("name");
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderUser />
      <Outlet />
      <Footer />
    </div>
  );
};
