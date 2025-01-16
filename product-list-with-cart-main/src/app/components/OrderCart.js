import React from "react";
import OrderButton from "./OrderButton";
import Image from "next/image";
import { formatPrice } from "../constants/utils";

export default function OrderCart({ cartItems }) {
  const itemsArray = Object.values(cartItems);
  const totalQuantity = itemsArray.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  const totalPrice = itemsArray.reduce((sum, item) => {
    const price = formatPrice(item.price);
    const total = price * item.quantity;
    return sum + total;
  }, 0);
  const totalAmount = itemsArray.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <div className="h-fit flex flex-col bg-white rounded-md px-6 py-5">
      <h3 className="font-bold pb-8 text-red text-2xl">
        Your Cart ({totalQuantity})
      </h3>
      <div className="">
        {itemsArray.length === 0 ? (
          <div className="flex flex-col items-center">
            <Image
              src="/images/illustration-empty-cart.svg"
              alt="cart"
              width={127}
              height={113}
            />
            <p className="text-center font-semibold text-rose-400 text-sm py-6">
              Your added items will appear here
            </p>
          </div>
        ) : (
          itemsArray.map((item) => {
            return (
              <div key={item.id} className="flex flex-col items-start pt-3">
                <p className="text-sm text-rose-900 font-semibold">
                  {item.subTitle}
                </p>
                <div className="flex flex-row pb-3">
                  <p className="text-sm">
                    <span className="text-red font-semibold">
                      {item.quantity}x
                    </span>
                    <span className="text-rose-500 opacity-50">
                      ${formatPrice(item.price)}
                    </span>
                    <span>${formatPrice(item.price * item.quantity)}</span>
                  </p>
                </div>
                <hr className="w-full" />
              </div>
            );
          })
        )}
      </div>
      {itemsArray.length > 0 && (
        <div>
          <div className="flex flex-row justify-between my-5">
            <p>Order Total</p>
            <span className="text-red-rose font-bold text-2xl">
              ${totalPrice}
            </span>
          </div>
          <div className="mt-24 ">
            <OrderButton title="Confirm Order" />
          </div>
        </div>
      )}
    </div>
  );
}
