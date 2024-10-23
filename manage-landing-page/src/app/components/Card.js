import React from 'react'

export default function Card({ name, image, quote }) {
  return (
    <div className='bg-neutral-lightGray flex flex-col cursor-pointer px-6 min-w-[350px] max-w-[550px] pb-2 items-center h-[200px]  relative pt-[60px] mt-16'>
      <div className='absolute -top-10 flex items-center justify-center '>
        <img width={80} height={80} src={image} />
      </div>
      <span className='mt-3'>{name}</span>
      <p className='text-sm'>"{quote}"</p>
    </div>
  )
}
