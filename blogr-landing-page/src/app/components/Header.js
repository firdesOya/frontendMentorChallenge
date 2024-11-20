"use client";
import Link from "next/link";
import React, { useState } from "react";
import { navList } from "../constant/config";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(null);

  const mobileOnclick = (id) => {
    setOpenDropDown(openDropDown === id ? null : id);
  };

  return (
    <div className="max-w-[1140px] mx-auto pt-[60px] px-4 flex md:flex-row items-center justify-between md:gap-20">
      <Link href="/">
        <img src="/images/logo.svg" />
      </Link>
      <div
        className="block md:hidden cursor-pointer"
        onClick={() => {
          setToggle(!toggle);
          setOpenDropDown(null);
        }}
      >
        {toggle ? (
          <img src="/images/icon-close.svg" />
        ) : (
          <img src="/images/icon-hamburger.svg" />
        )}
      </div>
      {/* Mobile Menu */}
      {toggle && (
        <div className="min-w-[320px] shadow-md mx-5 text-center p-6 absolute top-[140px] left-0 right-0 z-10 bg-white  rounded-md">
          {navList.map((navItem) => {
            return (
              <div
                key={navItem.id}
                className="flex flex-col  my-3 items-center gap-2 cursor-pointer px-2 text-very-dark-blue text-ubuntu font-medium"
              >
                <div
                  className="flex flex-row justify-center items-center gap-2"
                  onClick={() => mobileOnclick(navItem.id)}
                >
                  <span
                    className={`${openDropDown === navItem.id ? "text-very-dark-grayish-blue" : ""}`}
                  >
                    {navItem.title}
                  </span>
                  <img
                    className={` transition-transform duration-300 ${openDropDown === navItem.id ? "rotate-180" : ""} `}
                    src="/images/icon-arrow-dark.svg"
                  />
                </div>
                {navItem.subLinks && (
                  <div
                    className={`${openDropDown === navItem.id ? "flex" : "hidden"}  bg-gray-100 p-5 rounded-md w-full items-center flex-col gap-1 left-0 text-very-dark-grayish-blue`}
                  >
                    {navItem.subLinks.map((subItem) => {
                      return (
                        <Link
                          key={subItem.id}
                          href={subItem.path}
                          className="p-2"
                        >
                          {subItem.subTitle}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
          <hr className="my-5" />
          <div className="flex flex-col items-center gap-2 mt-">
            <button className="text-ubuntu text-base font-bold px-3 py-2 border-none text-very-dark-blue ">
              Login
            </button>
            <button className="btn  text-white bg-custom-gradient hover:text-white border-none">
              Sign Up
            </button>
          </div>
        </div>
      )}
      {/* Desktop Menu */}
      <div className=" md:flex-row items-center justify-between w-full hidden md:flex ">
        <div className="flex md:flex-row gap-8">
          {navList.map((navItem) => {
            return (
              <div
                key={navItem.id}
                className="flex items-center group relative  hover:underline  px-2 py-3 text-white flex-row gap-2 text-ubuntu "
              >
                <span className="font-bold">{navItem.title}</span>
                <img
                  className="transition-transform duration-300 group-hover:rotate-180"
                  src="/images/icon-arrow-light.svg"
                />
                {navItem.subLinks && (
                  <div className="absolute top-10 hidden text bg-white text-very-dark-grayish-blue  p-5 rounded-md group-hover:flex flex-col gap-1 left-0 ">
                    {navItem.subLinks.map((subItem) => {
                      return (
                        <Link
                          key={subItem.id}
                          href={subItem.path}
                          className="p-2 hover:text-very-dark-black-blue hover:font-bold"
                        >
                          {subItem.subTitle}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex gap-5">
          <button className="text-ubuntu text-base font-bold px-3 py-2  border-none text-white hover:underline">
            Login
          </button>
          <button className="btn  text-light-red bg-white hover:bg-very-light-red hover:text-white border-none">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
