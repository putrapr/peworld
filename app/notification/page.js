'use client'
import { useState, useEffect} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import moment from 'moment'
import 'moment/locale/id'
import CardNotif from '@/components/template/Notification/CardNotif'
import { jwtDecode } from 'jwt-decode'

const Notification = () => {
  moment.locale('id')
  const [messages, setMessages] = useState([])

  const getMessages = async (role) => {    
    try {
      const res = await axios.get('/v1/hire/'+role+'s', { withCredentials: true })
      setMessages(res.data.data)
    } catch (err) {
      Swal.fire({
        icon: "error",
        text: "Gagal mendapatkan pesan",
      }) 
    }
  }

  const getRole = () => {
    const token = localStorage.getItem('token')
    const decoded = jwtDecode(token)
    return decoded.role
  }

  useEffect(() => {
    if (typeof window !== 'undefined')
      getMessages(getRole())
  },[])

  return (
    <div className='w-full max-sm:px-4 px-[8.5rem] py-16'>   
      { 
        messages.map((item, index) => (
          <CardNotif key={index} data={item} role={getRole()} />
        ))
      }
    </div>
  )
}

export default Notification