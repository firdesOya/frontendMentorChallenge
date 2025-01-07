import Image from "next/image";
import React from "react";

export default function AddButton() {
  return (
    <button className="flex items-center bg-white text-rose-900 text-xs font-semibold gap-2 border border-rose-500 rounded-full px-6 py-2 hover:border-red hover:text-red">
      <Image
        src="/images/icon-add-to-cart.svg"
        alt="Add to cart"
        width={20}
        height={10}
      />
      Add to Cart
    </button>
  );
}
