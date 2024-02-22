import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const SignInGuard = () => {
  const token = useSelector((state) => state.user?.value?.token);

  return token ? <Navigate to="/user" replace /> : <Outlet />;
};

export default SignInGuard;