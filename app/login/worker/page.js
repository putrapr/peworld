'use client'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/base/Button'
import Input from '@/components/base/Input'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'

const LoginWorker = () => {
  const router = useRouter()
  
  const handleSubmit = async (e) => {
    e.preventDefault()    
    const data = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    
    axios.post('/v1/auth/login', data, { withCredentials: true })
      .then((res) => {
        const result = res.data.data
        if (result.role === 'worker') {
          localStorage.setItem('token', result.token)
          Swal.fire({
            icon: "success",
            title: "Masuk Sukses",
          })               
          router.push('/') 
        } else {
          throw 'Not a recruiter account'
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          // title: "Masuk Gagal",
          text: "Email atau sandi salah",
        })
      })
  }
  
  return (
    <div className='flex w-screen h-screen py-6 max-sm:px-6 px-12 gap-16'>
      {/* Left Side */}
      <div className='max-sm:hidden relative w-1/2 h-full mb-6'>
        <Image 
          src="/img/login/poster.webp" 
          alt="poster" 
          fill
          objectFit="cover"     
        />
      </div>

      {/* Right Side */}
      <div className='max-sm:w-full w-1/2 h-full'>
        <form onSubmit={handleSubmit}> 
          <h2 className='text-3xl font-bold mt-16'>Halo, Pewpeople</h2>
          <p className='text-lg mt-4'>Silahkan masuk untuk mengakses profilmu</p>
          <p className='text-lg mb-8'>(Masuk sebagai Pekerja)</p>
          <Input name='email' type='email' label='Email' placeholder='Masukan alamat email'/>
          <Input name='password' type='password' label='Kata Sandi' placeholder='Masukan kata sandi'/>
          {/* <div className='text-end'>
            <Link href="/home" className='text-[#1F2A36]'>Lupa kata sandi?</Link>
          </div> */}
          <Button type='submit' bgColor='yellow' className='w-full h-12 my-6'>Masuk</Button>
          <div className='text-center'>
            <p>Anda belum punya akun? <Link href="/register/worker" className='text-[#FBB017]'>Daftar Sini</Link></p>
            <p>Atau ingin masuk sebagai <Link href="/login/recruiter" className='text-[#FBB017]'>Perekrut</Link></p>
          </div>
        </form>        
      </div>
    </div>
  )
}

export default LoginWorker