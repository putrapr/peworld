import React from 'react'

const index = ({ className, children }) => {
  return (
    <div className={`${className} inline-block rounded border-2 border-[#FBB017] bg-[#f3ce69] text-white px-4 py-[0.1rem]`}>{children}</div>
  )
}

export default index