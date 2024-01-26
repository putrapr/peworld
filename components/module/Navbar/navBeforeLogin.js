import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navBeforeLogin = () => {
  return (
    <div>
      <Link href="/dashboard">
        <Image
          src="@/public/peworld.svg"
          alt="peworld logo"
          width = {127}
          height = {35}
        />
      </Link>

      <div>
        <button type="button">Masuk</button>
        <button type="button">Daftar</button>
      </div>

    </div>
  )
}

export default navBeforeLogin