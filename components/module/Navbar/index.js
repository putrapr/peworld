'use client'
import { useState, useEffect } from 'react';
import NavBeforeLogin from './navBeforeLogin';
import NavAfterLogin from './navAfterLogin';

function Navbar() {
  const [navRender, setNavRender] = useState()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setNavRender((localStorage.getItem('token')) ? <NavAfterLogin/> : <NavBeforeLogin/>)
    }
  },[])

  return (
    <>
     {/* { (localStorage.getItem('token')) ? <NavAfterLogin /> : <NavBeforeLogin /> } */}
     {/* <NavAfterLogin /> */}
     { navRender }
    </>
  )
}

export default Navbar;