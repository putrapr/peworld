import React from 'react'
import Image from 'next/image'
import ButtonOutline from '@/components/base/ButtonOutline'

const section5 = () => {
  
  return (
    <div className='text-white flex justify-center items-center h-[450px] p-36'>
      <div className='w-full h-56 bg-[#5E50A1] rounded bg-[url("/img/landing/wave.svg")] bg-no-repeat bg-cover'>
        <div className='flex justify-between items-center p-16'>
          <div>
            <h1 className='w-80 text-white text-4xl'>Masih Ragu ?</h1>
            <h3 className='text-3xl'>Ayo mulai dari sekarang</h3>
          </div>
          <div>
            <ButtonOutline className='w-48 h-16'>Mulai Dari Sekarang</ButtonOutline>
          </div>
        </div>
      </div>
    </div>
  )
}

export default section5