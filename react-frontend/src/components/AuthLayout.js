import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../App";

export default function AuthLayout() {
  const [user] = useContext(AuthContext);

  if (!user) return <Navigate to="/login" replace={true} />;

  return <Outlet />;
}
