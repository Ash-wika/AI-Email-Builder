import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import SignInButton from './SignInButton'

function Header() {
  return (
    <div className='flex justify-between items-center p-4 shadow-sm px-10'>
      <Image src={'/logo.svg'} alt='logo'
      width={70}
      height={60}></Image>

      <SignInButton/>
    </div>
  )
}

export default Header