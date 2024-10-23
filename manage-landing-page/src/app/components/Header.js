'use client'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Button from './Button'
import { menu } from '../constants/config';
import NavbarMobile from './NavbarMobile';
import Link from 'next/link';



export default function Header() {

  const [navbar, setNavbar] = useState(true);

  const toggleClick = () => {
    setNavbar(!navbar);
    if (navbar) {
      // Menü açılırken kaydırmayı kapat
      document.body.style.overflow = 'hidden';
    } else {
      // Menü kapanırken kaydırmayı geri aç
      document.body.style.overflow = 'auto';
    }
  }

  useEffect(() => {
    // Bileşen kapanırken body's stilini temizle
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);


  return (
    <div className='container max-w-[1140px] mx-auto  pt-8 px-5'>
      <div className='container flex flex-row items-center justify-between'>
        <div>
          <Link href={'/'}>  <img src='/logo.svg' /></Link>
        </div>
        <div className='hidden md:block'>
          <Navbar menu={menu} />
        </div>
        <div className='hidden md:block'>
          <Button  name="Get Started" />
        </div>
        <button className='block md:hidden  cursor-pointer z-50' onClick={toggleClick}>
          {
            navbar
              ? <img src='icon-hamburger.svg'/>
              : <img src='icon-close.svg'/>
          }  
        </button>
      </div>
      <div  className={navbar ? 'hidden ' : 'block '}>
        <NavbarMobile  menu={menu} toggleClick={toggleClick} />
      </div>

    </div>
  )
}
