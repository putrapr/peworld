import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/base/Button'
import Input from '@/components/base/Input'

const page = () => {
  return (
    <div id="login" className='flex w-screen h-screen py-6 px-12 gap-16'>
      {/* Left Side */}
      <div className='relative w-1/2 h-full'>
        <Image 
          src="/img/login/poster.webp" 
          alt="poster" 
          layout="fill" 
          objectFit="cover"
        />
      </div>

      {/* Right Side */}
      <div className='w-1/2 h-full'>
        <form> 
          <h2 className='text-3xl font-bold mt-16'>Halo, Pewpeople</h2>
          <p className='text-lg mt-4 mb-12'>Silahkan masuk untuk mengakses profilmu</p>
          <Input label='Email' placeholder='Masukan alamat email'/>
          <Input label='Kata Sandi' placeholder='Masukan kata sandi'/>
          <div className='text-end'>
            <Link href="/home" className='text-[#1F2A36]'>Lupa kata sandi?</Link>
          </div>
          <Button bgColor='yellow' className='w-full h-12 my-6'>Masuk</Button>
          <div className='text-center'>
            <p>Anda belum punya akun? <Link href="/register" className='text-[#FBB017]'>Daftar Sini</Link></p>
          </div>
        </form>        
      </div>
    </div>
  )
}

export default page