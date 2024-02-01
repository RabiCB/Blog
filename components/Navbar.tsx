import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './Modetoggle'

const Navbar = () => {
  return (
    <div className='flex relative justify-between  items-center'>
        <Link href="/" className='font-bold text-3xl'>
            Chandra<span className='text-blue-500'>Blog</span>
        </Link>
        <div>
            <ModeToggle/>
        </div>
    </div>
  )
}

export default Navbar