import React from 'react';
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...props  }) => {
  const { pathname } = useLocation()
  return (
    props.loggedIn ? <Component {...props} /> : <Navigate to="/sign-in" state={{ returnUrl: pathname }} replace/>
)}

export default ProtectedRoute; 