import React from 'react'
import Image from 'next/image'

const section2 = () => {
  const arrText = [
    'Talenta hebat tersaring dengan baik.',
    'Terdapat portofolio yang dapat dilihat secara real-time.',
    'Banyak pilihan keahlian untuk menunjang kebutuhan perusahaan.',
    'Banyak perusahaan ternama.'
  ]

  return (
    <section className='grid grid-cols-2 pl-[6.5rem] pr-28'>
      <div id='left-side' className='pr-8'>
        <Image 
          src='\img\landing\2.svg'
          alt='1'
          width={567}
          height={489}
        />
      </div>
      
      <div id='right-side'>
        <div className='mt-8'>
          <h1 className='text-4xl'>Kenapa harus mencari talent di peworld</h1>
          {
            arrText.map((item, index) => (
              <div className='flex items-center gap-4 mt-6' key={index}>
                <Image
                src='\icons\check-purple.svg'
                alt='check purple'
                width={21}
                height={21}
                />
                <p className='text-[#46505C]'>{item}</p>                
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default section2