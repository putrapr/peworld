import React from 'react'
import Image from 'next/image'
import Button from '@/components/base/Button'
import ButtonOutline from '@/components/base/ButtonOutline'
import Input from '@/components/base/Input'

const page = () => {
  return (
    <div className='bg-[#F6F7F8]'>
      <div className='w-full h-[400px] bg-[#5E50A1]'></div>

      {/* Main Content */}
      <main className='relative mx-[8.5rem] -top-60 rounded-lg'>
        <div className='flex gap-7'>

          {/* Left Side */}
          <div className='w-[390px]'>
            {/* Card */}
            <div className='bg-white p-8 rounded-lg'>
              <div className='flex flex-col items-center'>
                <Image 
                  src="/img/default.png"
                  alt="dp"
                  width={150}
                  height={150}
                />
                <div className='mt-3 flex gap-2'>
                  <Image
                    src="/icons/pencil-gray.svg"
                    alt="pencil-gray"
                    width={18}
                    height={18}
                  />
                  <p className='text-2xl text-[#9EA0A5]'>Edit</p>
                </div>
              </div>
              <div>
                <h4 className='mt-8 text-2xl font-bold'>PT. Martabat Jaya Abadi</h4>
                <p className='mt-2 text-sm'>Financial</p>
                <div className='text-[#9EA0A5] flex gap-3 text-sm mt-3'>
                  <Image
                    src='/icons/locate.svg' alt='locate'
                    width={15} height={15}
                  />
                  <p>Purwokerto, Jawa Tengah</p>
                </div>
              </div>
            </div>
            {/* Button */}
            <div className='mt-6'>
              <Button className='w-full h-12'>Simpan</Button>
              <ButtonOutline className='w-full h-12 mt-4'>Batal</ButtonOutline>
            </div>
          </div>

          {/* Right Side */}
          <div className='w-[65%]'>
            
            {/* Data diri */}
            <div className='bg-white rounded-lg'>
              <h4 className='text-2xl pl-8 pt-8'>Data diri</h4>
              <hr className='mt-4' />
              <div className='p-8'>
                <Input label='Nama Perusahaan' placeholder='Masukan nama perusahaan' />
                <Input label='Bidang' placeholder='Masukan bidang perusahaan ex: Financial' />
                <Input label='Kota' placeholder='Masukan kota' />
                <Input label='Deskripsi singkat' placeholder='Tuliskan deskripsi singkat' />
                <Input label='Email' placeholder='Masukan email' />
                <Input label='Instagram' placeholder='Masukan nama instagram' />
                <Input label='Nomor Telepon' placeholder='Masukan nomor telepon' />
                <Input label='Linkedin' placeholder='Masukan nama linkedin' />

                {/* <div class="mb-3">
                  <label for="email" class="form-label" style={{ color: '#9EA0A5', fontSize: 12, margin:0 }}>Nama Perusahaan</label>
                  <input type="text" class="form-control" id="email" placeholder="Masukan nama perusahaan" style={{ fontSize: 14, height: 50}}/>
                </div>
                <div class="mb-3">
                  <label for="sandi" class="form-label" style={{ color: '#9EA0A5', fontSize: 12, margin:0 }}>Bidang</label>
                  <input type="text" class="form-control" id="sandi" placeholder="Masukan bidang perusahaan ex: Financial" style={{ fontSize: 14, height: 50 }}/>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label" style={{ color: '#9EA0A5', fontSize: 12, margin:0 }}>Kota</label>
                  <input type="text" class="form-control" id="email" placeholder="Masukan kota" style={{ fontSize: 14, height: 50 }}/>
                </div>
                <div class="mb-3">
                  <label for="deskripsi-diri" class="form-label" style={{ color: '#9EA0A5', fontSize: 12, margin:0 }}>Deskripsi singkat</label>
                  <textarea class="form-control" id="deskripsi-diri" rows="6" placeholder='Tuliskan deskripsi singkat' style={{ fontSize: 14}}></textarea>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label" style={{ color: '#9EA0A5', fontSize: 12, margin:0 }}>Email</label>
                  <input type="text" class="form-control" id="email" placeholder="Masukan email" style={{ fontSize: 14, height: 50}}/>
                </div>
                <div class="mb-3">
                  <label for="sandi" class="form-label" style={{ color: '#9EA0A5', fontSize: 12, margin:0 }}>Instagram</label>
                  <input type="text" class="form-control" id="sandi" placeholder="Masukan nama instagram" style={{ fontSize: 14, height: 50 }}/>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label" style={{ color: '#9EA0A5', fontSize: 12, margin:0 }}>Nomor Telepon</label>
                  <input type="text" class="form-control" id="email" placeholder="Masukan nomor telepon" style={{ fontSize: 14, height: 50 }}/>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label" style={{ color: '#9EA0A5', fontSize: 12, margin:0 }}>Linkedin</label>
                  <input type="text" class="form-control" id="email" placeholder="Masukan nama linkedin" style={{ fontSize: 14, height: 50 }}/>
                </div> */}
              </div>              
            </div>
          </div>
        </div>
      </main>
      
      <div className='h-60'></div>
    </div>
  )
}

export default page