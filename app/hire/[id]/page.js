'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Skill from '@/components/base/Skill'
import Input from '@/components/base/Input'
import Button from '@/components/base/Button'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'

const Hire = ({ params: {id} }) => {
  const router = useRouter()
  const [worker, setWorker] = useState({})
  const [skills, setSkills] = useState([])
  
  const getWorker = async () => {
    const result = await axios.get('/v1/workers/'+id)
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

  const addHire = async (e) => {
    e.preventDefault()
    const data = {
      message_purpose: e.target.purpose.value,
      worker_id: id,
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      desciption: e.target.description.value
    }
    
    try {
      await axios.post('/v1/hire', data, { withCredentials: true })
      Swal.fire({
        icon: "success",
        title: "Berhasil mengirim pesan ke "+worker.name,
      })
      router.push('/worker/'+id)
    } catch (err) {
      Swal.fire({
        icon: "error",
        text: "Gagal mengirim pesan ke "+worker.name,
      }) 
    }
  }

  useEffect(() => {
    getWorker()
    getSkills()
  },[])

  return (
    <div className='bg-[#F6F7F8]'>
      {/* Main Content */}
      <main className='relative max-sm:mx-6 mx-16 top-16 rounded-lg'>
        <div className='flex max-sm:flex-col max-sm:justify-start max-sm:gap-12 justify-between'>
          {/* Left Side */}
          <div className='max-sm:w-full w-[450px] shadow-ring max-sm:ms-0 ms-24'>
            {/* Card */}
            <div className='bg-white p-8 rounded-lg'>
              <div className='flex flex-col items-center'>
                <Image 
                  src={(worker.photo == null) ? '/img/default.png' : worker.photo}
                  alt="dp"
                  width={180}
                  height={180}
                  className="rounded-full"
                />
              </div>
              <div>
                <h4 className='text-2xl mt-10'>{worker?.name}</h4>
                <p>{worker?.job_desk}</p>
                { worker?.domicile != null && 
                  <div className='text-[#9EA0A5] flex gap-3 mt-3'>
                    <Image
                      src='/icons/locate.svg' alt='locate'
                      width={18} height={18}
                    />
                    <p>{worker?.domicile}</p>
                  </div>
                }
                <p className='text-[#9EA0A5] mt-4'>{worker?.description}</p>
              </div>
              { skills.length != 0 && 
                <div>
                  <h4 className='text-2xl mt-8'>Skill</h4>
                  <div className='flex flex-wrap mt-4 gap-[.4rem_.7rem]'>
                    {
                      skills?.map((item, index) => (                      
                        <Skill key={index}>{item.skill_name}</Skill>
                      ))
                    }
                  </div>
                </div>
              }
            </div>
          </div>

          {/* Right Side */}
          <div className='max-sm:w-full w-[750px]'>            
            {/* Hubungi */}
            <form onSubmit={addHire} className='rounded-lg max-sm:px-0 px-8'>
              <h2 className='text-4xl'>Hubungi {worker?.name}</h2>
              <p className='mt-4 text-2xl'>Isi formulir di bawah ini </p>
              <div className='max-sm:mt-6 mt-16'>
                <Input name='purpose' label='Tujuan tentang pesan ini' placeholder='Proyek / Hire' />
                <Input name='name' label='Nama lengkap' placeholder='Masukan nama lengkap' />
                <Input name='email' label='Email' placeholder='Masukan email' />
                <Input name='phone' label='No handphone' placeholder='Masukan no handphone' />
                <div className="mb-3">
                  <label for="deskripsi" className="text-[#9EA0A5] text-xs">Deskripsi</label>
                  <textarea name='description' className="w-full text-sm p-4 border border-[#E2E5ED] rounded focus:outline-[#5E50A1]" id="deskripsi" rows="7" placeholder='Deskripsikan / jelaskan lebih detail'></textarea>
                </div>
              </div>
              <Button bgColor='yellow' className='w-full h-12 mt-10'>Hire</Button>
            </form>
          </div>
        </div>
      </main>    
    <div className='max-sm:h-24 max-sm:mt-24 h-40 mt-40'></div>
  </div>
  )
}

export default Hire