import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import ButtonOutline from '@/components/base/ButtonOutline'
import Button from '@/components/base/Button'
import { jwtDecode } from "jwt-decode";
import axios from 'axios'
import Swal from 'sweetalert2'

const NavAfterLogin = () => {
  const router = useRouter()

  const getRole = () => {
    const token = localStorage.getItem('token')
    const decoded = jwtDecode(token)
    return decoded.role
  }

  const handleLogout = async () => {
    try {
      await axios.get('/v1/auth/logout')
      Swal.fire({
        icon: "success",
        title: "Logout Berhasil",
      })
      const role = getRole()
      localStorage.clear()
      router.push(`/login/${role}`)
    } catch (err) {
      Swal.fire({
        icon: "success",
        title: "Gagal Logout",
      })
    }    
  }

  const profile = () => (
    (getRole() === 'worker') ? 'profile' : 'company'
  )

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
        <Button onClick={() => router.push(`/${(getRole() === 'worker') ? 'profile' : 'company'}`)} className='w-20 h-10 text-sm'>Profile</Button>
      </div>
    </nav>
  )
}

export default NavAfterLogin