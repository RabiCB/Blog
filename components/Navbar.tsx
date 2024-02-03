import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './Modetoggle'

const Navbar = () => {
  return (
    <div className='flex relative justify-between  items-center'>
        <Link href="/" className='font-bold text-3xl'>
            Blog<span className='text-blue-500'>Cb</span>
        </Link>
        <div>
            <ModeToggle/>
        </div>
    </div>
  )
}

export default Navbar