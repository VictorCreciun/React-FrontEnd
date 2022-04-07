import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const WishlistsContext = createContext();

const WishlistsProvider = ({ children }) => {
  const [wishlists, setWishlists] = useState([]);

  console.log(wishlists);

  useEffect(() => {
    axios("https://game-shop-4real.herokuapp.com/api/wishlist").then(
      (response) => setWishlists(response.data)
    );
  }, []);

  const value = { wishlists };

  return (
    <WishlistsContext.Provider value={value}>
      {children}
    </WishlistsContext.Provider>
  );
};

export default WishlistsProvider;
