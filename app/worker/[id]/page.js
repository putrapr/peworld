'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Card from '@/components/module/Card'
// import Button from '@/components/base/Button'
import Skill from '@/components/base/Skill'
import axios from 'axios'
// import Tabs from '@/components/module/Tabs'
import Tabs from '@/components/template/WorkerId/TabsWorker'

const WorkerId = ({params: {id}}) => {
  const [worker, setWorker] = useState({})
  const [skills, setSkills] = useState([])
  
  const getWorker = async () => {
    const env = process.env.NEXT_PUBLIC_URL_BE
    const result = await axios.get(env+'/v1/workers/'+id)
    setWorker(result.data.data)
  }

  const getSkills = async () => {
    try {
      const res = await axios.get('/v1/skills/'+id)
      setSkills(res.data.data)
    } catch (err) {
      Swal.fire({
        icon: "error",
        text: "Gagal mendapatkan skill",
      }) 
    }
  }


  useEffect(() => {
    getWorker()
    getSkills()
  },[])
  
  return (
    <div className='bg-[#F6F7F8] max-sm:px-4 max-sm:py-12 px-[8.5rem] py-16'>
      <main className=' rounded-lg border bg-white'>        
        <div className='h-48 bg-[#5E50A1] flex justify-end items-end rounded-t-lg'>
        </div>
        
        {/* Content */}
        <div className='max-sm:mx-4 mx-[4.5rem] max-sm:-mt-[4.5rem] -mt-20'>
          <Image 
            // src={ (user.image != 'default.jpg') ? "/img/default.png" : 'user.image' }
            src= "/img/default.png"
            alt="dp" 
            width={150} 
            height={150}
            className="max-sm:w-32 max-sm:h-32 rounded-circle"
          />
          <h4 className='mt-6 text-2xl'>{worker.name}</h4>
          <p className='mb-2 text-sm'>{worker.job_desk}</p>
          <div className='mb-2 text-[#9EA0A5] flex gap-2'>
            <Image width={15} height={15} src='\icons\locate.svg' alt='locate' />
            <p className='text-sm'>{worker.domicile}</p> 
          </div>
          <p className='mb-2 text-[#9EA0A5] text-sm'>{worker.workplace}</p>
          <p className='max-sm:w-full max-sm:text-justify w-[700px] text-[#9EA0A5] text-sm my-6'>
            {worker.description}
          </p>
          {/* <Button className='w-72 h-12 text-sm'>Hire</Button> */}

          {/* <h4 className='font-bold text-xl mt-10'>Skill</h4>
          <div className='flex flex-wrap w-80 mt-3 text-xs'> */}
            {/* <Skill className='py-1'>PHP</Skill> */}
            {
              // worker.map((item, index) => (              
              //   <Card data={item} key={index}/>
              // ))
            }
          {/* </div> */}
          <div className='flex flex-wrap gap-2 w-80 mt-3 text-xs'>
            { 
              skills.map((item, index) => (
                <Skill key={index} className='py-1'>{item.skill_name}</Skill>
              ))
            }
          </div>
          
          <Tabs id={id} />
        </div>
        <div style={{ height: '4rem' }}></div>
      </main>
    </div>
  )
}

export default WorkerId