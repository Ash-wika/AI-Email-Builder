import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import SignInButton from './SignInButton'

function Hero() {
  return (
    <div className='px-10 md:px-28 lg:px-44 xl:px-56 flex flex-col items-center mt-20'>
      <h2 className='font-bold text-5xl text-center'>AI-Powered  
        <span className='text-primary'> Email Templates</span>
      </h2>
      <p className='text-center mt-4'>Longing to impress clients with AI-powered emails but don't have enough time to build on your own? Use the AI-powered email templates that already have AI-generated imagery and copy -- save time on email production with us.</p>
      <div className='flex gap-5 mt-6'>
        <Button variant="outline">Try Yourself</Button>
        <SignInButton/>
      </div>
      {/* <Image src={'/landing.png'} width={1000} height={800} className='mt-12 rounded-xl'></Image> */}
    </div>
  )
}

export default Hero