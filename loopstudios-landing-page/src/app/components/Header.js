import Link from 'next/link'
import React from 'react'
import { nav } from '../constant/config'

export default function Header() {
  return (
    <div className="container mx-auto relative z-10 pt-10 flex items-center justify-between px-6">
      <Link href="#">
        <img src="/images/logo.svg"/>
      </Link>
      <div className="text-white font-alata hidden md:flex">
        {nav.map(item => {
          return <div key={item.id} className="px-4 py-3">
            <Link href="#" >{item.title}</Link>
          </div>
        })}
      </div>
      <div className="block md:hidden">
        <img src="/images/icon-hamburger.svg"/>
      </div>
    </div>
  )
}
