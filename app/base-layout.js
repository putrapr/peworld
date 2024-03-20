'use client'
import Navbar from '@/components/module/Navbar'
import Footer from '@/components/module/Footer'
import { usePathname } from 'next/navigation'

const BaseLayout = ({ children }) => {
  const pathname = usePathname()
  const hide = pathname.includes('register') || pathname.includes('login')

  return (
    <div className='2xl:container 2xl:mx-auto'>
      { !hide && <Navbar /> }      
      {children}
      { !hide && <Footer /> }      
    </div>
  )
}

export default BaseLayout