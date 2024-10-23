import React from 'react'
import { menu, socialmedia } from '../constants/config'
import Link from 'next/link'
import NewsletterSignup from './NewsletterSignup'

export default function Footer() {
  return (
    <div className='bg-neutral-veryDarkBlue '>
      <div className='container  max-w-[1140px] mx-auto py-8 px-5 lg:px-0 flex items-center md:items-start justify-between md:gap-0 flex-col md:flex-row '>
        <div className='flex flex-col-reverse md:flex-col items-center  gap-0  md:gap-[90px]  justify-between order-4 md:order-1'>
          <Link href="#" className='mt-6 lg:mt-0'>
            <img src='logowhite.svg' />
          </Link>
          <div className='flex mt-6 md:mt-0  justify-between  gap-10 md:gap-3   lg:px-0  order-3'>
            {socialmedia.map((item) => {
              return <Link key={item.id} href={item.path} target='_blank' >
                <img className='w-[24px] md:w-[20px]' src={item.img} />
              </Link>
            })}
          </div>
        </div>
        <NewsletterSignup />
        <div className='  capitalize grid grid-cols-2 px-6 mb-3 text-neutral-grayishBlue md:px-2 items-center text-xs md:text-base justify-between md:gap-x-[130px] gap-y-1 order-2 md:order-3 w-[300px] md:w-[400px]'>
          {menu.map((item) => {
            return <div key={item.id} className='hover:text-primary-red px-1 py-1 '>
              <Link href={item.path}>
                {item.title}
              </Link>
            </div>
          })}
        </div>
      </div>


    </div>
  )
}
