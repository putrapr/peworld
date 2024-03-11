import {cookies} from 'next/headers'
const getCookie = async (name) => {
  return cookies().get(name)?.value ?? '';
}
export default getCookie