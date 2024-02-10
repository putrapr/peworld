import api from '@/config/api'
// import axios from 'axios'
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
    
    const result = await api.get('v1/workers')
    return result.data.data
  } catch (err) {
    return Promise.reject('pesan error: '+err.message)
  }  
}

export const getWorker = async (id) => {  
  try {
    const result = await api.get('v1/workers/'+id)
    return result.data.data
  } catch (err) {
    return Promise.reject('pesan error: '+err.message)
  }
}

export const register = async (data) => {
  try {
    api.post('/workers/register', data)
    return 'Done'
  } catch(err) {
    return Promise.reject(err.message)
  }
}