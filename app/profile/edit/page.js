'use client'
import Image from 'next/image'
import Button from '@/components/base/Button'
import ButtonOutline from '@/components/base/ButtonOutline'
import Input from '@/components/base/Input'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Skill from '@/components/base/Skill'

const Page = () => {
  // States
  const [worker, setWorker] = useState({})
  const [skills, setSkills] = useState([])
  const [skill, setSkill] = useState('')

  // Functions
  const getProfile = async () => {
    const res = await axios.get('/v1/workers/profile', {withCredentials: true})
    setWorker(res.data.data)
  }

  const getSkills = async () => {
    const res = await axios.get('/v1/skills')
    setSkills(res.data.data)
  }
  
  // Hook
  useEffect(()=> {
    getProfile()
    getSkills()
  },[])
    
  return (
    <div className='bg-[#F6F7F8] -mb-60'>
      <div className='w-full h-[400px] bg-[#5E50A1]'></div>
      {/* Main Content */}
      <main className='relative mx-[8.5rem] -top-[21rem] rounded-lg'>
        <div className='flex justify-between gap-6'>

          {/* Left Side */}
          <div className='w-[300px]'>
            {/* Card */}
            <div className='bg-white p-8 rounded-lg'>
              <div className='flex flex-col items-center'>
                <Image 
                  src="/img/default.png"
                  alt="dp"
                  width={150}
                  height={150}
                  className="mb-3"
                />
                <button type="button" className='text-[#9EA0A5] text-xl mb-4 flex gap-2 items-center'>
                  <Image 
                    src='\icons\pencil-gray.svg'
                    alt='pencil-gray'
                    width={15}
                    height={15}
                  />
                  <p>Edit</p>
                </button>
              </div>
              <div>
                <h4 className='text-xl mt-4 font-bold'>{worker.name}</h4>
                <p className='text-sm mt-2'>{worker.job_desk}</p>
                <div className='text-sm text-[#9EA0A5] mt-3 flex gap-2'>
                  <Image
                    src='/icons/locate.svg'
                    alt='locate'
                    width={15}
                    height={15}
                  />
                  <p>{worker.domicile}</p>
                </div>
                <p className='text-sm text-[#9EA0A5] mt-3'>{worker.workplace}</p>
              </div>
            </div>
            {/* Button */}
            {/* <div className='mt-5'>
              <Button className='w-full h-12 text-sm'>Simpan</Button>
              <ButtonOutline className='w-full h-10 mt-4 text-sm'>Batal</ButtonOutline>
            </div> */}
          </div>

          {/* Right Side */}
          <div className='w-[750px]'>
            
            {/* Data diri */}
            <div className='bg-white rounded-lg'>
              <h4 className='text-xl pl-8 pt-8'>Data diri</h4>
              <hr className='mt-4 bg-[#C4C4C4]' />
              <form  className='p-8'>
                <Input name='name' defaultValue={worker.name} label='Nama Lengkap' placeholder='Masukan nama lengkap'/>
                <Input name='job_desk' defaultValue={worker.job_desk} label='Jabatan' placeholder='Masukan jabatan'/>
                <Input name='domicile' defaultValue={worker.domicile} label='Domisili' placeholder='Masukan domisili'/>
                <Input name='workplace' defaultValue={worker.workplace} label='Tempat kerja' placeholder='Masukan tempat kerja'/>
                
                <div className="mb-3 flex flex-col">
                  <label htmlFor="deskripsi-diri" className='text-xs text-[#9EA0A5] ms-2'>Deskripsi singkat</label>
                  <textarea name='description' defaultValue={worker.description} className="text-sm border p-3 mt-1 rounded focus:outline-[#5E50A1]" id="deskripsi-diri" rows="6" placeholder='Tuliskan deskripsi singkat'></textarea>
                </div>

                <div className='mt-8 flex gap-6'>
                  <ButtonOutline className='w-full h-12 text-sm'>Batal</ButtonOutline>
                  <Button type='submit' className='w-full h-12 text-sm'>Simpan</Button>                  
                </div>
              </form>             
            </div>

            {/* Skill */}
            <div className='bg-white mt-6 rounded-lg'>
              <h4 className='text-xl pl-8 pt-8'>Skill</h4>
              <hr className='mt-4 bg-[#C4C4C4]' />
              <div className='p-8'>
                <div className="flex gap-6">
                  <input type="text" className='text-sm w-full h-[50px] border p-3' placeholder="Java"/>
                  <Button bgColor='yellow' className='w-20 h-[50px] text-xs'>Simpan</Button>
                </div>
                <div className='flex gap-2 mt-3'>
                  { 
                    skills.map((item, index) => (
                      <Skill key={index} className='group flex items-center'
                      >{item.skill_name} <button className='hidden group-hover:inline -mr-3 ms-1'
                        ><Image
                            src='/icons/delete.svg'
                            alt='delete'
                            width={20}
                            height={20}
                          />
                        </button>
                      </Skill>
                    ))
                  }
                </div>
              </div>
            </div>

            {/* Pengalaman kerja */}
            <div className='bg-white mt-6 rounded-lg'>
              <h4 className='text-xl pl-8 pt-8'>Pengalaman kerja</h4>
              <hr className='mt-4 bg-[#C4C4C4]' />
              <div className='px-8 py-7'>
                <Input label='Posisi' placeholder='Web Developer' />
                <div className="flex gap-4 w-full">
                  <Input label='Nama Perusahaan' placeholder='PT Harus bisa' className='w-1/2'/>
                  <Input label='Bulan/tahun' placeholder='Januari 2018' className='w-1/2'/>
                </div>
                <div className="mb-3">
                  <label htmlFor="deskripsi-pekerjaan" className='text-[#9EA0A5] text-xs ms-2'>Deskripsi singkat</label>
                  <textarea className="w-full text-sm border p-3 rounded mt-1" id="deskripsi-pekerjaan" rows="5" placeholder='Deskripsikan pekerjaan anda'></textarea>
                </div>
                <hr className='my-8 bg-[#C4C4C4]'/>
                <ButtonOutline borderColor='yellow' className='w-full h-12'>Tambah Pengalaman Kerja</ButtonOutline>
                {/* <button className='btn bg-white fw-bold' style={{color: '#FBB017', width: '100%', height:50, border: '1px solid #FBB017' }}>Tambah pengalaman kerja</button> */}
              </div>
            </div>

            {/* Portofolio */}
            <div className='bg-white mt-6 rounded-lg'>
              <h4 className='text-xl pl-8 pt-8'>Portofolio</h4>
              <hr className='mt-4 bg-[#C4C4C4]' />
              <div className='px-8 pt-6 pb-10'>
                <Input label='Nama aplikasi' placeholder='Masukan nama aplikasi' />
                <Input label='Link Repository' placeholder='Masukan link repository' />
                <label htmlFor="posisi" className='text-[#9EA0A5] text-xs'>Type Portofolio</label>
                <div id='radioapp' className='flex'>
                  <div className='flex items-center border border-[#E2E5ED] rounded px-4'>                    
                    <input type="radio" id="aplikasimobile" name="typeapp" value="mobile" checked/> 
                    <label className='ms-2 text-sm' htmlFor="aplikasimobile">Aplikasi mobile</label>
                  </div>
                  
                  <div className='flex items-center p-3 ms-5'>
                    <input type="radio" id="aplikasiweb" name="typeapp" value="web"/> 
                    <label className='ms-2 text-sm' htmlFor="aplikasiweb">Aplikasi web</label>
                  </div>                  
                </div>
                <div className="mb-3 mt-4">
                  <label htmlFor="posisi" className="text-[#9EA0A5] text-xs">Upload gambar</label>
                  <button type="button" className='mt-2'>
                    <Image 
                      src="/img/edit-profile/inputFile.svg"
                      alt="upload"
                      width= {0}
                      height={0}
                      className='w-full h-auto'
                    />
                  </button>
                </div>
                <hr className='my-8 bg-[#C4C4C4]' />
                <ButtonOutline borderColor='yellow' className='w-full h-12'>Tambah portofolio</ButtonOutline>
                {/* <button className='btn bg-white fw-bold' style={{color: '#FBB017', width: '100%', height:50, border: '1px solid #FBB017' }}>Tambah portofolio</button> */}
              </div>
            </div>
          </div>
        </div>        
      </main>
      
    </div>
  )
}

export default Page