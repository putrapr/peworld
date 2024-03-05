import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import ButtonOutline from '@/components/base/ButtonOutline'
import Button from '@/components/base/Button'
import { jwtDecode } from "jwt-decode";
// import { cookies } from 'next/headers';

const NavAfterLogin = () => {
  const router = useRouter()

  const handleLogout = () => {
    
    const token = localStorage.getItem('token')
    const decoded = jwtDecode(token)
    localStorage.clear()
    router.push(`/login/${decoded.role}`)
  }

  return (
    <nav className='relative bg-white flex items-center justify-between w-full h-[100px] top-0 max-sm:px-4 px-[8.5rem] drop-shadow-md'>
      <Link href="/home">
        <Image
          src="/icons/logo-purple.svg"
          alt="peworld logo"
          width = {127}
          height = {35}
        />
      </Link>

      <div className='flex gap-4'>
        <ButtonOutline onClick={handleLogout} className='w-20 h-10 text-sm'>Logout</ButtonOutline>
        <Button onClick={() => router.push('/profile')}className='w-20 h-10 text-sm'>Profile</Button>
      </div>

    </nav>
  )
}

export default NavAfterLogin