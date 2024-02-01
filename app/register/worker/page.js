import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Input from '@/components/base/Input'
import Button from '@/components/base/Button'

const page = () => {
  return (
    <div className='flex py-6 px-12 gap-16'>
      {/* Left Side */}
      <div className='relative w-1/2'>
        <Image 
          src="/img/login/poster.webp" 
          alt="poster" 
          width={0}
          height={0}
          sizes="100vw"
          className='w-full h-auto'
        />
      </div>

      {/* Right Side */}
      <div className='w-2/5 mb-10'>
        <form>
          <h2 className='text-3xl font-bold mt-16'>Halo, Pewpeople</h2>
          <p className='text-lg mt-4 mb-12'>Isi data di bawah ini untuk registrasi akun mu</p>
          <Input label='Nama' placeholder='Masukan nama panjang'/>
          <Input label='Email' placeholder='Masukan alamat email'/>
          <Input label='No Handphone' placeholder='Masukan no handphone'/>
          <Input label='Kata Sandi' placeholder='Masukan kata sandi'/>
          <Input label='Konfirmasi Kata Sandi' placeholder='Masukan konfirmasi kata sandi'/>
          <Button bgColor='yellow' className='w-full h-12 my-6'>Daftar</Button>
          <div className='text-center'>
            <p>Anda sudah punya akun? <Link href="/login/worker" className='text-[#FBB017]'>Masuk Sini</Link></p>
          </div>
        </form>
      </div>      
    </div>
  )
}

export default page