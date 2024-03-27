"use client";
import React, {
  createContext,
  useState,
  FC,
  ReactNode,
  useEffect,
} from "react";

// Define the type for your item
type Item = {
  quantity: number;
  noOfItems: number;
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
  totalQuantity: number;
  totalPrice: number;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  editItemInCart: () => {},
  clearCart: () => {},
  handleClick: () => {},
  hide: false,
  totalQuantity: 0,
  totalPrice: 0,
});

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [hide, setHide] = useState<boolean>(false);
  const [cart, setCart] = useState<Item[]>([]);

  const addItemToCart = (item: Item) => {
    // Check if the item already exists in the cart
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // If the item exists in the cart, replace its quantity
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: item.quantity }
            : cartItem
        )
      );
    } else {
      // If the item does not exist in the cart, add it to the cart
      setCart((prevCart) => [...prevCart, item]);
    }
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

  const [totalQuantity, setTotalQuantity] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    // Calculate total quantity and total price when cart changes
    const newTotalQuantity = cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const newTotalPrice = cart.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    setTotalQuantity(newTotalQuantity);
    setTotalPrice(newTotalPrice);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        removeItemFromCart,
        editItemInCart,
        clearCart,
        handleClick,
        hide,
        totalQuantity,
        totalPrice,
      }}>
      {children}
    </CartContext.Provider>
  );
};
