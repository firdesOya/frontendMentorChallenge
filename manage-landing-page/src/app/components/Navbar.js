import Link from 'next/link'

export default function Navbar({ menu }) {
  const filteredMenu = menu.filter(item => item.title !== 'home' && item.title !== 'privacy policy');


  return (
    <nav>
      <ul className='flex flex-col md:flex-row gap-2 capitalize'>
        {filteredMenu.map((item) => {
          return (
            <li key={item.id} className='text-neutral-veryDarkBlue px-1 py-1  hover:text-neutral-grayishBlue '>
              <Link href={item.path}>{item.title}</Link>
            </li>)
        })}
      </ul>
    </nav>
  )
}
