"use client";
import React, {
  createContext,
  useState,
  FC,
  useContext,
  ReactNode,
} from "react";

// Define the type for your item
type Item = {
  id: number;
  name: string;
  price: number;
};

type CartContextType = {
  cart: Item[];
  addItemToCart: (item: Item) => void;
  removeItemFromCart: (itemId: number) => void;
  editItemInCart: (itemId: number, updatedItem: Item) => void;
  clearCart: () => void;
  handleClick: () => void;
  hide: boolean;

  // Added clearCart function
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  editItemInCart: () => {},
  clearCart: () => {},
  handleClick: () => {},
  hide: false,
  // Added a default empty function for clearCart
});

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [hide, setHide] = useState<boolean>(false);

  const [cart, setCart] = useState<Item[]>([]);

  const addItemToCart = (item: Item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeItemFromCart = (itemId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const editItemInCart = (itemId: number, updatedItem: Item) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === itemId ? updatedItem : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };
  const handleClick = () => {
    setHide(() => !hide);
    console.log("handle click", hide);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        removeItemFromCart,
        editItemInCart,
        clearCart,
        handleClick,
        hide, // Added clearCart to the value
      }}>
      {children}
    </CartContext.Provider>
  );
};
