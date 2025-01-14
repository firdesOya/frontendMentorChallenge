import React from "react";
import OrderButton from "./OrderButton";
import Image from "next/image";

export default function OrderCart({ cartItems }) {
  const itemsArray = Object.values(cartItems);
  const totalQuantity=itemsArray.reduce((sum,item)=>sum+ item.quantity,0);

  return (
    <div className="h-fit flex flex-col bg-white rounded-md px-6 py-5">
      <h3 className="font-bold pb-8 text-red text-2xl">
        Your Cart ({totalQuantity})
      </h3>
      <div className="flex flex-col items-center ">
        {itemsArray.length === 0 ? (
          <>
            <Image
              src="/images/illustration-empty-cart.svg"
              alt="cart"
              width={127}
              height={113}
            />
            <p className="text-center font-semibold text-rose-400 text-sm py-6">
              Your added items will appear here
            </p>
          </>
        ) : (
          itemsArray.map((item) => {
            return (
              <div key={item.id}>
                <span>
                  {item.quantity}x{item.price}
                </span>
                <p>{item.title}</p>
                <p>{item.subTitle}</p>
                
              </div>
            );
          })
        )}
      </div>
      <div className="hidden">
        <OrderButton title="Confirm Order" />
      </div>
    </div>
  );
}
