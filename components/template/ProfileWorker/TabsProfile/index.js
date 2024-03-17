'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import axios from 'axios'
import Swal from 'sweetalert2'
import ButtonDelete from '@/components/base/ButtonDelete'

const Tabs = () => {
  const [tab, setTab] = useState(false)
  const borderTab = 'border-b-4 border-[#5E50A1]'
  const [portofolio, setPortofolio] = useState([])
  const [experience, setExperience] = useState([])

  const getPortofolio = async () => {
    const res = await axios.get('/v1/portfolio', { withCredentials: true })
    setPortofolio(res.data.data)
  }

  const getExperience = async () => {
    const res = await axios.get('/v1/experience', { withCredentials: true })
    setExperience(res.data.data)
  }

  const deletePortofolio = async (e) => {
    const result = confirm("Are you sure to delete?");
    if (!result) return
    
    try {
      await axios.delete('/v1/portfolio/'+e.target.id)
      Swal.fire({
        icon: 'success',
        title: 'Portofolio berhasil dihapus'
      })
      getPortofolio()
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Gagal menghapus portofolio'
      })
    }
  }

  const deleteExperience = async (e) => {
    const result = confirm("Are you sure to delete?");
    if (!result) return
    
    try {
      await axios.delete('/v1/experience/'+e.target.id)
      Swal.fire({
        icon: 'success',
        title: 'Pengalaman kerja berhasil dihapus'
      })
      getExperience()
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Gagal menghapus pengalaman kerja'
      })
    }
  }

  useEffect(() => {
    getPortofolio()
    getExperience()
  },[])

  return (
    <div>
      <div className='flex gap-6'>
        <button className={`font-bold text-xl mt-10 ${ !tab && borderTab}`}
          onClick={() => setTab(!tab)}
        >Portofolio</button>
        <button className={`font-bold text-xl mt-10 ${ tab && borderTab}`}
          onClick={() => setTab(!tab)}
        >Pengalaman Kerja</button>
      </div>

      {/* Portofolio */}
      <div className={`${(!tab)? 'grid':'hidden'} grid-cols-4 gap-4 pt-8`}>
        { 
          portofolio?.map((item, index) => (
            <div key={index} className='relative'>
              <Image 
                // src='https://res.cloudinary.com/dnsqhf9cr/image/upload/v1710660215/wafpnxfhaqguey1upsra.png'
                src={item.image != null ? item.image : '/img/worker/default.jpg'}
                alt='1'
                width={200}
                height={200}
                className='w-full h-auto object-cover rounded-md border-2'
              />
              <p className='text-center mt-2'>{item.application_name}</p>
              <ButtonDelete id={item.id} onClick={e => deletePortofolio(e)} className={'absolute -top-2 -right-4'} />
            </div>
          ))
        }
      </div>

      {/* Pengalaman Kerja */}
      <div className={`${(tab)? 'flex flex-col':'hidden'}`}>
        {
          experience?.map((item, index) => (
            <div key={index}>
              <div className='flex gap-8 pt-8'>
                <div className='flex flex-col w-full'>
                  <h2 className='text-xl font-bold'>{item.position}</h2>
                  <h2 className='text-lg'>{item.company}</h2>
                  <h3 className='text-[#9EA0A5]'>{item.work_month} {item.work_year}</h3>
                  <p className='text-sm mt-4 text-justify'>{item.created_at}</p>                  
                </div>
                <div><ButtonDelete id={item.id} onClick={e => deleteExperience(e)} /></div>
              </div>
              <hr className='my-4'/>            
            </div>
          ))
        }
        
      </div>
    </div>
  )
}

export default Tabs