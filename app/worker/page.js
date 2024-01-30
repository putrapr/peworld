import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/base/Button'
import Skill from '@/components/base/Skill'

const page = () => {
  return (
    <div className='bg-[#F6F7F8] px-[8.5rem] py-16'>
      <main className=' rounded-lg border bg-white'>        
        <div className='h-48 bg-[#5E50A1] flex justify-end items-end rounded-t-lg'>
          <button type="button" className='text-white text-xl mb-4 mr-6'>
            <Image
              src='/icons/pencil.svg'
              alt='pencil'
              width={15}
              height={15}
            />
            <p>Ubah Latar</p>
          </button>        
        </div>
        
        {/* Content */}
        <div className='mx-[4.5rem] -mt-20'>
          <Link href=''>
            <Image 
              // src={ (user.image != 'default.jpg') ? "/img/default.png" : 'user.image' }
              src= "/img/default.png"
              alt="dp" 
              width={150} 
              height={150} 
              className="rounded-circle"
            />
          </Link>
          <h4 className='mt-6 text-2xl'>Louis Tomlinson</h4>
          <p className='mb-2 text-sm'>Web developer</p>
          <p className='mb-2 text-[#9EA0A5] flex gap-2'>
            <Image
              src='\icons\locate.svg'
              alt='locate'
              width={15}
              height={15}
            />
            <p className='text-sm'>Purwokerto</p> 
          </p>
          <p className='mb-2 text-[#9EA0A5] text-sm'>Freelancer</p>
          <p className='w-[700px] text-[#9EA0A5] text-sm my-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.
          </p>
          <Button className='w-72 h-12 text-sm'>Hire</Button>

          <h4 className='font-bold text-xl mt-10'>Skill</h4>
          <div className='flex flex-wrap w-80 mt-3 text-xs'>
            <Skill className='py-1'>PHP</Skill>
          </div>
          <div className='mt-10'>            
            <div className='flex gap-4 items-center my-6'>
              <Image
                src='/icons/mail.svg'
                alt='mail'
                width={22}
                height={22}
              />
              <p className='text-[#9EA0A5] text-sm'>Louistommo@gmail.com</p>
            </div>

            <div className='flex gap-4 items-center my-6'>
              <Image
                src='/icons/instagram.svg'
                alt='mail'
                width={22}
                height={22}
              />
              <p className='text-[#9EA0A5] text-sm'>@Louist91</p>
            </div>

            <div className='flex gap-4 items-center my-6'>
              <Image
                src='/icons/github.svg'
                alt='mail'
                width={22}
                height={22}
              />
              <p className='text-[#9EA0A5] text-sm'>@Louistommo</p>
            </div>

            <div className='flex gap-4 items-center my-6'>
              <Image
                src='/icons/gitlab.svg'
                alt='mail'
                width={22}
                height={22}
              />
              <p className='text-[#9EA0A5] text-sm'>@Louistommo91</p>
            </div>

            {/* <div>
              <Image
                src='/icons/instagram.svg'
                alt='mail'
                width={15}
                height={15}
              />
              <p className='text-[#9EA0A5]'>@Louist91</p>
            </div>

            <div>
              <Image
                src='/icons/github.svg'
                alt='mail'
                width={15}
                height={15}
              />
              <p className='text-[#9EA0A5]'>@Louistommo</p>
            </div>

            <div>
              <Image
                src='/icons/gitlab.svg'
                alt='mail'
                width={15}
                height={15}
              />
              <p className='text-[#9EA0A5]'>@Louistommo91</p>
            </div> */}

          </div>
        </div>
        <div style={{ height: '4rem' }}></div>
      </main>
    </div>
  )
}

export default page