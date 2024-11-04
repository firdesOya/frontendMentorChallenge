import Link from 'next/link'
import React from 'react'
import { nav, socialMedia } from '../constant/config'

export default function Footer() {
  return (
    <div className='w-full bottom-0 bg-black py-9'>
      <div className='max-w-[1140px] w-full mx-auto px-6 flex flex-col md:flex-row  gap-14  justify-between '>
        <div className='flex flex-col text-center items-center md:items-start gap-7 '>
          <Link href="#">
            <img src="/images/logo.svg" />
          </Link>
          <div className="text-white font-alata flex flex-col md:flex-row  gap-3 ">
            {nav.map(item => {
              return <div key={item.id} className=" flex flex-col  group">
                <Link href="#" >{item.title}</Link>
                <span className='w-0 mx-auto rounded-sm h-0.5 bg-white transition-all duration-300 group-hover:w-6 opacity-0 group-hover:opacity-100 '></span>
              </div>
            })}
          </div>
        </div>
        <div className='flex flex-col gap-5 items-center md:items-end '>
          <div className='flex gap-4 flex-row items-center'>
            {
              socialMedia.map((item) => {
                return <Link href={item.link} key={item.id} target='_blank' className='cursor-pointer flex flex-col gap-2 group'>
                  <img src={item.icon} />
                  <span className='w-0 mx-auto rounded-sm h-0.5 bg-white transition-all duration-300 group-hover:w-6 opacity-0 group-hover:opacity-100 '></span>
                </Link>
              })
            }
          </div>
          <div className='text-[var(--dark-gray)] font-alata text-sm'>© 2021 Loopstudios. All rights reserved.</div>
        </div>
      </div>
    </div>
  )
}
