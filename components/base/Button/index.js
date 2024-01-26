import React from 'react'

const index = ({ bgColor = 'purple', className, children }) => {
  if (bgColor == 'purple') bgColor = 'bg-[#5E50A1] hover:bg-[#53478c]'
  else if (bgColor == 'yellow') bgColor = 'bg-[#FBB017] hover:bg-[#EAA61B]'

  return (
    <button className={`rounded text-white font-bold active:ring-2 ${bgColor} ${className} `}>{children}</button>
  )
}

export default index