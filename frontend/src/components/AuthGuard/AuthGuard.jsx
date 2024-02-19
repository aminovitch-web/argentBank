import React from "react";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children, requireAuth = true }) => {
    const isAuthenticated = Boolean(localStorage.getItem("token"));

    if (requireAuth && !isAuthenticated) {
        return <Navigate to="/signIn" replace />;
    } else if (!requireAuth && isAuthenticated) {
        return <Navigate to="/user" replace />;
    }

    return children;
};

export default AuthGuard;
