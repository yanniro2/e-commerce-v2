"use client";
import CartItem from "./CartItem";
import { CartContext } from "./CartContext";
import { useContext, useEffect, useState } from "react";
const Cart = () => {
  const { handleClick, hide, cart, clearCart } = useContext(CartContext);
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
  }, [cart, handleClick, hide, clearCart, totalPrice]);
  return (
    <>
      {hide && (
        <div className="fixed z-[40] top-0 left-0 right-0 bottom-0 w-screen h-screen ">
          <div
            className="fixed z-[41] top-0 left-0 right-0 bottom-0 w-screen h-screen backdrop-blur cursor-pointer"
            onClick={handleClick}></div>
          <div className="fixed z-[45] bg-white h-max w-[25rem] top-[6rem] right-[5%] rounded-xl flex justify-between p-5  flex-col drop-shadow shadow">
            <div className="flex items-center justify-between flex-row w-full h-[3rem]">
              <h3 className="h6">
                cart <span>({cart.length})</span>
              </h3>

              <button
                className="p-body font-normal opacity-50 underline"
                onClick={clearCart}>
                Remove all
              </button>
            </div>
            {cart.length === 0 ? (
              <div className="h6 text-primary  text-center">No Item Add</div>
            ) : (
              <>
                <div className="overflow-scroll flex flex-col gap-[1rem] h-min">
                  {/* <CartItem /> */}
                  {cart.map((data) => (
                    <CartItem key={data.id} data={data} />
                  ))}
                </div>
                <div className="w-full h-[8rem] flex-col py-[2rem] flex gap-[1rem]">
                  <div className="flex items-center justify-between">
                    <div className="p-body uppercase text-black opacity-50">
                      total
                    </div>
                    <div className="h6">${totalPrice}</div>
                  </div>
                  <button className="btn btn-1 w-full">checkout</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
