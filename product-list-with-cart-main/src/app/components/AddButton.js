import Image from "next/image";
import React from "react";

export default function AddButton({ item, addToCart }) {
  return (
    <button
      onClick={() => addToCart(item)}
      className="flex items-center bg-white text-rose-900 text-xs font-semibold gap-2 border border-rose-500 rounded-full px-8 py-2 hover:border-red hover:text-red"
    >
      <Image
        src="/images/icon-add-to-cart.svg"
        alt="Add to cart"
        width={20}
        height={10}
      />
      <span>Add to Cart</span>
    </button>
  );
}
