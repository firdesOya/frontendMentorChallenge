'use client'
import React, { useState } from 'react'
import NavList from './NavList'
import Link from 'next/link'

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const onClickToggle = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  }

  return (
    <header className='py-6 px-6 md:px-0 container max-w-[1370px] mx-auto flex items-center justify-between md:gap-16 text-sm font-medium'>
      <Link href="#">
        <img src='/images/logo.svg' />
      </Link>
      <div className='block md:hidden cursor-pointer' onClick={onClickToggle}>
        {toggle
          ? <img src='/images/icon-close-menu.svg' />
          : <img src='/images/icon-menu.svg' />
        }
      </div>
      {/* Mobile Slide-Out Menu */}
      {
        toggle &&
        <>
          <div
            onClick={onClickToggle}
            className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          ></div>
          <div
            className="fixed top-0 right-0  h-full w-[250px] bg-white border-l z-50 md:hidden px-5 flex flex-col">
            <div className="self-end my-5 cursor-pointer" onClick={onClickToggle}>
              <img src='/images/icon-close-menu.svg' />
            </div>
            <NavList />
            <div className="text-medium-gray flex flex-col items-center w-full gap-4 mt-4">
              <button className="px-5 py-2 hover:text-almost-black">Login</button>
              <button className="w-full border-2 border-solid border-medium-gray hover:border-almost-black rounded-xl px-5 py-2 hover:text-almost-black">
                Register
              </button>
            </div>
          </div>
        </>
      }
      {/* Desktop Menu */}
      <div className="hidden md:flex flex-col md:flex-row items-center w-full justify-between">
        <NavList />
        <div className="text-medium-gray flex item-center gap-6 pr-2">
          <button className="px-5 py-2 hover:text-almost-black">Login</button>
          <button className="border-2 border-solid border-medium-gray hover:border-almost-black rounded-xl px-5 py-2 hover:text-almost-black">
            Register
          </button>
        </div>
      </div>
    </header>
  )
}
