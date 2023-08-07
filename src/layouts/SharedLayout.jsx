import React, { useContext } from "react";
import { HeaderWithNavbar } from "./HeaderWithNavbar";
import { HeaderUser } from "./HeaderUser";
import Footer from "./Footer";
import { Link, Outlet } from "react-router-dom";
import { LoadedContext } from "../context/Loaded";
// import { Loading } from "../components/Loading/Loading";

export const SharedLayout = () => {
  // const { loading } = useContext(LoadedContext);
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderUser />
      <Outlet />
      <Footer />
      {/* {loading && (
        <div className="w-screen h-[85vh]">
          <Loading />
        </div>
      )} */}
    </div>
  );
};
