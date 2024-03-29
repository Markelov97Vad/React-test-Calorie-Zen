import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRouteElement = ({element: Component, ...props}) => {
  return (
    props.loggetIn ? <Component {...props} /> : < Navigate to='/login' replace/>
  )
}

export default ProtectedRouteElement;