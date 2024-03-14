'use client'
import Image from 'next/image'
import Button from '@/components/base/Button'
import ButtonOutline from '@/components/base/ButtonOutline'
import Input from '@/components/base/Input'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Skill from '@/components/base/Skill'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
import Portofolio from '@/components/template/EditProfileWorker/portofolio'

const Page = () => {
  // States / Variables
  const router = useRouter()
  const [worker, setWorker] = useState({})
  const [profile, setProfile] = useState({})
  const [skills, setSkills] = useState([])
  const [skill, setSkill] = useState('')


  // Functions
  const getProfile = async () => {
    try {
      const res = await axios.get('/v1/workers/profile', { withCredentials: true })
      const result = res.data.data
      setWorker(result)
      setProfile({
        name: result.name,
        job_desk: result.job_desk,
        domicile: result.domicile,
        workplace: result.workplace
      })
    } catch (err) {
      Swal.fire({
        icon: "error",
        text: "Gagal mendapatkan profil",
      }) 
    }
  }

  const updateProfile = async () => {
    try {
      await axios.put('/v1/workers/profile', worker, { withCredentials: true })
      Swal.fire({
        icon: "success",
        title: "Profil Berhasil Diperbarui",
      })
      getProfile()
    } catch(err) {
      Swal.fire({
        icon: "error",
        text: "Gagal perbarui profil",
      }) 
    }
  }

  const getSkills = async () => {
    try {
      const res = await axios.get('/v1/skills')
      setSkills(res.data.data)
    } catch (err) {
      Swal.fire({
        icon: "error",
        text: "Gagal mendapatkan skill",
      }) 
    }
  }

  const addSkill = async (e) => {
    e.preventDefault()
    try {
      const data = { skill_name: e.target.skill.value }
      await axios.post('/v1/skills', data, { withCredentials: true })
      setSkill('')
      getSkills()
    } catch (err) { 
      Swal.fire({
        icon: "error",
        text: "Gagal menambahkan skill",
      }) 
    }
  }

  const handleDeleteSkill = async (id, name) => {
    Swal.fire({
      title: "Apa kamu yakin?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus skill",
      cancelButtonText: "Tidak"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteSkill(id, name)
        getSkills()
      }
    })
  }

  const deleteSkill = async (id, name) => {
    try {
      await axios.delete('/v1/skills/'+id, { withCredentials: true })
      Swal.fire({
        icon: "success",
        title: name,
        text: `Berhasil dihapus`
      })
    } catch (err) {
      Swal.fire({
        icon: "error",
        text: "Gagal hapus skill",
      }) 
    }
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
                <h4 className='text-xl mt-4 font-bold'>{profile.name}</h4>
                <p className='text-sm mt-2'>{profile.job_desk}</p>
                { profile.domicile && 
                  <div className='text-sm text-[#9EA0A5] mt-3 flex gap-2'>
                    <Image
                      src='/icons/locate.svg'
                      alt='locate'
                      width={15}
                      height={15}
                    />
                    <p>{profile.domicile}</p>
                  </div>                
                }
                <p className='text-sm text-[#9EA0A5] mt-3'>{profile.workplace}</p>
              </div>
            </div>
            {/* Button */}
            <div className='mt-5'>
              <Button onClick={() => updateProfile()} className='w-full h-12 text-sm'>Simpan</Button>
              <ButtonOutline onClick={() => router.push('/profile')} className='w-full h-12 mt-4 text-sm'>Batal & Kembali</ButtonOutline>
            </div>
          </div>

          {/* Right Side */}
          <div className='w-[750px]'>
            
            {/* Data diri */}
            <div className='bg-white rounded-lg'>
              <h4 className='text-xl pl-8 pt-8'>Data diri</h4>
              <hr className='mt-4 bg-[#C4C4C4]' />
              <div className='p-8'>
                <Input name='name' label='Nama Lengkap' placeholder='Masukan nama lengkap'
                  value={worker.name}
                  onChange={(e) => setWorker({ ...worker, name: e.target.value })} 
                />
                <Input name='job_desk' label='Jabatan' placeholder='Masukan jabatan'
                  value={worker.job_desk}
                  onChange={(e) => setWorker({ ...worker, job_desk: e.target.value })}
                />
                <Input name='domicile' label='Domisili' placeholder='Masukan domisili'
                  value={worker.domicile}
                  onChange={(e) => setWorker({ ...worker, domicile: e.target.value })}
                />
                <Input name='workplace' label='Tempat kerja' placeholder='Masukan tempat kerja'
                  value={worker.workplace}
                  onChange={(e) => setWorker({ ...worker, workplace: e.target.value })}
                />
                
                <div className="mb-3 flex flex-col">
                  <label htmlFor="deskripsi-diri" className='text-xs text-[#9EA0A5] ms-2'>Deskripsi singkat</label>
                  <textarea name='description' className="text-sm border p-3 mt-1 rounded focus:outline-[#5E50A1]" id="deskripsi-diri" rows="6" placeholder='Tuliskan deskripsi singkat'
                    value={worker.description}
                    onChange={(e) => setWorker({ ...worker, description: e.target.value })}
                  ></textarea>
                </div>
              </div>             
            </div>

            {/* Skill */}
            <div className='bg-white mt-6 rounded-lg'>
              <h4 className='text-xl pl-8 pt-8'>Skill</h4>
              <hr className='mt-4 bg-[#C4C4C4]' />
              <div className='p-8'>
                <form onSubmit={addSkill} className='flex gap-6'>
                  <input type='text' name='skill' value={skill} onChange={(e) => setSkill(e.target.value)} className='text-sm w-full h-[50px] border p-3 focus:outline-[#5E50A1]' placeholder="Java"/>
                  <Button type='submit' bgColor='yellow' className='w-20 h-[50px] text-xs'>Tambah</Button>
                </form>
                <div className='flex gap-2 mt-3'>
                  { 
                    skills.map((item, index) => (
                      <Skill key={index} className='group flex items-center'
                      >{item.skill_name} <button onClick={() => handleDeleteSkill(item.id, item.skill_name)} className='hidden group-hover:inline -mr-3 ms-1'
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
                  <Input label='Bulan/tahun - bulan/tahun' placeholder='Januari 2018 - Agustus 2019' className='w-1/2'/>
                </div>
                <div className="mb-3">
                  <label htmlFor="deskripsi-pekerjaan" className='text-[#9EA0A5] text-xs ms-2'>Deskripsi singkat</label>
                  <textarea className="w-full text-sm border p-3 rounded mt-1 focus:outline-[#5E50A1]" id="deskripsi-pekerjaan" rows="5" placeholder='Deskripsikan pekerjaan anda'></textarea>
                </div>
                <hr className='my-8 bg-[#C4C4C4]'/>
                <ButtonOutline borderColor='yellow' className='w-full h-12'>Tambah Pengalaman Kerja</ButtonOutline>
                {/* <button className='btn bg-white fw-bold' style={{color: '#FBB017', width: '100%', height:50, border: '1px solid #FBB017' }}>Tambah pengalaman kerja</button> */}
              </div>
            </div>

            <Portofolio />
          </div>
        </div>        
      </main>
      
    </div>
  )
}

export default Page