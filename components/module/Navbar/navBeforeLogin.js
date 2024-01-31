/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ButtonOutline from '@/components/base/ButtonOutline'
import Button from '@/components/base/Button'

const navBeforeLogin = () => {
  const [modal, setModal] = useState(false)
  return (
    <nav className='relative bg-white flex items-center justify-between w-full h-[100px] top-0 px-[6.5rem] drop-shadow-md'>
      <Link href="/dashboard">
        <Image
          src="/icons/logo-purple.svg"
          alt="peworld logo"
          width = {127}
          height = {35}
        />
      </Link>
      <div className='flex gap-4'>
        <ButtonOutline className='w-20 h-10 text-sm'>Masuk</ButtonOutline>
        <div className='relative'>
          <Button className='w-20 h-10 text-sm'>Daftar</Button>
          { modal && 
            <div className='absolute top-10'>
              <Link href='/register/worker'>Pekerja</Link>
              <Link href='/register/recruiter'>Perekrut</Link>
            </div>
          }
        </div>
        
      </div>

    </nav>
  )
}

export default navBeforeLogin