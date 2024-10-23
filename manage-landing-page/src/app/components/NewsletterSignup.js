'use client'
import React, { useState } from 'react'
import Button from './Button'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('')

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please insert a valid email');
      return;
    }
    console.log('eposta gönderildi');
    setEmail('');
    setError('')
  }

  const onChange = (e) => {
    setEmail(e.target.value)
    if (error) {
      setError('');
    }
  }


  return (
    <form onSubmit={onSubmit} className='order-1 md:order-4 flex flex-col pb-5 items-start '>
      <div>
        <input
          type='text'
          placeholder='Updates in your inbox... '
          value={email}
          onChange={onChange}
          className={`${error ? 'text-red-500' : 'text-neutral-darkGray'} px-4 py-3 mr-3 w-[230px]  rounded-full  border focus:outline-none border-neutral-grayishBlue  focus:border-primary-red text-xs `} />
        <Button name="Go" type='submit'  />
      </div>
    <div className='min-h-[20px] px-4 mt-2'>
    {error && <p className='text-red-500 text-xs'>{error}</p>}
    </div>
    </form>
  )
}
