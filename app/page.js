import React from 'react'

import Section1 from '@/components/template/Landing/section1'
import Section2 from '@/components/template/Landing/section2'
import Section3 from '@/components/template/Landing/section3'
import Section4 from '@/components/template/Landing/section4'
import Section5 from '@/components/template/Landing/section5'


const LandingPage = () => {
  return (   
    <main>
      <Section1 className='pl-[8.5rem] pr-28 mt-14'/>
      <Section2 className='mt-20' />
      <Section3 className='pr-24 mt-8'/>
      <Section4 className='py-24 mt-[4.5rem]'/>
      <Section5 className='h-[450px] p-36'/>
    </main>
  )
}

export default LandingPage