import React from 'react'
import Image from 'next/image'
import Card from '@/components/module/Card'
import Button from '@/components/base/Button'
import ButtonPage from '@/components/base/ButtonPagination'

const jobs = () => {  
  const worker = [
    {
      "id": 9,
      "nama": "Abiyan",
      "email": "abiyan@gmail.com",
      "no_telp": "089812340987",
      "sandi": "$2b$10$8c17lqFIlCQDQZgWq9tDpeGBxC6mUz/kDqpJLu..sBXtB3RJmLTpi",
      "jabatan": "Farming Technology",
      "alamat": "Yogyakarta",
      "tempat_kerja": "-",
      "deskripsi": "-",
      "image": "http://res.cloudinary.com/dzpf9unc5/image/upload/v1699944886/q6djyou1eqwovfdqxdy8.jpg",
      "skills": "-"
    },
    {
      "id": 4,
      "nama": "Sekar",
      "email": "sekar@gmail.com",
      "no_telp": "089412345678",
      "sandi": "$2b$10$HRFKQN32W5Y7ld.IfbRfKe62jM.Ru0sQWL10cIXsIfWPax./tGqWi",
      "jabatan": "Sales",
      "alamat": "Tangerang",
      "tempat_kerja": "-",
      "deskripsi": "Mempromosikan produk dengan mengimplementasikan berbagai metode pemasaran.",
      "image": "http://res.cloudinary.com/dzpf9unc5/image/upload/v1699944954/ty05h5oomw7wqteygedz.jpg",
      "skills": "Public Speaking"
    },
    {
      "id": 5,
      "nama": "Adit",
      "email": "adit@gmail.com",
      "no_telp": "089509876543",
      "sandi": "$2b$10$I30/880YLHFf0P.JLqwDvufixdZi7PNVLQ6tTOHLwx/QhjhWhPS6i",
      "jabatan": "Teacher Elementary School",
      "alamat": "Klaten",
      "tempat_kerja": "-",
      "deskripsi": "Mampu mencerdaskan kehidupan bangsa yang berbudi luhur.",
      "image": "http://res.cloudinary.com/dzpf9unc5/image/upload/v1699945014/uu4rccvhsdxfrws58n6a.jpg",
      "skills": "-"
    },
    {
      "id": 7,
      "nama": "Imron",
      "email": "imron@gmail.com",
      "no_telp": "089012340987",
      "sandi": "$2b$10$IlbNTrKohI0x/KnYQlFnruK70/YZBAwapR/ROtqJUmN6v0cpscFsK",
      "jabatan": "DevOps Developer",
      "alamat": "Bandung",
      "tempat_kerja": "-",
      "deskripsi": "-",
      "image": "http://res.cloudinary.com/dzpf9unc5/image/upload/v1699945045/ugc7ppzpcw1etabhxoxg.jpg",
      "skills": "CI/CD, Docker"
    }
  ]

  return (
    <main className='w-full h-[1100px] bg-[#F6F7F8]'>
      <div className='flex items-center w-full h-20 bg-[#5E50A1] px-[8.5rem]'>
        <h2 className='text-white font-bold text-3xl'>Top Jobs</h2>
      </div>
      
      <div className='w-full h-52 px-[8.5rem]'>
        <div className='bg-white w-full h-16 mt-14 shadow-ring rounded-lg'>
          <div className='flex'>
            <div className="grid grid-cols-12 w-4/5">
              <input type="text" placeholder='Search for any skill' className='col-span-11 ms-6 border-0 h-16 focus:outline-none'/>
              <div className='col-span-1 bg-transparent text-xl text-[#9EA0A5] flex justify-center items-center'>
                <button type='button' className='active:scale-125 active:ring-2 rounded'>
                  <Image 
                    src='/icons/search.svg'
                    alt='search'
                    width={22}
                    height={22}
                  />
                </button>
              </div>
            </div>
            <div className='border-l border-[#9EA0A5] my-2'></div>            
            <div className='flex items-center justify-between w-1/4 p-2'>
              <div>
                <p className='mt-1 text-[#9EA0A5] font-bold ms-4'>Urutkan</p>
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

        <div className='w-full flex justify-center gap-4 mt-14 h-44'>
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

export default jobs