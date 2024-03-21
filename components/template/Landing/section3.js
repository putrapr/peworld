import React from 'react'
import Image from 'next/image'

const Section3 = ({ className }) => {
  const arrSkill1 = [ 'Java', 'Kotlin', 'PHP', 'Javascript']
  const arrSkill2 = ['Golang', 'C++', 'Ruby', '10+ Bahasa lainnya']

  return (
    <div className={`max-sm:flex max-sm:flex-col grid grid-cols-2 ${className}`}>
      <div id='left-side' className='flex justify-end'>
        <div className='max-sm:mx-4 -mr-20'>
          <div className='max-sm:w-full w-[400px] mt-20'>
            <h1 className='text-4xl'>Skill Talent</h1>              
          </div>
          <p className='text-lg text-[#46505C] mt-4'>
            Banyak pilihan bahasa pemrograman yang dimiliki talent
          </p>
          <div className='grid grid-cols-2'>
            <div id="check-left">
              {
                arrSkill1.map((item, index) => (
                  <div className='flex items-center gap-4 mt-6' key={index}>
                    <Image
                    src='\icons\check-yellow.svg'
                    alt='check yellow'
                    width={21}
                    height={21}
                    />
                    <p className='text-[#46505C]'>{item}</p>               
                  </div>                
                ))
              }
            </div>

            <div>
              {
                arrSkill2.map((item, index) => (
                  <div className='flex items-center gap-4 mt-6' key={index}>
                    <Image
                    src='\icons\check-yellow.svg'
                    alt='check yellow'
                    width={21}
                    height={21}
                    />
                    <p className='text-[#46505C]'>{item}</p>               
                  </div>                
                ))
              }
            </div>
          </div>            
        </div>
      </div>

      <div id='right-side' className='max-sm:ms-4 flex justify-end ms-20'>
        <Image 
          src='\img\landing\3.svg'
          alt='3'
          width={540}
          height={540}
        />
      </div>
    </div>
  )
}

export default Section3