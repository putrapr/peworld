import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getCompany } from '@/service/recruiter'

const Company = async () => {
  const objCompany = await getCompany()
  const { name, position, city, company, description, linkedin, instagram } = objCompany

  return (
    <div className='bg-[#F6F7F8]'>
      {/* Main Content */}
      <main className='bg-white relative mx-[8.5rem] top-[5rem] rounded-lg'>
        <div className='h-52 bg-[#5E50A1] rounded-[8px_8px_0_0] flex justify-end items-end'>
          <button type="button" className='text-white mb-4 mr-6 text-xl flex items-center gap-2'>
            <Image width={15} height={15} src='/icons/pencil-white.svg' alt='pencil-white' />
            <p>Ubah Latar</p>      
          </button>        
        </div>
        
        <div className='mx-[4.5rem] -mt-20'>
          <Image src="/img/default.png" alt="logo" width={150} height={150}/>
          <h4 className='mt-6 text-2xl'>{name}</h4>
          <p className='mt-1'>{position}</p>          
          { city && 
            <div className='text-[#9EA0A5] flex gap-2 text-sm mt-1'>
              <Image width={15} height={15} src='/icons/locate.svg' alt='locate' />
              <p>{city}</p>
            </div>
          }
          <p className='mt-4'>{company}</p>
          <p className='text-[#9EA0A5] w-[700px] text-justify mt-8'>{description}</p>
          {/* <Button className='w-80 h-12 mt-4'>Edit Profile</Button> */}
          <Link href='/company/edit' className='flex justify-center items-center w-72 h-12 text-sm bg-[#5E50A1] hover:bg-[#53478c] rounded text-white font-semibold tracking-wider active:ring-2'
          >Edit</Link>
          <div className='mt-12'>
            { (linkedin != null) && 
              <div className='mt-6 flex gap-4'>
                <Image width={22} height={22} src='/icons/linkedin.svg' alt='linkedin'/>
                <p className='text-[#9EA0A5]'>{linkedin}</p>
              </div>
            }
            { (instagram != null) && 
              <div className='mt-6 flex gap-4'>
                <Image width={22} height={22} src='/icons/instagram.svg' alt='instagram'/>
                <p className='text-[#9EA0A5]'>{instagram}</p>
              </div>
            }
          </div>
        </div>
        <div className='h-16'></div>
      </main>
      
      <div className='h-60'></div>
    </div>
  )
}

export default Company