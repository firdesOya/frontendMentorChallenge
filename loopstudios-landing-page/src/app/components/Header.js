import Link from 'next/link'
import React from 'react'
import { nav } from '../constant/config'

export default function Header() {
  return (
    <div className="container mx-auto relative z-10 pt-10 flex items-center justify-between px-6">
      <Link href="#">
        <img src="/images/logo.svg" />
      </Link>
      <div className="text-white font-alata hidden md:flex">
        {nav.map(item => {
          return <div key={item.id} className="px-4 flex flex-col py-3 group">
            <Link href="#" >{item.title}</Link>
            <span className='w-0 mx-auto rounded-sm h-0.5 bg-white transition-all duration-300 group-hover:w-6 opacity-0 group-hover:opacity-100 '></span>
          </div>
        })}
      </div>
      <div className="block md:hidden">
        <img src="/images/icon-hamburger.svg" />
      </div>
    </div>
  )
}
