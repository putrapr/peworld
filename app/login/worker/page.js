import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/base/Button'
import Input from '@/components/base/Input'

const page = () => {
  return (
    <div id="login" className='flex w-screen h-screen py-6 px-12 gap-12'>
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
          <div className='mt-16'>
            <h2 className='text-3xl font-bold'>Halo, Pewpeople</h2>
          </div>
          <div className='mt-4 mb-12'>
            <p className='text-lg'>Silahkan masuk untuk mengakses profilmu</p>
          </div>
          
          {/* <div className='flex justify-center items-center gap-2 mb-4'>
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
              <input onClick={()=> setRole("worker")} type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off"/>
              <label class="btn btn-outline-warning" for="btnradio1">Pekerja</label>

              <input onClick={()=> setRole("recruiter")} type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
              <label class="btn btn-outline-warning" for="btnradio2">Perekrut</label>
            </div>
          </div> */}
          <Input label='Email' placeholder='Masukan alamat email'/>
          <Input label='Kata Sandi' placeholder='Masukan kata sandi'/>

          {/* <div class="mb-4">
            <label for="email" class="form-label" style={{ color: '#9EA0A5' }}>Email</label>
            <input type="email" class="form-control" id="email" placeholder="Masukan alamat email"
              name="email" value={data.email} onChange={handleChange} required/>
          </div>
          <div class="mb-4">
            <label for="sandi" class="form-label" style={{ color: '#9EA0A5' }}>Kata Sandi</label>
            <input type="password" class="form-control" id="sandi" placeholder="Masukan kata sandi"
              name="sandi" value={data.sandi} onChange={handleChange} required/>
          </div> */}
          
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