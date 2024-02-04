'use client'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'
import Card from '@/components/module/Card'
import Button from '@/components/base/Button'
import ButtonPage from '@/components/base/ButtonPagination'

const Home = () => {
  const router = useRouter()
  const [worker, setWorker] = useState([])
  const env = process.env.NEXT_PUBLIC_URL_BE
  const getWorker = async () => {
    const result = await axios.get(`${env}/workers`)
    setWorker(result.data.data)
  }

  useEffect(()=> {
    getWorker()
  })

  return (
    <main className='w-full bg-[#F6F7F8]'>
      <div className='flex items-center w-full h-20 bg-[#5E50A1] max-sm:px-4 px-[8.5rem]'>
        <h2 className='text-white font-bold max-sm:text-xl text-3xl'>Top Jobs</h2>
      </div>
      
      <div className='w-full max-sm:px-4 px-[8.5rem] '>
        <div className='bg-white w-full h-16 mt-14 shadow-ring rounded-lg'>
          <div className='flex'>
            <div className="grid grid-cols-12 w-4/5">
              <input type="text" placeholder='Search for any skill' className='col-span-11 ms-6 border-0 h-16 focus:outline-none'/>
              <div className='col-span-1 bg-transparent text-xl text-[#9EA0A5] flex justify-center items-center'>
                <button type='button' className='max-sm:hidden active:scale-125 active:ring-2 rounded'>
                  <Image 
                    src='/icons/search.svg'
                    alt='search'
                    width={22}
                    height={22}
                  />
                </button>
              </div>
            </div>
            <div className='max-sm:hidden border-l border-[#9EA0A5] my-2'></div>            
            <div className='flex items-center justify-between w-1/4 p-2'>
              <div>
                <p className='max-sm:hidden mt-1 text-[#9EA0A5] font-bold ms-4'>Urutkan</p>
              </div>
              <Button className='w-28 h-full font-thin'>Search</Button>
            </div>
          </div>
        </div>

        <div className='bg-white w-full mt-16 shadow-ring rounded-lg'>
          {
            worker.map((item, index) => (              
              <Card data={item} key={index}/>
            ))
          }
        </div>

        <div className='w-full flex justify-center gap-4 my-14'>
          <ButtonPage>
            <Image
              src='/icons/arrow-left.svg'
              alt='arrow-left'
              width={12}
              height={20}
            />
          </ButtonPage>
          <ButtonPage checked>1</ButtonPage>
          <ButtonPage>2</ButtonPage>
          <ButtonPage>3</ButtonPage>
          <ButtonPage>
            <Image
              src='/icons/arrow-right.svg'
              alt='arrow-right'
              width={12}
              height={20}
            />
          </ButtonPage>
        </div>        
      </div>
    </main>
  )
}

export default Home