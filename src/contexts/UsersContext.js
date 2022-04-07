import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  console.log(users);

  useEffect(() => {
    axios("https://game-shop-4real.herokuapp.com/api/users").then((response) =>
      setUsers(response.data)
    );
  }, []);

  const value = { users };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

export default UsersProvider;
