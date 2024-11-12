'use client'
import React, { useEffect, useState } from 'react'
import { navList } from '../constant/config'
import Link from 'next/link'

export default function NavList() {
  const [openDropDown, setOpenDropDown] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Tarayıcıda ekran genişliğini kontrol et
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    // İlk renderda kontrol et
    handleResize();

    // Ekran boyutu değiştikçe güncelle
    window.addEventListener('resize', handleResize);

    // Temizle
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className='flex flex-col md:flex-row capitalize gap-4 md:gap-8'>
      {navList.map((item) => {
        return <div
          key={item.id}
          className='cursor-pointer relative group'
        >
          <Link
            onClick={() => {
              if (!isDesktop) {
                setOpenDropDown(openDropDown === item.id ? null : item.id);
              }
            }}
            href={item.path}
            className={`flex flex-row items-center gap-3 px-1 py-2 ${openDropDown === item.id ? 'text-almost-black' : 'text-medium-gray'}  hover:text-almost-black`}>
            {item.title}
            <img
              src={openDropDown === item.id || isDesktop ? item.icon1 : item.icon}
              className={`transition-transform duration-300 ${openDropDown === item.id || (isDesktop && 'group-hover:rotate-180')
                }`}
            />
          </Link>
          {item.sublinks &&
            <div className={`flex-col  ${openDropDown === item.id ? 'flex' : 'hidden'
              } justify-start gap-4 md:group-hover:flex text-medium-gray relative md:absolute md:bg-white md:rounded-md md:custom-shadow p-5 md:right-0 top-0 md:top-8 min-w-[120px]`}>
              {item.sublinks.map((subItem) => {
                return <Link href={subItem.path} key={subItem.id} className='flex flex-row text-medium-gray hover:text-almost-black items-center gap-2.5 '>
                  {subItem.icon && <div className='w-4 h-4 flex-shrink-0'><img className='w-full h-full' src={subItem.icon} /></div>}
                  {subItem.title}
                </Link>
              })}
            </div>}
        </div>
      })}
    </nav>
  )
}
