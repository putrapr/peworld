'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'


const NavBeforeLogin = () => {
  const [login, setLogin] = useState(false)
  const [register, setRegister] = useState(false)

  return (
    <div className='relative bg-white flex items-center justify-between w-full h-[100px] top-0 max-sm:px-4 px-[6.5rem] drop-shadow-md'>
      <Link href="/home">
        <Image
          src="/icons/logo-purple.svg"
          alt="peworld logo"
          width = {127}
          height = {35}
        />
      </Link>
      <div className='flex gap-4'>
        {/* <ButtonOutline className='w-20 h-10 text-sm'>Masuk</ButtonOutline> */}
        <div className='relative'>
          <button className='w-20 h-10 text-sm border-[#5E50A1] text-[#5E50A1] rounded bg-white font-bold hover:bg-[#e9e8e8] active:ring-2 border'
            onClick={ () => {
              (login)? setLogin(false) : setLogin(true)
              setRegister(false)
            } }
          >Masuk</button>
            { login && 
              <div className='absolute top-12 flex flex-col bg-white shadow-ring ms-1'>
                <Link href='/login/worker' className='p-2 hover:border hover:border-[#53478c] text-sm'>Pekerja</Link>
                <hr/>
                <Link href='/login/recruiter' className='p-2 hover:border hover:border-[#53478c] text-sm'>Perekrut</Link>
              </div>
            }
        </div>

        <div className='relative'>
          <button className='bg-[#5E50A1] hover:bg-[#53478c] w-20 h-10 text-sm rounded text-white font-semibold tracking-wider active:ring-2'
            onClick={ () => {
              (register)? setRegister(false) : setRegister(true)
              setLogin(false)
            }}
          >Daftar</button>
            { register && 
              <div className='absolute top-12 flex flex-col bg-white shadow-ring ms-1'>
                <Link href='/register/worker' className='p-2 hover:border hover:border-[#53478c] text-sm'>Pekerja</Link>
                <hr/>
                <Link href='/register/recruiter' className='p-2 hover:border hover:border-[#53478c] text-sm'>Perekrut</Link>
              </div>
            }
        </div>        
      </div>
    </div>
  )
}

export default NavBeforeLogin