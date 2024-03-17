import React from 'react'

const ButtonDelete = ({type='button', text='Delete', className, ...props}) => {
  return (
    <button {...props} className={`${className} text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2`}
    >{text}</button>
  )
}

export default ButtonDelete