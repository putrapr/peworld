import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ButtonOutline from '@/components/base/ButtonOutline'
import Button from '@/components/base/Button'

const navBeforeLogin = () => {
  return (
    <div className='absolute bg-white flex items-center justify-between w-full h-[100px] top-0 px-[8.5rem]'>
      <Link href="/dashboard">
        <Image
          src="/peworld.svg"
          alt="peworld logo"
          width = {127}
          height = {35}
        />
      </Link>
      <div className='flex gap-4'>
        <ButtonOutline className='w-20 h-10 text-sm'>Masuk</ButtonOutline>
        <Button className='w-20 h-10 text-sm'>Daftar</Button>
      </div>

    </div>
  )
}

export default navBeforeLogin