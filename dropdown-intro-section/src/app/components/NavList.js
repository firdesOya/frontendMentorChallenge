'use client'
import React, { useState } from 'react'
import { navList } from '../constant/config'
import Link from 'next/link'

export default function NavList() {
  const [openDropDown, setOpenDropDown] = useState(null);


  return (
    <nav className='flex flex-col md:flex-row capitalize gap-4 md:gap-8'>
      {navList.map((item) => {
        return <div key={item.id} className='cursor-pointer relative'>
          <Link
            href={item.path}
            className='flex flex-row items-center gap-3 px-1 py-1 text-medium-gray hover:text-almost-black'>
            {item.title}
            {item.icon && <img src={item.icon} />}
          </Link>
          {item.sublinks &&
            <div className='flex flex-col justify-start gap-4 text-medium-gray absolute bg-white rounded-md custom-shadow p-5 right-0 top-8 min-w-[120px]'>
              {item.sublinks.map((subItem) => {
                return <div key={subItem.id} className='flex flex-row text-medium-gray hover:text-almost-black items-center gap-2.5 '>
                  {subItem.icon && <div className='w-4 h-4 flex-shrink-0'><img className='w-full h-full' src={subItem.icon} /></div>}
                  {subItem.title}
                </div>
              })}
            </div>}
        </div>
      })}
    </nav>
  )
}
