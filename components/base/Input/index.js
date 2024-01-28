import React from 'react'

// placeholder
const index = ({ className, children, ...props }) => {
  return (
    <div>
      <label className='text-[#9EA0A5]'>{children}</label>
      <input {...props} className='w-full h-[50px] border border-[#E2E5ED] px-3 rounded focus:outline-[#5E50A1]'></input>
    </div>
  )
}

export default index