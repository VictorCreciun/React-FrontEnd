import React from "react";

import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ isAuthenticated, ...props }) {
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return <Route {...props} />;
}

export default PrivateRoute;

// export function AdminRoute({ isAuthenticated, isAdmin, ...props }) {
//   console.log("AdminRoute, isAdmin: ", isAdmin);
//   if (!isAuthenticated || (isAuthenticated && !isAdmin)) {
//     return <Redirect to="/login" />;
//   }

//   return <Route {...props} />;
// }
