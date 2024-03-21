'use client'
import { useEffect } from 'react'
import Section1 from '@/components/template/Landing/section1'
import Section2 from '@/components/template/Landing/section2'
import Section3 from '@/components/template/Landing/section3'
import Section4 from '@/components/template/Landing/section4'
import Section5 from '@/components/template/Landing/section5'

const LandingPage = () => {


  useEffect(() => {
    // location.reload()
  },[])

  return (   
    <main>
      <Section1 className='max-sm:pl-4 max-sm:mt-4 max-sm:pr-4 pl-[8.5rem] pr-28 mt-14'/>
      <Section2 className='mt-20' />
      <Section3 className='max-sm:pr-4 max-sm:mt-0 pr-24 mt-8'/>
      <Section4 className='max-sm:py-0 py-24 mt-[4.5rem]'/>
      <Section5 className='h-[450px] max-sm:p-4 p-36'/>
    </main>
  )
}

export default LandingPage