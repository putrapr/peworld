import React, { useState } from 'react'
import ButtonOutline from '@/components/base/ButtonOutline'
import Input from '@/components/base/Input'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const Experience = () => {
  const router = useRouter()

  const submitExperience = async (e) => {
    e.preventDefault()
    let date = e.target.monthyear.value
    if (!date.includes(' ')) 
      return Swal.fire({
        icon:'error',
        text: 'Gunakan spasi untuk memisahkan Bulan Tahun (Pengalaman Kerja) !'
      })
    date = date.split(' ')    
    const data = {
      position: e.target.position.value,
      company: e.target.company.value,
      work_month: date[0],
      work_year: date[1],
      description: e.target.description.value
    }

    try {
      await axios.post('/v1/experience', data, { withCredentials: true })
      Swal.fire({
        icon:'success',
        text: 'Berhasil menambahkan pengalaman kerja'
      })
      router.push('/profile')
    } catch(err) {
      Swal.fire({
        icon:'error',
        text: 'Gagal menambahkan pengalaman kerja'
      })
    }
  }

  return (
    <div className='bg-white mt-6 rounded-lg'>
      <h4 className='text-xl pl-8 pt-8'>Pengalaman kerja</h4>
      <hr className='mt-4 bg-[#C4C4C4]' />
      <form onSubmit={submitExperience} className='px-8 py-7'>
        <Input label='Posisi' id='position' placeholder='Web Developer' />
        <div className="flex gap-4 w-full">
          <Input label='Nama Perusahaan' id='company' placeholder='PT Harus bisa' className='w-1/2'/>
          <Input label='Bulan Tahun' id='monthyear' placeholder='Januari 2018' className='w-1/2'/>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className='text-[#9EA0A5] text-xs ms-2'>Deskripsi Singkat</label>
          <textarea className="w-full text-sm border p-3 rounded mt-1 focus:outline-[#5E50A1]" id="description" rows="5" placeholder='Deskripsikan pekerjaan anda'></textarea>
        </div>
        <hr className='my-8 bg-[#C4C4C4]'/>
        <ButtonOutline type='submit' borderColor='yellow' className='w-full h-12'>Tambah Pengalaman Kerja</ButtonOutline>
        {/* <button className='btn bg-white fw-bold' style={{color: '#FBB017', width: '100%', height:50, border: '1px solid #FBB017' }}>Tambah pengalaman kerja</button> */}
      </form>
    </div>
  )
}

export default Experience