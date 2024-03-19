'use client'
import Image from 'next/image'
import Link from 'next/link'
import Input from '@/components/base/Input'
import Button from '@/components/base/Button'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const RegisterRecruiter = () => {
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()    
    const pass = e.target.password.value
    const pass2 = e.target.password2.value
    if (pass != pass2)
      return Swal.fire({
        icon: "error",
        title: "Daftar Gagal",
        text: "Konfirmasi sandi salah",
      })

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      company: e.target.company.value,
      position: e.target.position.value,
      phone: e.target.phone.value,
      password: pass
    }

    axios.post('/v1/recruiters/register', data)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Daftar Sukses",
          text: "Akun berhasil dibuat, silahkan masuk",
        })
        router.push('/login/recruiter')
      })
      .catch((err) => {
        const text = (err.response.data.message == 'user sudah terdaftar') ? 
          'Akun sudah terdaftar, silahkan masuk' : 'Gagal daftar akun'
        Swal.fire({
          icon: "error",
          title: "Daftar Gagal",
          text
        })
        router.push('/register/recruiter')
      })
  }

  return (
    <div className='flex py-6 max-sm:px-6 px-12 gap-16'>
      {/* Left Side */}
      <div className='max-sm:hidden relative w-1/2'>
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
      <div className='max-sm:w-full w-2/5 mb-10'>
        <form onSubmit={handleSubmit}>
          <h2 className='text-3xl font-bold mt-16'>Halo, Pewpeople</h2>
          <p className='text-lg mt-4'>Isi data di bawah ini untuk registrasi akunmu</p>
          <p className='text-lg mb-8'>(Daftar sebagai Perekrut)</p>
          <Input name='name' type='text' label='Nama' placeholder='Masukan nama panjang'/>
          <Input name='email' type='email' label='Email' placeholder='Masukan alamat email'/>
          <Input name='company' type='text' label='Perusahaan' placeholder='Masukan nama perusahaan'/>
          <Input name='position' type='text' label='Jabatan' placeholder='Posisi di perusahaan anda'/>
          <Input name='phone' type='text' onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()} label='No handphone' placeholder='Masukan no handphone'/>
          <Input name='password' type='password' label='Kata sandi' placeholder='Masukan kata sandi'/>
          <Input name='password2' type='password' label='Konfirmasi kata sandi' placeholder='Masukan konfirmasi kata sandi'/>
          <Button type='submit' bgColor='yellow' className='w-full h-12 my-6'>Daftar</Button>
          <div className='text-center'>
            <p>Anda sudah punya akun? <Link href="/login/worker" className='text-[#FBB017]'>Masuk Sini</Link></p>
            <p>Atau ingin <Link href="/register/worker" className='text-[#FBB017]'>Daftar</Link> sebagai Pekerja</p>
          </div>
        </form>
      </div>      
    </div>
  )
}

export default RegisterRecruiter