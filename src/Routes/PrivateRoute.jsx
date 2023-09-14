import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/AuthProvider";

export const PrivateRoute = () => {
  // const user = localStorage.getItem("name");

  const { auth } = useContext(AuthContext);
  return auth ? <Outlet /> : <Navigate to="/login" />;
};
