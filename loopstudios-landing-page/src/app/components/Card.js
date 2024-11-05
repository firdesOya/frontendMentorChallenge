import React from 'react'

export default function Card({ title, imgDesktop, imgMobile }) {
  return (
    <div className='relative group cursor-pointer'>
      <img
        src={imgMobile}
        alt={title}
        className="w-full h-auto block md:hidden"
      />
      <img
        src={imgDesktop}
        alt={title}
        className="w-full h-auto hidden md:block"
      />
      <span className='absolute z-10 bottom-4 left-4 md:bottom-8 md:left-8 font-josefin text-xl w-24 text-white uppercase group-hover:text-black'>{title}</span>
      <div className="absolute inset-0 bg-black opacity-40 md:opacity-30 z-0 group-hover:opacity-70 group-hover:bg-white"></div>
    </div>
  )
}
