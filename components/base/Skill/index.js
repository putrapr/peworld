import React from 'react'

const index = ({ className, children }) => {
  return (
    <>
    <div className={`inline-block rounded border-2 border-[#FBB017] bg-[#f3ce69] text-white px-4 py-[0.1rem] ${className} `}>{children}</div>
    {/* <button className='bg-[#FBB017] text-white font-bold'>Second</button> */}
    </>
    
    )
}

export default index