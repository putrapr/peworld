'use client'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import moment from 'moment'
import 'moment/locale/id'

const CardNotif = ({data, role}) => {
  const { 
    message_purpose, recruiter_company, created_at, 
    name_request_hire, email_request_hire, desciption_request_hire, 
    worker_name, worker_domicile, worker_job_desk, worker_workplace } = data
  moment.locale('id')
  const [toggle, setToggle] = useState(false)


  return (
    <div className='bg-white w-full shadow-ring rounded-lg mb-4'>
      {/* POV Worker */}
      { role == 'worker' &&
        <div className='py-2'>
          <div id='header' className='flex'>
            <button onClick={() => setToggle(!toggle)} className='flex items-center justify-center w-[64px]'>            
              { toggle ? <Image width={20} height={20} src='/icons/chevron-up.svg' alt='extend' />
                : <Image width={20} height={20} src='/icons/chevron-down.svg' alt='extend' />}
            </button>
            <div className='w-full'>              
              <h4 className='text-2xl'>{message_purpose}</h4>
              <p className='text-lg text-[#9EA0A5] mb-2'>{recruiter_company}</p>
              <p>{moment(created_at).utcOffset(0 * 60).format('LLL')}</p> 
            </div>            
          </div>
          { toggle &&
            <div id='content' className='ml-16'>
              <hr />
              <p className='font-semibold mt-2'>{name_request_hire} <span className='text-[#9EA0A5] ml-2 font-normal'> • {email_request_hire}</span></p>
              <p>{desciption_request_hire}</p>
            </div>
          }         
        </div>
      }

      {/* POV Recruiter */}
      { role == 'recruiter' &&      
        <div className='py-2'>
          <div id='header' className='flex'>
            <button onClick={() => setToggle(!toggle)} className='flex items-center justify-center w-[64px]'>            
              { toggle ? <Image width={20} height={20} src='/icons/chevron-up.svg' alt='extend' />
                : <Image width={20} height={20} src='/icons/chevron-down.svg' alt='extend' />}
            </button>
            <div className='w-full'>              
              <h4 className='text-2xl'>{worker_name}</h4>
              <p className='text-lg text-[#9EA0A5] mb-2'>{message_purpose}</p>
              <p>{moment(created_at).utcOffset(0 * 60).format('LLL')}</p> 
            </div>            
          </div>
          { toggle &&
            <div id='content' className='ml-16'>
              <hr />
              <div className='flex mt-2 gap-4'>
                <div>
                  <Image 
                    // src={ (user.image != 'default.jpg') ? "/img/default.png" : 'user.image' }
                    src= "/img/default.png"
                    alt="dp" 
                    width={70} 
                    height={70} 
                    className="rounded-circle"
                  />              
                </div>
                <div className='pt-2'>
                  <p className='text-lg'>{worker_name}</p>
                  <p className='text-sm'>{worker_domicile}</p>
                  
                </div>
              </div>
              <p className='text-sm mt-3 text-[#9EA0A5]'>{worker_job_desk}</p>
              <p className='text-sm mb-2 text-[#9EA0A5]'>{worker_workplace}</p>
              <p className='mb-2'>{desciption_request_hire}</p>
            </div>
          }         
        </div>
      }
    </div>
  )
}

export default CardNotif