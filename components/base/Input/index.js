import React from 'react'

// placeholder
const index = ({ className, label, ...props }) => {
  return (
    <div className={'mb-6 '+className}>
      <label className='text-[#9EA0A5] text-xs ms-2'>{label}</label>
      <input {...props} className='w-full h-[50px] border border-[#E2E5ED] px-3 rounded focus:outline-[#5E50A1] text-sm'></input>
    </div>
  )
}

export default index