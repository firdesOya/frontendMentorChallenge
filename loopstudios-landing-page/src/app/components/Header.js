import Link from 'next/link'
import React from 'react'
import { nav } from '../constant/config'

export default function Header() {
  return (
    <div className=' bg-hero w-full h-auto max-h-[110vh] md:max-h-[90vh] flex flex-col gap-[20vh] md:gap-[10vh]'>
      <div className="max-w-[1140px] w-full mx-auto z-10 py-10 flex items-center justify-between px-6">
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
      <div className=" max-w-[1140px] w-full mx-auto px-6 ">
        <div className="uppercase text-white text-[40px] mb-[20vh] sm:text-6xl p-5 border-2 border-solid border-white max-w-[600px] md:max-w-[650px] md:text-7xl">
          Immersive Experiences That  Deliver
        </div>
      </div>
    </div>
  )
}
