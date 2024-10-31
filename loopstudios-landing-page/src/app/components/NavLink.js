import Link from 'next/link'
import React from 'react'

export default function NavLink({id,title,onClick}) {
  return (
    <div key={id} className="px-4 flex flex-col py-3 group">
      <Link key={id} href="#" className="text-white text-2xl md:text-base my-4 md:my-0" onClick={onClick}>
        {title}
      </Link>
      <span className='w-0 mx-auto rounded-sm h-0.5 bg-white transition-all duration-300 group-hover:w-6 opacity-0 group-hover:opacity-100 '></span>
    </div>
  )
}
