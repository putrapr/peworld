import Image from 'next/image'
import Link from 'next/link'
// import Button from '@/components/base/Button'
import Skill from '@/components/base/Skill'
import { getProfile } from '@/service/worker'
import Tabs from '@/components/module/Tabs'

const Profile = async () => {  
  const worker = await getProfile()
  // const worker = {
  //   name: 'a',
  //   job_desk: 'b',
  //   workplace: 'c',
  //   description: 'd',
  //   domicile: 'e'
  // }

  return (
    <div className='bg-[#F6F7F8] px-[8.5rem] py-16'>
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
        <div className='mx-[4.5rem] -mt-20'>
          <Link href='/profile/edit'>
            <Image 
              // src={ (user.image != 'default.jpg') ? "/img/default.png" : 'user.image' }
              src= "/img/default.png"
              alt="dp" 
              width={150} 
              height={150} 
              className="rounded-circle"
            />
          </Link>
          <h4 className='mt-6 text-2xl'>{worker.name}</h4>
          <p className='mb-2 text-sm'>{worker.job_desk}</p>
          <div className='mb-2 text-[#9EA0A5] flex gap-2'>
            <Image
              src='\icons\locate.svg'
              alt='locate'
              width={15}
              height={15}
            />
            <p className='text-sm'>{worker.domicile}</p> 
          </div>
          <p className='mb-2 text-[#9EA0A5] text-sm'>{worker.workplace}</p>
          <p className='w-[700px] text-[#9EA0A5] text-sm my-6'>
            {worker.description}
          </p>
          <Link href='/profile/edit' className='flex justify-center items-center w-72 h-12 text-sm bg-[#5E50A1] hover:bg-[#53478c] rounded text-white font-semibold tracking-wider active:ring-2'
          >Edit</Link>
          {/* <Button onClick={() => router.push('/profile/edit')} className='w-72 h-12 text-sm'>Edit</Button> */}
          {/* <Button className='w-72 h-12 text-sm'>Edit</Button> */}
          <h4 className='font-bold text-xl mt-10'>Skill</h4>
          <div className='flex flex-wrap w-80 mt-3 text-xs'>
            <Skill className='py-1'>PHP</Skill>
          </div>

          <Tabs />
          
        </div>
        <div style={{ height: '4rem' }}></div>
      </main>
    </div>
  )
}

export default Profile