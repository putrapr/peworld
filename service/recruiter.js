import getCookie from './getCookie'
const token = await getCookie('token')
import { redirect } from 'next/navigation'

export const getCompany = async () => {
  if (!token)
    return redirect('/login/recruiter')

  try {
    const res = await fetch(process.env.NEXT_PUBLIC_URL_BE+'/v1/recruiters/profile',{
      headers:{
        "Content-Type": "application/json",
        // ...(token ? {"Cookie": `token=${token};path=/;expires=Session`}: {})
        "Cookie": `token=${token};path=/;expires=Session`
      },
      credentials: "include",
      cache: 'no-store'
    })
    const result = await res.json()
    return result.data
  } catch (err) {
    return Promise.reject('pesan error: '+err.message)
  }
}