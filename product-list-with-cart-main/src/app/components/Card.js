import React from "react";
import AddButton from "./AddButton";
import Image from "next/image";

export default function Card({ item }) {
  return (
    <div>
      <div className="inline-block">
        <picture className="w-full">
          <source srcSet={item.imgDesktop} media="(min-width:1024px)" />
          <source srcSet={item.imgTablet} media="(min-width:768px)" />
          <img src={item.imgMobile} alt={item.title} />
        </picture>
        <div className="flex justify-center -mt-4">
          <AddButton />
        </div>
      </div>
      <div className="pt-3 flex flex-col items-start gap-1">
        <span className="text-rose-400">{item.title}</span>
        <span className="font-semibold text-rose-900">{item.subTitle}</span>
        <span className="text-red font-semibold">{item.price}</span>
      </div>
    </div>
  );
}
