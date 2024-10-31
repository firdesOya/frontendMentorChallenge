import React from 'react'
import { cardList } from '../constant/config'
import Card from './Card'
import Link from 'next/link'

export default function CardList() {
  return (
    <div className='grid  gap-5 grid-cols-1  md:grid-cols-4 '>
      {cardList.map((item) => {
        return <Link href="#" key={item.id}>
          <Card title={item.title} imgDesktop={item.imgDesktop} imgMobile={item.imgMobile} />
        </Link>
      })}
    </div>
  )
}
