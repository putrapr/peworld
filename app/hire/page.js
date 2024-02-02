import React from 'react'
import Image from 'next/image'
import Skill from '@/components/base/Skill'
import Input from '@/components/base/Input'
import Button from '@/components/base/Button'

const page = () => {
  const skill = ['Phyton', 'Laravel', 'Golang', 'Javascript', 'PHP', 'HTML', 'C++', 'Kotlin', 'Swift']
  return (
    <div className='bg-[#F6F7F8]'>
      {/* Main Content */}
      <main className='relative mx-16 top-16 rounded-lg'>
        <div className='flex justify-between'>
          {/* Left Side */}
          <div className='w-[450px] shadow-ring ms-24'>
            {/* Card */}
            <div className='bg-white p-8 rounded-lg'>
              <div className='flex flex-col items-center'>
                <Image 
                  src="/img/default.png"
                  alt="dp"
                  width={180}
                  height={180}
                  className="rounded-full"
                />
              </div>
              <div>
                <h4 className='text-2xl mt-10'>Putra Prasetya</h4>
                <p>Fullstack Developer</p>
                <div className='text-[#9EA0A5] flex gap-3 mt-3'>
                  <Image
                    src='/icons/locate.svg' alt='locate'
                    width={18} height={18}
                  />
                  <p>Purwokerto, Jawa Tengah</p>
                </div>
                <p className='text-[#9EA0A5] mt-4'>Membangun dan mengembangkan website yang lancar, menarik, interaktif, dan data yang terpelihara dengan baik.</p>
              </div>
              <h4 className='text-2xl mt-8'>Skill</h4>
                <div className='flex flex-wrap mt-4 gap-[.4rem_.7rem]'>
                  {
                    skill.map((item, index) => (                      
                      <Skill key={index}>{item}</Skill>
                    ))
                  }
                </div>
            </div>
          </div>

          {/* Right Side */}
          <div className='w-[750px]'>
            
            {/* Hubungi */}
            <div className='rounded-lg px-8'>
              <h2 className='text-4xl'>Hubungi Putra Prasetya</h2>
              <p className='mt-4 text-2xl'>Isi formulir di bawah ini </p>
              <div className='mt-16'>
                <Input label='Tujuan tentang pesan ini' placeholder='Proyek / Hire' />
                <Input label='Nama lengkap' placeholder='Masukan nama lengkap' />
                <Input label='Email' placeholder='Masukan email' />
                <Input label='No handphone' placeholder='Masukan no handphone' />
                <div class="mb-3">
                  <label for="deskripsi" className="text-[#9EA0A5] text-xs">Deskripsi</label>
                  <textarea class="w-full text-sm p-4" id="deskripsi" rows="7" placeholder='Deskripsikan / jelaskan lebih detail'></textarea>
                </div>                
              </div>
              <Button bgColor='yellow' className='w-full h-12 mt-10'>Hire</Button>
            </div>
          </div>
        </div>
      </main>    
    <div className='h-60 mt-60'></div>
  </div>
  )
}

export default page