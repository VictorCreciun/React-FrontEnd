import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    axios("https://game-shop-4real.herokuapp.com/api/wishlist").then(
      (response) => {
        setWishlist(response.data);
      }
    );
  }, []);

  const value = { wishlist };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
