'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { nav } from '../constant/config'
import NavLink from './NavLink';

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const toggleButton = () => {
    setToggle(!toggle);
  }
  
  const handleLinkClick = (event) => {
    event.preventDefault();
    setToggle(false); // Close the menu on link click
  };

  useEffect(() => {
    // Disable scrolling when toggle is true
    if (toggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Clean up overflow style when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [toggle]);


  return (
    <div className="bg-hero w-full min-h-screen md:h-[650px] md:min-h-0  flex flex-col gap-[200px]  md:gap-[140px]">
      <div className="max-w-[1140px] w-full mx-auto z-30 pt-14 flex items-center justify-between px-6 xl:px-1">
        <Link href="#" onClick={handleLinkClick}>
          <img src="/images/logo.svg" />
        </Link>
        <div className="text-white font-alata hidden md:flex">
          {nav.map(item => {
            return <div key={item.id}>
              <NavLink id={item.id} title={item.title} onClick={handleLinkClick}/>
            </div>
          })}
        </div>
        <div className="block md:hidden cursor-pointer" onClick={toggleButton}>
          {toggle ? <img src="/images/icon-close.svg" /> : <img src="/images/icon-hamburger.svg" />}
        </div>
      </div>
      {toggle && <div className="fixed top-0 inset-0 bg-black  z-20 flex flex-col items-start uppercase justify-center">
        {nav.map(item => (
          <div key={item.id}>
            <NavLink id={item.id} title={item.title} onClick={handleLinkClick} />
          </div>
        ))}
      </div>}
      <div className="max-w-[1140px] px-6 xl:px-1 w-full mx-auto">
        <div className="uppercase font-josefin text-white text-4xl sm:text-6xl md:text-7xl px-10 py-5 border-2 border-solid border-white max-w-[600px] md:max-w-[650px]">
          Immersive Experiences That  Deliver
        </div>
      </div>
    </div>
  )
}
