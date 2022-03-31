import React from "react";
import UserComp from "../components/UserComp";

const User = ({ setIsAuthenticated }) => {
  return (
    <div>
      <UserComp setIsAuthenticated={setIsAuthenticated} />
    </div>
  );
};

export default User;
