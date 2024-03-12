'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Button from '@/components/base/Button'
import ButtonOutline from '@/components/base/ButtonOutline'
import Input from '@/components/base/Input'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'

const CompanyEdit = () => {
  // States / Variables
  const [Company, setCompany] = useState({})
  const [profile, setProfile] = useState({})
  const router = useRouter()
  
  // Functions
  const getProfile = async () => {
    try {
      const res = await axios.get('/v1/recruiters/profile', {withCredentials: true})
      const result = res.data.data
      setCompany(result)
      setProfile({
        company: result.company,
        position: result.position,
        city: result.city
      })
    } catch (err) {
      Swal.fire({
        icon: "error",
        text: "Error Get Profile",
      }) 
    }
  }

  const updateProfile = async () => {
    try {
      await axios.put('/v1/recruiters/profile', Company, {withCredentials: true})
      Swal.fire({
        icon: "success",
        title: "Profile Updated",
      })
      getProfile()
    } catch(err) {
      Swal.fire({
        icon: "error",
        text: "Error Update Profile",
      }) 
    }
  }

  // Hook
  useEffect(() => {
    getProfile()
  },[])

  return (
    <div className='bg-[#F6F7F8]'>
      <div className='w-full h-[400px] bg-[#5E50A1]'></div>

      {/* Main Content */}
      <main className='relative mx-[8.5rem] -top-60 rounded-lg'>
        <div className='flex gap-7'>

          {/* Left Side */}
          <div className='w-[390px]'>
            {/* Card */}
            <div className='bg-white p-8 rounded-lg'>
              <div className='flex flex-col items-center'>
                <Image 
                  src="/img/default.png"
                  alt="dp"
                  width={150}
                  height={150}
                />
                <div className='mt-3 flex gap-2'>
                  <Image
                    src="/icons/pencil-gray.svg"
                    alt="pencil-gray"
                    width={18}
                    height={18}
                  />
                  <p className='text-2xl text-[#9EA0A5]'>Edit</p>
                </div>
              </div>
              <div>
                <h4 className='mt-8 text-2xl font-bold'>{profile.company}</h4>
                <p className='mt-2 text-sm'>{profile.position}</p>
                { profile.city && 
                  <div className='text-[#9EA0A5] flex gap-3 text-sm mt-3'>
                    <Image width={15} height={15} src='/icons/locate.svg' alt='locate' />
                    <p>{profile.city}</p>
                  </div>                
                }
              </div>
            </div>
            {/* Button */}
            <div className='mt-6'>
              <Button onClick={() => updateProfile()}className='w-full h-12'>Simpan</Button>
              <ButtonOutline onClick={() => router.push('/company')} className='w-full h-12 mt-4'>Batal & Kembali</ButtonOutline>
            </div>
          </div>

          {/* Right Side */}
          <div className='w-[65%]'>
            
            {/* Data diri */}
            <div className='bg-white rounded-lg'>
              <h4 className='text-2xl pl-8 pt-8'>Data diri</h4>
              <hr className='mt-4' />
              <div className='p-8'>
                {/* <Input label='Nama' placeholder='Masukan nama'
                  value={Company.name} 
                  onChange={(e) => setCompany({ ...Company, name: e.target.value })} 
                /> */}
                <Input label='Nama Perusahaan' placeholder='Masukan nama perusahaan'
                  value={Company.company} 
                  onChange={(e) => setCompany({ ...Company, company: e.target.value })} 
                />
                <Input label='Bidang' placeholder='Masukan bidang perusahaan ex : Financial'
                  value={Company.position} 
                  onChange={(e) => setCompany({ ...Company, position: e.target.value })} 
                />
                <Input label='Kota' placeholder='Masukan kota' 
                  value={Company.city} 
                  onChange={(e) => setCompany({ ...Company, city: e.target.value })} 
                />
                <Input label='Deskripsi singkat' placeholder='Tuliskan deskripsi singkat'
                  value={Company.description} 
                  onChange={(e) => setCompany({ ...Company, description: e.target.value })} 
                />
                <Input label='Email' placeholder='Masukan email' 
                  value={Company.email} 
                  onChange={(e) => setCompany({ ...Company, email: e.target.value })} 
                />
                <Input label='Nomor Telepon' placeholder='Masukan nomor telepon' 
                  value={Company.phone} 
                  onChange={(e) => setCompany({ ...Company, phone: e.target.value })} 
                />
                <Input label='Instagram' placeholder='Masukan nama instagram'
                  value={Company.instagram} 
                  onChange={(e) => setCompany({ ...Company, instagram: e.target.value })} 
                />
                <Input label='Linkedin' placeholder='Masukan nama linkedin' 
                  value={Company.linkedin} 
                  onChange={(e) => setCompany({ ...Company, linkedin: e.target.value })} 
                />
              </div>              
            </div>
          </div>
        </div>
      </main>
      
      <div className='h-60'></div>
    </div>
  )
}

export default CompanyEdit