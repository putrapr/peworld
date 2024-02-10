import Image from 'next/image'
import Link from 'next/link'
// import Button from '@/components/base/Button'
import Skill from '@/components/base/Skill'
import { getWorker } from '@/service/worker'

const Page = async () => {
  const id = '0752990f-b91c-4b9f-afb6-b4e8e5442481'
  const id2 = '6d1ff22e-76b6-4260-92da-073a6e6119dc'
  const { photo, name, job_desk, domicile, description } = await getWorker(id)

  return (
    <div className='bg-[#F6F7F8] max-sm:px-4 max-sm:py-12 px-[8.5rem] py-16'>
      <main className=' rounded-lg border bg-white'>        
        <div className='h-48 bg-[#5E50A1] flex justify-end items-end rounded-t-lg'>
          <button type="button" className='text-white text-xl mb-4 mr-6 flex items-center gap-2'>
            <Image
              src='/icons/pencil-white.svg'
              alt='pencil-white'
              width={15}
              height={15}
            />
            <p>Ubah Latar</p>
          </button>        
        </div>
        
        {/* Content */}
        <div className='max-sm:mx-4 mx-[4.5rem] max-sm:-mt-[4.5rem] -mt-20'>
          <Link href='/worker/edit'>
            <Image 
              // src={ (user.image != 'default.jpg') ? "/img/default.png" : 'user.image' }
              src= "/img/default.png"
              alt="dp" 
              width={150} 
              height={150}
              className="max-sm:w-32 max-sm:h-32 rounded-circle"
            />
          </Link>
          <h4 className='mt-6 text-2xl'>{name}</h4>
          <p className='mb-2 text-sm'>{job_desk}</p>
          <p className='mb-2 text-[#9EA0A5] flex gap-2'>
            <Image
              src='\icons\locate.svg'
              alt='locate'
              width={15}
              height={15}
            />
            <p className='text-sm'>{domicile}</p> 
          </p>
          <p className='mb-2 text-[#9EA0A5] text-sm'>Freelancer</p>
          <p className='max-sm:w-full max-sm:text-justify w-[700px] text-[#9EA0A5] text-sm my-6'>
            {description}
          </p>
          {/* <Button className='w-72 h-12 text-sm'>Hire</Button> */}

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

          </div>
        </div>
        <div style={{ height: '4rem' }}></div>
      </main>
    </div>
  )
}

export default Page