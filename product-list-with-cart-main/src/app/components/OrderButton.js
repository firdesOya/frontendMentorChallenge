import React from 'react'

export default function OrderButton({title}) {
  return (
    <button className="bg-red hover:bg-[#962C0C] text-white text-sm max-w-[330px] w-full font-semibold text-center py-4 rounded-full">
      {title}
    </button>
  );
}
