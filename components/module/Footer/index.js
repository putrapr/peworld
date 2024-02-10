import React from 'react'
import Image from 'next/image'

const index = ({className}) => {
  return (
    <footer className={`w-full h-[330px] bg-[#5E50A1] ${className}`}>      
      <div className='flex flex-col max-sm:mx-4 mx-[8.5rem]'>
        <Image
          src='/icons/logo-white.svg'
          alt='logofooter'
          width={178}
          height={50}
          className='mt-16 mb-7'
        />
        <p className='text-lg text-white mb-14'>Platform untuk mendapatkan talenta terbaik</p>
          <div className='border border-white'></div>
          <div className='flex justify-between mt-7'>
            <p className='text-lg text-white max-sm:w-[8.5rem]'>2024 Peworld. All right reserved</p>
            <div className='flex justify-between max-sm:gap-4 gap-20'>
              <p className='text-lg text-white'>Telepon</p>
              <p className='text-lg text-white'>Email</p>
            </div>
          </div>
      </div>
    </footer>
  )
}

export default index