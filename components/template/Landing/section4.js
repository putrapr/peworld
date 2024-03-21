import React from 'react'
import Image from 'next/image'

const Section4 = ({ className }) => {
  const data = [
    {
      image: '/img/landing/4.svg',
      name: 'Harry Styles',
      job: 'Quality Assurance',
      description: 'Saya mendapatkan pekerjaan dari bidang yang saya sukai berkat peworld ini'
    },
    {
      image: '/img/landing/5.svg',
      name: 'Niall Horan',
      job: 'Mobile Developer',
      description: 'Tidak perlu waktu lama untuk dihubungi perusahaan'
    },
    {
      image: '/img/landing/6.svg',
      name: 'Louis Tomlinson',
      job: 'Web Developer',
      description: 'Walau tanpa pengalaman saya masih bisa memamerkan project dan itu bisa membuat perusahaan melirik saya untuk direkrut'
    }
  ]
  return (
    <section className={`bg-[#FAFBFC] max-sm:mx-4 ${className}`}>
      <div className='flex justify-center mb-14'>
        <h1 className='text-4xl'>Opini mereka tentang peworld</h1>
      </div>
      
      {/* Carousel */}
      <div className='flex max-sm:flex-col max-sm:items-center justify-center gap-6'>
        {
          data.map((item, index) => (
            <div key={index} className='w-80 h-[410px] p-12 bg-white flex flex-col items-center' style={{ filter: 'drop-shadow(0 5px 4px #e4e4ec)' }}>
              <Image 
                src={item.image}
                alt="dp"
                width={120}
                height={120}
              />
              <h2 className='mt-3'>{item.name}</h2>
              <p style={{ color: '#9EA0A5' }}>{item.job}</p>
              <p className='text-center'>{item.description}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Section4