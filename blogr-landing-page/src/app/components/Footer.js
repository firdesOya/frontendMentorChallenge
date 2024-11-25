import React from "react";
import { navList } from "../constant/config";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-very-dark-black-blue mt-32 rounded-tr-[100px] h-full w-full">
      <div className="flex flex-col items-center lg:items-start lg:flex-row max-w-[1140px] px-6 xl:px-0 mx-auto gap-20 py-16 lg:py-[70px] lg:gap-48 ">
        <div>
          <img src="/images/logo.svg" />
        </div>
        <div className="flex flex-col text-center md:text-start gap-6 md:gap-24 md:flex-row md:items-start  lg:gap-52 ">
          {navList.map((navItem) => {
            return (
              <div key={navItem.id}>
                <h4 className="text-overpass font-semibold text-base text-white mb-5 lg:mb-8 mt-1">
                  {navItem.title}
                </h4>
                <div className="flex  flex-col gap-4 items-center md:items-start text-overpass font-semibold  text-grayish-blue text-sm ">
                  {navItem.subLinks.map((subItem) => {
                    return (
                      <Link
                        key={subItem.id}
                        href={subItem.path}
                        className="cursor-pointer hover:underline "
                      >
                        {subItem.subTitle}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
