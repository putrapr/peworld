'use server'
import getCookie from './getCookie'
import { redirect } from 'next/navigation'

export const getProfile = async () => {
  const token = await getCookie('token')
  if (!token)
    return redirect('/login/worker')

  try {
    const res = await fetch(process.env.NEXT_PUBLIC_URL_BE+'/v1/workers/profile', {
      headers: {
        "Content-Type": "application/json",
        ...(token ? {"Cookie": `token=${token};path=/;expires=Session`}: {})
        // "Cookie": `token=${token};path=/;expires=Session`
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

export const getSkills = async () => {
  const token = await getCookie('token')
  if (!token)
    return redirect('/login/worker')

  try {
    const res = await fetch(process.env.NEXT_PUBLIC_URL_BE+'/v1/skills', {
      headers: {
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