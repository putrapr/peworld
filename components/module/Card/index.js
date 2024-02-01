/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
// import Skill from '@/components/base/Skill'
import Button from '@/components/base/Button'

const index = ({ data }) => {
  const router = useRouter()
  const { id, photo, name, job_desk, domicile, skills } = data
  // const arrSkill = [];
  // if (skills != '-') {                
  //   const arrSkills = skills.split(", ");
  //   arrSkills.forEach((item) => {
  //     arrSkill.push(
  //       <Skill>{item}</Skill>
  //     );
  //   });          
  // }

  return (
    <div key={id}>
      <div className='flex justify-between'>
        <div className='flex justify-between p-6'>
          <div className='flex items-center ms-6'>
            <Image
              src={ (photo != 'default.jpg') ? "/img/default.png" : photo }
              alt="dp"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <div className='ms-6'>
            <h4 className='text-2xl'>{name}</h4>
            <p className='text-sm text-[#9EA0A5]'>{job_desk}</p>
            <p className='text-sm text-[#9EA0A5] mt-1 flex gap-2'>
              <Image
                src='\icons\locate.svg'
                alt='locate'
                width={15}
                height={15}
              />
              <p>{domicile}</p>              
            </p>
            {/* <div className='flex gap-2 mt-3'>
              { arrSkill }
            </div>                   */}
          </div>
        </div>
        <div className='flex items-center'>
          <Button onClick={() => router.push('/worker')} className='w-36 h-12 mr-20 font-normal text-sm'>Lihat Profile</Button>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default index