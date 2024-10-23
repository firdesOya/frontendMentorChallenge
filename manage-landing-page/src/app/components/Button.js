import React from 'react'

export default function Button({ name, className, type }) {
  return (
    <button
      type={type}
      className={`px-5 py-2 bg-primary-red shadow-xl transition-colors duration-300 text-white rounded-full text-sm cursor-pointer hover:bg-[#F98F76] ${className}`} >
      {name}
    </button>
  )
}
