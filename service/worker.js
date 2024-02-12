import api from '@/config/api'
import Swal from 'sweetalert2'
// import axios from 'axios'
// const env = process.env.NEXT_PUBLIC_URL_BE

// import {cookies} from 'next/headers'

// const url = process.env.NEXT_PUBLIC_URL_BE
// const getCookie = async (name) => {
//   return cookies().get(name)?.value ?? ''
// }

export const getWorkers = async ()=>{
  try {
    // const token = await getCookie('token')
    // const response = await fetch(`${url}/v1/workers/`, {
    //   headers: {
    //     "Content-Type": "application/json",
    //     ...(token ? {"Cookie": `token=${token};path=/;expires=Session`}: {})
    //   },
    //   credentials: "include",
    // })
    // const result = await response.json()
    // return result.data

    // const result = await axios.get(`${url}/v1/workers`, {
    //   headers:{
    //     'Cookie': `token=${token};path=/;expires=Session`
    //   },
    //   withCredentials: true
    // })
    
    
    // const result = await axios.get(env+'/v1/workers')
    // const env = process.env.NEXT_PUBLIC_URL_BE
    const result = await api.get('/v1/workers')
    return result.data.data
  } catch (err) {
    return Promise.reject(err.response)
  }  
}

export const getProfile = async () => {  
  try {
    const result = await api.get('v1/workers/profile')
    return result.data.data
  } catch (err) {
    return Promise.reject('pesan error: '+err.message)
  }
}

export const updateProfile = async (form) => {
  'use server'

  const data = {
    name: form.get('name'),
    job_desk: form.get('job_desk'),
    domicile: form.get('domicile'),
    workplace: form.get('workplace'),
    description: form.get('description')
  }

  try {
    const result = await api.put('v1/workers/profile', data)
    Swal.fire({
      icon: "success",
      title: "Berhasil Simpan !",
    }) 
    return result.data.data
  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "Gagal simpan data",
    }) 
    return Promise.reject('pesan error: '+err.response)
  }

}