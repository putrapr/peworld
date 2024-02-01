import React from 'react'

const index = ({ borderColor = 'purple', className, children, ...props }) => {
  if (borderColor == 'purple') borderColor = 'border-[#5E50A1] text-[#5E50A1]'
  else if (borderColor == 'yellow') borderColor = 'border-[#FBB017] text-[#FBB017]'
  return (
    <button {...props} className={` ${borderColor} ${className} rounded bg-white font-bold hover:bg-[#e9e8e8] active:ring-2 border`}>{children}</button>
  )
}

export default index