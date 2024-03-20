'use client'
import { useState } from 'react'
import Image from 'next/image'
import ButtonOutline from '@/components/base/ButtonOutline'
import Input from '@/components/base/Input'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'

const Portofolio = () => {
  const router = useRouter()
  const [radio, setRadio] = useState('web')
  const [imageUrl, setImageUrl] = useState()
  const [showImage, setShowImage] = useState()

  const changeImage = async (e) => {
    const file = e.target.files[0]
    setShowImage(URL.createObjectURL(file))
    const formData = new FormData()
    formData.append('file', file)
    const res = await axios.post('/v1/upload', formData, { withCredentials: true })
    const url = res.data.data.file_url
    setImageUrl(url)
  }

  async function submitPortofolio(e) {
    e.preventDefault()
    const type = (radio === 'web') ? 'Aplikasi Web' : 'Aplikasi Mobile'
    const data = {
      application_name: e.target.application_name.value,
      link_repository: e.target.link_repository.value,
      application: type,
      image: imageUrl
    }

    try {
      await axios.post('/v1/portfolio', data, { withCredentials: true })
      Swal.fire({
        icon: 'success',
        title: 'Berhasil Menambahkan Portofolio'
      })
      router.push('/profile') 
    } catch(err) {
      Swal.fire({
        icon: 'error',
        text: 'Gagal menambahkan portofolio'
      })
    }
  }

  return (
    <div className='bg-white mt-6 rounded-lg'>
      <h4 className='text-xl pl-8 pt-8'>Portofolio</h4>
      <hr className='mt-4 bg-[#C4C4C4]' />
      <form onSubmit={submitPortofolio} className='px-8 pt-6 pb-10'>
        <Input id='application_name' label='Nama aplikasi' placeholder='Masukan nama aplikasi' />
        <Input id='link_repository' label='Link Repository' placeholder='Masukan link repository' />
        <label htmlFor="posisi" className='text-[#9EA0A5] text-xs'>Type Portofolio</label>        
        <div id='radioapp' className='flex' onChange={(e) => setRadio(e.target.value)}>
          <div className={`flex items-center p-3 ms-5 ${radio === 'web' && 'border border-[#E2E5ED] rounded'}`}>
            <input type="radio" id="aplikasiweb" name="typeapp" value="web"/> 
            <label className='ms-2 text-sm' htmlFor="aplikasiweb">Aplikasi web</label>
          </div>

          <div className={`flex items-center px-4 py-3 ${radio === 'mobile' && 'border border-[#E2E5ED] rounded'}`}>                    
            <input type="radio" id="aplikasimobile" name="typeapp" value="mobile"/> 
            <label className='ms-2 text-sm' htmlFor="aplikasimobile">Aplikasi mobile</label>
          </div>                  
        </div>

        <div className="mb-3 mt-4">
          <label htmlFor="posisi" className="text-[#9EA0A5] text-xs">Upload gambar</label>
          {/* <input type="file" className='mt-2' /> */}
            {/* <Image 
              src="/img/edit-profile/inputFile.svg"
              alt="upload"
              width= {0}
              height={0}
              className='w-full h-auto'
            /> */}
          {/* </input> */}

          <div className="flex items-center justify-center w-full">
            <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p className="mb-2 text-sm text-gray-500 font-semibold">{ showImage ? 'Change image' : 'Click to Upload'}</p>
                <p className="text-xs text-gray-500">JPG or PNG (1920px × 1080px)</p>
              </div>
              <input id="dropzone-file" type="file" onChange={changeImage} className="hidden" />
            </label>
          </div>

          { imageUrl && 
            <div className='my-8'>
              <label className="text-[#9EA0A5] text-xs">Preview</label>
              <Image
                src={showImage ?? ''}
                alt=''
                width={200}
                height={150}
                className='w-full h-auto'
              />
            </div>
          }
        </div>
        <hr className='my-8 bg-[#C4C4C4]' />
        <ButtonOutline borderColor='yellow' className='w-full h-12'>Tambah portofolio</ButtonOutline>
        {/* <button className='btn bg-white fw-bold' style={{color: '#FBB017', width: '100%', height:50, border: '1px solid #FBB017' }}>Tambah portofolio</button> */}
      </form>
    </div>
  )
}

export default Portofolio