'use client'
import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import Card from '@/components/module/Card'
import Button from '@/components/base/Button'
import ButtonPage from '@/components/base/ButtonPagination'
import axios from 'axios'
import Link from 'next/link'

function useDebounce(effect, dependencies, delay) {
  const callback = useCallback(effect, dependencies);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
}

const Home = () => {
  // States
  const [worker, setWorker] = useState([])  
  const [params, setParams] = useState({
    limit: 10,
    page: 1,
    sort: 'created_at',
    sortBy: 'DESC',
    search: ''    
  })
  const [pageData, setPageData] = useState({ currentPage: 1 })
  const [toggleSort, setToggleSort] = useState(false)
  const [search, setSearch] = useState('')


  // Functions
  const getWorker = async () => {
    const result = await axios.get('/v1/workers/', {params})
    setWorker(() => result.data.data)
    setPageData(() => result.data.pagination)
    // window.scrollTo({ top: 0 });
  }

  const nextPage = () => {
    setParams({...params, page: params.page + 1})    
  }

  const prevPage = () => {
    setParams({...params, page: params.page - 1})
  }

  const handleSort = (sort, sortBy) => {
    setParams({...params, sort, sortBy})
  }


  // Hook
  useEffect(() => {
    getWorker()
  },[params])

  useDebounce(() => {
    setParams({
      ...params,
      search
    })
  },[search], 1500)

  return (
    <main className='w-full bg-[#F6F7F8] pb-14'>
      <div className='flex items-center w-full h-20 bg-[#5E50A1] max-sm:px-4 px-[8.5rem]'>
        <h2 className='text-white font-bold max-sm:text-xl text-3xl'>Top Jobs</h2>
      </div>
      
      <div className='w-full max-sm:px-4 px-[8.5rem] '>
        <div className='relative z-10 bg-white w-full h-16 mt-14 shadow-ring rounded-lg'>
          <div className='flex'>
            <div className="grid grid-cols-12 w-4/5">
              <input className='col-span-11 ms-6 border-0 h-16 focus:outline-none'
                type="text" 
                placeholder='Pencarian' 
                onChange={ (e) => setSearch(e.target.value) }
                value={ search }
              />
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
            <div className='relative max-sm:w-1/2 w-1/4'>
              <div className='flex items-center h-full p-2'>
                <button className="flex justify-center items-center w-1/2 h-full mr-2 rounded active:ring-2"
                  onClick={() => setToggleSort(!toggleSort)}> 
                  <Image
                    src='/icons/sort.svg'
                    alt='sort'
                    width={12}
                    height={12}
                  /> <span className='ml-2 text-[#9EA0A5]'>Sortir</span>
                </button>

                { toggleSort && 
                  <div className='w-full absolute top-20 drop-shadow-md bg-white'>
                    <ul>
                      <li className='border-b'>
                        <button className='w-full h-full p-3'
                          onClick={() => handleSort('name','ASC')}
                        >Nama: A - Z</button>
                      </li>
                      <li className='border-b'>
                        <button className='w-full h-full p-3'
                          onClick={() => handleSort('name','DESC')}
                        >Nama: Z - A</button>
                      </li>
                      <li>
                        <button className='w-full h-full p-3'
                          onClick={() => handleSort('created_at','DESC')}
                        >Default</button>
                      </li>
                    </ul>
                  </div>
                }             
                <Button className='w-28 h-full font-thin'>Search</Button>
              </div>
            </div>       
          </div>
        </div>

        <div className={`relative bg-white w-full mt-16 shadow-ring rounded-lg`}> 
          {
            worker.map((item, index) => (
              <div key={index}>
                <Card data={item} className='max-sm:hidden'/>
                <Link href={'/worker/'+item.id} className='sm:hidden'>
                  <Card data={item} />                
                </Link>
              </div>
              
            ))
          }
        </div>

        <div className='w-full flex justify-center gap-4 mt-14'>
          <ButtonPage 
            display={ pageData.currentPage == 1 ? 'hidden': 'flex' }
            onClick={() => prevPage()}>
            <Image
              src='/icons/arrow-left.svg'
              alt='arrow-left'
              width={12}
              height={20}
            />
          </ButtonPage>
          <ButtonPage checked>{pageData.currentPage}</ButtonPage>
          <ButtonPage 
            display={ pageData.currentPage == pageData.totalPage ? 'hidden': 'flex' }
            onClick={() => nextPage()}>
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