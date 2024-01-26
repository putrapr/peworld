import React from 'react'

const index = ({ className, children }) => {
  return (
    <button className={`rounded border border-[#5E50A1] text-[#5E50A1] bg-white font-bold hover:bg-[#53478c] hover:text-white active:ring-2 ${className} `}>{children}</button>
  )
}

export default index