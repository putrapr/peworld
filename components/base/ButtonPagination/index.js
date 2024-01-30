import React from 'react'

const index = ({ checked=false, children }) => {
  const color = (checked) ? 'bg-[#5E50A1] text-white' : 'bg-white text-[#9EA0A5]' 
  return (
    <button className={`flex justify-center items-center w-14 h-14 border-0 rounded drop-shadow-md text-lg ${color}`}>{ children }</button> 
  )
}

export default index