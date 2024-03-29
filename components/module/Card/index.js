'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Skill from '@/components/base/Skill'
import Button from '@/components/base/Button'

const Card = ({ data, className }) => {
  const router = useRouter()
  const { id, photo, name, job_desk, domicile, skills } = data

  return (
    <div className={className}>
      <div className='flex justify-between'>
        <div className='flex justify-between max-sm:p-4 p-6 '>
          <div className='max-sm:ms-0 ms-6'>
            <div className='w-[100px] flex'>
              <Image
                src={ (photo == null) ? "/img/default.png" : photo }
                alt="dp"
                width={100}
                height={100}
                className="w-full rounded-full"
              />
            </div>
          </div>
          <div className='ms-6'>
            <h4 className='text-2xl'>{name}</h4>
            <p className='text-sm text-[#9EA0A5]'>{job_desk}</p>
            <p className='text-sm text-[#9EA0A5] mt-1 flex gap-2'>
              { domicile && 
                <Image
                  src='\icons\locate.svg'
                  alt='locate'
                  width={15}
                  height={15}
                />
              }
              <p>{domicile}</p>              
            </p>
            <div className='flex flex-wrap gap-2 mt-3 max-sm:mt-8'>
              { 
                skills.map((item, index) => (
                  <Skill key={index}>{item}</Skill>
                ))
              }
            </div>                  
          </div>
        </div>
        <div className='max-sm:hidden flex items-center'>
          <Button className='w-36 h-12 max-sm:mr-0 mr-20 font-normal text-sm'
            onClick={() => router.push('/worker/'+id)}
          >Lihat Profile</Button>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Card