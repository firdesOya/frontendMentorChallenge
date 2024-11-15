import Link from 'next/link'
import React from 'react'
import { navList } from '../constant/config'

export default function Header() {
  return (
    <div className='max-w-[1140px] mx-auto pt-[60px] px-4 flex md:flex-row items-center justify-between md:gap-20'>
      <Link href="/">
        <img src='/images/logo.svg' />
      </Link>
      <div className='block md:hidden'>
        <img src='/images/icon-hamburger.svg'/>
      </div>
      <div className=' md:flex-row items-center justify-between w-full hidden md:flex '>
        <div className='flex md:flex-row gap-8'>
          {
            navList.map((navItem) => {
              return <div key={navItem.id} className='flex items-center hover:underline cursor-pointer px-2 text-white flex-row gap-2 text-ubuntu font-bold'>
                <span className=''>{navItem.title}</span>
                <img src='/images/icon-arrow-light.svg' />
              </div>
            })
          }
        </div>
        <div className='flex gap-5'>
          <button className='text-ubuntu text-base font-bold px-3 py-2  border-none text-white hover:underline'>Login</button>
          <button className='btn  text-light-red bg-white hover:bg-very-light-red hover:text-white border-none'>Sign Up</button>
        </div>
      </div>

    </div>
  )
}
