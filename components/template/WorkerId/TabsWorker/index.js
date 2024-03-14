'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import axios from 'axios'

const Tabs = () => {
  const [tab, setTab] = useState(false)
  const borderTab = 'border-b-4 border-[#5E50A1]'
  const [portofolio, setPortofolio] = useState([])

  const getPortofolio = async () => {
    const res = await axios.get('/v1/portfolio', { withCredentials: true })
    setPortofolio(res.data.data)
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
            <div key={index}>
              <Image 
                src='/img/worker/blanja.png'
                // src={item.image != null ? item.image : '/img/worker/blanja.png'}
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