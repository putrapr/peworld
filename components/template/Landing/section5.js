/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useRouter } from 'next/navigation'
import ButtonOutline from '@/components/base/ButtonOutline'

const section5 = ({ className }) => {
  const router = useRouter()
  return (
    <section className={`w-full text-white flex justify-center items-center ${className}`}>
      <div className='w-full h-52 bg-[#5E50A1] rounded-[40px_8px] bg-[url("/img/landing/wave.svg")] bg-no-repeat bg-cover'>
        <div className='flex justify-between items-center p-16'>
          <div>
            <h1 className='w-80 text-white text-4xl'>Masih Ragu ?</h1>
            <h3 className='text-3xl'>Ayo mulai dari sekarang</h3>
          </div>
          <div>
            <ButtonOutline onClick={() => router.push('/home')} className='w-48 h-16'>Mulai Dari Sekarang</ButtonOutline>
          </div>
        </div>
      </div>
    </section>
  )
}

export default section5