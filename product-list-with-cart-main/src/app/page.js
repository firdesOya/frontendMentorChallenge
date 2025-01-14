"use client";
import { useState, useCallback } from "react";
import CardList from "./components/CardList";
import OrderCart from "./components/OrderCart";

export default function Home() {
  const [cartItems, setCartItems] = useState({});

  const addToCart = useCallback((item) => {
    setCartItems((prevItems) => {
      const newItems = { ...prevItems };
      if (newItems[item.id]) {
        newItems[item.id] = {
          ...newItems[item.id],
          quantity: newItems[item.id].quantity + 1
        };
      } else {
        newItems[item.id] = { ...item, quantity: 1 };
      }
      return newItems;
    });
  }, []);

  return (
    <div className="w-full h-full">
      <div className="pt-24 max-w-[1220px] flex gap-6 min-w-[320px] mx-auto py-[70px] px-5 lg:px-0">
        <div className="max-w-[800px]">
          <h2 className="font-bold text-4xl mb-8 text-rose-900">Desserts</h2>
          <CardList addToCart={addToCart} />
        </div>
        <div className="w-full max-w-[385px]">
          <OrderCart cartItems={cartItems} />
        </div>
      </div>
    </div>
  );
}
