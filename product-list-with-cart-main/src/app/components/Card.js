import React from "react";
import AddButton from "./AddButton";
import { formatPrice } from "../constants/utils";

export default function Card({ item,addToCart}) {
  return (
    <div>
      <div className="inline-block overflow-hidden rounded-md">
        <picture className="w-full block">
          <source srcSet={item.imgDesktop} media="(min-width:1024px)" className="" />
          <source srcSet={item.imgTablet} media="(min-width:768px)" />
          <img src={item.imgMobile} alt={item.title} 
            className="w-full h-auto rounded-md"
          />
        </picture>
        <div className="flex justify-center -mt-4">
          <AddButton addToCart={addToCart} item={item}/>
        </div>
      </div>
      <div className="pt-3 flex flex-col items-start gap-1">
        <span className="text-rose-400 text-sm">{item.title}</span>
        <span className="font-semibold text-base text-rose-900">{item.subTitle}</span>
        <span className="text-red text-sm font-semibold">${formatPrice(item.price)}</span>
      </div>
    </div>
  );
}
