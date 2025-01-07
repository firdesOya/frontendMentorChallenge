import React from "react";
import { CardMenu } from "../constants/config";
import Image from "next/image";
import AddButton from "./AddButton";

export default function CardList() {
  return (
    <div className="flex flex-wrap gap-5 max-w-[800px] ">
      {CardMenu.map((item) => {
        return (
          <div key={item.id} className="relative">
            <Image
              src={item.imgDesktop}
              alt={item.title}
              width={250}
              height={100}
              className="rounded-md "
            />
            <div className="flex items-center justify-center -mt-5 ">
              <AddButton />
            </div>
            <div className="pt-3 flex flex-col items-start gap-1">
              <span className="text-rose-400">{item.title}</span>
              <span className="font-semibold text-rose-900">{item.subTitle}</span>
              <span className="text-red font-semibold">{item.price}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
