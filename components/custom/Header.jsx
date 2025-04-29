import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

function Header() {
  return (
    <div className='flex justify-between items-center p-4 shadow-sm px-10'>
      <Image src={'/logo.svg'} alt='logo'
      width={100}
      height={90}></Image>

      <Button>Get Started</Button>
    </div>
  )
}

export default Header