import React from 'react'
import Image from 'next/image'

const section2 = ({ className }) => {
  const arrText = [
    'Talenta hebat tersaring dengan baik.',
    'Terdapat portofolio yang dapat dilihat secara real-time.',
    'Banyak pilihan keahlian untuk menunjang kebutuhan perusahaan.',
    'Banyak perusahaan ternama.'
  ]

  return (
    <section className={`grid grid-cols-2 ${className}`}>
      <div id='left-side' className='flex justify-end mr-10'>
        <Image 
          src='\img\landing\2.svg'
          alt='1'
          // width={567}
          // height={489}
          width={0}
          height={0}
          className='w-[530px] h-auto'
        />
      </div>
      
      <div id='right-side' className='mt-8 -ms-4 w-[520px]'>
        <h1 className='text-4xl'>Kenapa harus mencari talent di peworld</h1>
        {
          arrText.map((item, index) => (
            <div className='flex items-center gap-4 mt-6' key={index}>
              <Image
              src='\icons\check-purple.svg'
              alt='check purple'
              width={23}
              height={23}
              />
              <p className='text-[#46505C]'>{item}</p>                
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default section2