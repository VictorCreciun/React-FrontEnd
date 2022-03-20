import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const GamesContext = createContext();

const GamesProvider = ({ children }) => {
  const [games, setGames] = useState([]);

  console.log(games);

  //   fetch("http://localhost:1234/api/games")
  //     .then(
  //       (response) => console.log("response", response)
  //       // setGames(response.data.games)
  //     )
  //     .then((data) => console.log("data", data));

  useEffect(() => {
    axios("https://game-shop-4real.herokuapp.com/api/games").then((response) =>
      setGames(response.data)
    );
  }, []);

  const value = { games };

  return (
    <GamesContext.Provider value={value}>{children}</GamesContext.Provider>
  );
};

export default GamesProvider;
