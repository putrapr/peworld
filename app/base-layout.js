'use client'
import Navbar from '@/components/module/Navbar'
import Footer from '@/components/module/Footer'
import { usePathname } from 'next/navigation'
// import NavBeforeLogin from '@/components/module/Navbar/navBeforeLogin';
// import NavAfterLogin from '@/components/module/Navbar/navAfterLogin';
// import { useEffect, useState } from 'react';

const BaseLayout = ({token, children}) => {
  const pathname = usePathname()
  const hide = pathname.includes('register') || pathname.includes('login')
  // const [navRender, setNavRender] = useState()
  // const [footRender, setfootRender] = useState()

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     setNavRender((localStorage.getItem('token')) ? <NavAfterLogin/> : <NavBeforeLogin/>)
  //     setfootRender(<Footer />)
  //   }
  // },[window])

  return (
    <div className='2xl:container 2xl:mx-auto'>
      { !hide && <Navbar /> }      
      {children}
      { !hide && <Footer /> }      
    </div>
  )
}

export default BaseLayout