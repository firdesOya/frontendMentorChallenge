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
  
  const handleLinkClick = () => {
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
    <div className=' bg-hero w-full h-auto max-h-[110vh] md:max-h-[90vh] flex flex-col gap-[20vh] md:gap-[10vh]'>
      <div className="max-w-[1140px] w-full mx-auto z-30 py-10 flex items-center justify-between px-6">
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
      {toggle && <div className='fixed top-0 inset-0 bg-black bg-opacity-90 z-20 flex flex-col items-center justify-center'>
        {nav.map(item => (
          <div key={item.id}>
            <NavLink id={item.id} title={item.title} onClick={handleLinkClick} />
          </div>
        ))}
      </div>}
      <div className=" max-w-[1140px] w-full mx-auto px-6 ">
        <div className="uppercase font-josefin text-white text-[40px] mb-[20vh] sm:text-6xl p-5 border-2 border-solid border-white max-w-[600px] md:max-w-[650px] md:text-7xl">
          Immersive Experiences That  Deliver
        </div>
      </div>

    </div>
  )
}
