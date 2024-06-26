import React from 'react'

{/* <Input label='Nama Lengkap' placeholder='Masukan nama lengkap'/> */}
const Input = ({ type='text', className, label, ...props }) => {
  return (
    <div className={'mb-6 '+className}>
      <label className='text-[#9EA0A5] text-xs ms-2'>{label}</label>
      <input {...props} type={type} className='w-full h-[50px] border border-[#E2E5ED] rounded px-3 focus:outline-[#5E50A1] text-sm'></input>
    </div>
  )
}

export default Input