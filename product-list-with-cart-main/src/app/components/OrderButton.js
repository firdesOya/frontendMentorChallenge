import React from 'react'

export default function OrderButton({title}) {
  return (
    <button className="bg-red hover:bg-[#962C0C] text-white text-sm font-semibold px-24 py-4 rounded-full">
      {title}
    </button>
  );
}
