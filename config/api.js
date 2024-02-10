import axios from 'axios'
import {cookies} from 'next/headers'

const getCookie = async (name) => {
  return cookies().get(name)?.value ?? '';
}
const token = await getCookie('token')

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_BE,
  withCredentials: true,
  headers:{
    'Cookie': `token=${token};path=/;expires=Session`
  },
})
 
// api.interceptors.request.use(function (config) {
//   const token = localStorage.getItem('token')
//   if (token) {
//     config.headers = {
//       Authorization: `Bearer ${token}`
//     }
//   }
//   return config
// }, function (error) {
//   return Promise.reject(error)
// })

export default api