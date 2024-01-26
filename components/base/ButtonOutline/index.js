import React from 'react'

const index = ({ borderColor = 'yellow', className, children }) => {
  if (borderColor == 'purple') borderColor = 'border-[#5E50A1] text-[#5E50A1]'
  else if (borderColor == 'yellow') borderColor = 'border-[#FBB017] text-[#FBB017]'
  return (
    <button className={`rounded bg-white font-bold hover:bg-[#f7f7f7] active:ring-2 border-2 ${borderColor} ${className} `}>{children}</button>
  )
}

export default index