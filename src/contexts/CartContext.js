import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios("https://game-shop-4real.herokuapp.com/api/cart").then((response) => {
      setCart(response.data);
    });
  }, []);

  const value = { cart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
