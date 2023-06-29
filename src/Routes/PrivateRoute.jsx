import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export const PrivateRoute = () => {
  const { setAuth } = useAuth();
  //   let auth = { token: true };
  const user = localStorage.getItem("name");
  return user ? <Outlet /> : <Navigate to="/login" />;
};
