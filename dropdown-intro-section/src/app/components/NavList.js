'use client'
import React, { useState } from 'react'
import { navList } from '../constant/config'
import Link from 'next/link'

export default function NavList() {
  const [openDropDown, setOpenDropDown] = useState(null);


  return (
    <nav className='flex flex-col md:flex-row capitalize gap-4 md:gap-8'>
      {navList.map((item) => {
        return <div key={item.id} className='cursor-pointer '>
          <Link
            href={item.path}
            className='flex flex-row items-center gap-3 px-1 py-1 text-medium-gray hover:text-almost-black'>
            {item.title}
            <img src={item.icon} />
          </Link>
        </div>
      })}
    </nav>
  )
}
