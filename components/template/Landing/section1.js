import React from 'react'
import Image from 'next/image'
import Button from '@/components/base/Button'

const section1 = () => {
  return (
    <section className='grid grid-cols-5 pl-[8.5rem] pr-28'>
      <div id='left-side' className='col-span-2'>
        <div className='w-[450px] mt-36'>
          <h1 className='text-5xl leading-normal'>Talenta terbaik negri untuk perubahan revolusi 4.0</h1>              
        </div>
        <p className='text-lg text-[#46505C] mt-4'>
          Karya terbaik berawal dari tim yang hebat
        </p>
        <p className='text-[#46505C]'>
          Ciptakan mulai dari sini
        </p>
        <Button className='w-52 h-16 mt-14'>Mulai Dari Sekarang</Button>
      </div>

      <div id='right-side' className='col-span-3 flex justify-end'>
        <Image 
          src='\img\landing\1.svg'
          alt='1'
          width={570}
          height={570}
        />
      </div>
    </section>    
  )
}

export default section1