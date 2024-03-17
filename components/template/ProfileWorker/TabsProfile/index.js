'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import axios from 'axios'
import Swal from 'sweetalert2'

const Tabs = () => {
  const [tab, setTab] = useState(false)
  const borderTab = 'border-b-4 border-[#5E50A1]'
  const [portofolio, setPortofolio] = useState([])
  // const [experience, setExperience] = useState([])

  const getPortofolio = async () => {
    const res = await axios.get('/v1/portfolio', { withCredentials: true })
    setPortofolio(res.data.data)
  }

  // const getExperience = async () => {
  //   const res = await axios.get('/v1/portfolio', { withCredentials: true })
  //   setExperience(res.data.data)
  // }

  const handleDelete = async (e) => {
    const result = confirm("Are you sure to delete?");
    if (!result) return
    
    try {
      await axios.delete('/v1/portfolio/'+e.target.id)
      Swal.fire({
        icon: 'success',
        title: 'Portofolio terhapus'
      })
      getPortofolio()
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Gagal hapus portofolio'
      })
    }
  }

  useEffect(() => {
    getPortofolio()
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
              <button type="button" id={item.id} onClick={e => handleDelete(e)} className="absolute -top-2 -right-4 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2">Delete</button>
            </div>
          ))
        }
      </div>

      {/* Pengalaman Kerja */}
      <div className={`${(tab)? 'flex flex-col':'hidden'}`}>
        <div className='flex gap-8 pt-8'>
          <div className='w-[10%]'>
            <Image 
              src='/img/worker/tokped.svg'
              alt='tokped'
              width={75}
              height={75}
              className='w-full h-auto object-cover'
            />
          </div>
          <div className='flex flex-col'>
            <h2 className='text-xl font-bold'>Engineer</h2>
            <h2 className='text-lg'>Tokopedia</h2>
            <h3 className='text-[#9EA0A5]'>July 2019 - January 2020 <span>6 month</span></h3>
            <p className='text-sm mt-4 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
            <hr className='my-4'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tabs