import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ isAuthenticated, isAdmin, ...props }) {
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }
  // else if (isAuthenticated && isAdmin) {
  //   return <Route {...props} />;
  // }
  else if (isAuthenticated) {
    return <Route {...props} />;
  }
}

export default PrivateRoute;
