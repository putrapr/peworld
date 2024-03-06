import React from 'react'

const index = ({ checked=false, display='flex', children, ...props }) => {
  const color = (checked) ? 'bg-[#5E50A1] text-white' : 'bg-white text-[#9EA0A5]' 
  return (
    <button {...props} className={`${color} ${display} justify-center items-center w-14 h-14 border-0 rounded drop-shadow-md text-lg`}>{ children }</button> 
  )
}

export default index