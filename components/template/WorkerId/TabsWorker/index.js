'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import axios from 'axios'

const Tabs = ({ id }) => {
  const [tab, setTab] = useState(false)
  const borderTab = 'border-b-4 border-[#5E50A1]'
  const [portofolio, setPortofolio] = useState([])
  const [experience, setExperience] = useState([])

  const getPortofolio = async () => {
    const res = await axios.get('/v1/portfolio/'+id)
    setPortofolio(res.data.data)
  }

  const getExperience = async () => {
    const res = await axios.get('/v1/experience/'+id)
    setExperience(res.data.data)
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
      <div className={`${(!tab)? 'grid':'hidden'} max-sm:grid-cols-1 grid-cols-4 gap-4 pt-8`}>
        { 
          portofolio?.map((item, index) => (
            <div key={index}>
              <Image 
                // src='/img/worker/default.jpg'
                src={item.image != null ? item.image : '/img/worker/default.jpg'}
                alt='1'
                width={200}
                height={200}
                className='w-full h-auto object-cover rounded-md border-2'
              />
              <p className='text-center mt-2'>{item.application_name}</p>
            </div>
          ))
        }
      </div>

      {/* Pengalaman Kerja */}
      <div className={`${(tab)? 'flex flex-col':'hidden'}`}>
        {
          experience?.map((item, index) => (
            <div className='flex gap-8 pt-8' key={index}>
              <div className='flex flex-col w-full'>
                <h2 className='text-xl font-bold'>{item.position}</h2>
                <h2 className='text-lg'>{item.company}</h2>
                <h3 className='text-[#9EA0A5]'>{item.work_month} {item.work_year}</h3>
                <p className='text-sm mt-4 text-justify'>{item.created_at}</p>                  
                <hr className='my-4'/>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Tabs