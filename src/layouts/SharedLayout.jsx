import React, { useContext } from "react";
import { HeaderUser } from "./HeaderUser";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
export const SharedLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderUser />
      <div className="min-h-[90vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
