import React from 'react'
import Image from 'next/image'
import Button from '@/components/base/Button'

const Company = () => {
  return (
    <div className='bg-[#F6F7F8]'>
      {/* Main Content */}
      <main className='bg-white relative mx-[8.5rem] top-[5rem] rounded-lg'>
        <div className='h-52 bg-[#5E50A1] rounded-[8px_8px_0_0] flex justify-end items-end'>
          <button type="button" className='text-white mb-4 mr-6 text-xl flex items-center gap-2'>
            <Image
              src='/icons/pencil-white.svg'
              alt='pencil-white'
              width={15}
              height={15}
            />
            <p>Ubah Latar</p>      
          </button>        
        </div>
        
        <div className='mx-[4.5rem] -mt-20'>
          <Image src="/img/default.png" alt="logo" width={150} height={150}/>
          <h4 className='mt-6 text-2xl'>Gilang Firdaus</h4>
          <p className='mt-1'>Tech Recruiter</p>
          <div className='text-[#9EA0A5] flex gap-2 text-sm mt-1'>
            <Image
              src='/icons/locate.svg'
              alt='locate'
              width={15}
              height={15}
            />
            <p>Purwokerto, Jawa Tengah</p>
          </div>
          <p className='mt-4'>PT. Martabat Jaya Abadi</p>
          <p className='text-[#9EA0A5] w-[700px] text-justify mt-8'>Hello my full name is Gilang Firdaus. and my nickname is Gilang. I have an interest in the world of Management and Communication (Public Relations), besides that I am good at Human Recources, Technical Recruiter, Recruiter and Employer Branding, then I am a hard worker, I can work together well in a team or individual, high loyalty, quick to learn new things, persistent , resilient, honest, Good Communication and high motivation.</p>
          <Button className='w-80 h-12 mt-4'>Edit Profile</Button>
          <div className='mt-12'>
            <div style={{ display:'flex', gap:'1rem' }}>
              <Image width={22} height={22} src='/icons/mail.svg' alt='mail'/>
              <p className='text-[#9EA0A5]'>martabatjaya@gmail.com</p>
            </div>
            <div className='mt-6 flex gap-4'>
              <Image width={22} height={22} src='/icons/instagram.svg' alt='instagram'/>
              <p className='text-[#9EA0A5]'>martabat_jaya</p>
            </div>
            <div className='mt-6 flex gap-4'>
              <Image width={22} height={22} src='/icons/telephone.svg' alt='telephone'/>
              <p className='text-[#9EA0A5]'>0821-8190-1821</p>
            </div>
            <div className='mt-6 flex gap-4'>
              <Image width={22} height={22} src='/icons/linkedin.svg' alt='linkedin'/>
              <p className='text-[#9EA0A5]'>Martabat Jaya Abadi</p>
            </div>
          </div>
        </div>
        <div className='h-16'></div>
      </main>
      
      <div className='h-60'></div>
    </div>
  )
}

export default Company