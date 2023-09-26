import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/AuthProvider";

export const PublicRoute = () => {
  // const user = localStorage.getItem("name");
  const { auth } = useContext(AuthContext);
  return auth ? <Navigate to="/" /> : <Outlet />;
};
