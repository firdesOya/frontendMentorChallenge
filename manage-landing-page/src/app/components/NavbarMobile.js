import Link from 'next/link'
import React from 'react'

export default function NavbarMobile({ menu, toggleClick }) {
  const filteredMenu = menu.filter(item => item.title !== 'home' && item.title !== 'privacy policy');

  return (
    <div  className=' absolute top-0 pt-20 px-5 left-0 bg-opacity-50 bg-neutral-grayishBlue w-full min-h-screen h-auto'>
      <div className='flex flex-col bg-white rounded-md gap-6 mt-8 py-10 px-4 text-neutral-veryDarkBlue capitalize justify-center items-center '>
        {
          filteredMenu.map((item) => {
            return <div key={item.id}>
              <Link onClick={toggleClick} href={item.path} className='text-neutral-veryDarkBlue px-1 py-1  hover:text-neutral-grayishBlue '>{item.title}</Link>
            </div>
          })
        }
      </div>
    </div>
  )
}
