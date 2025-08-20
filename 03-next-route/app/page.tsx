import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-center justify-between w-full px-6 my-4'>
      <h1 className='text-4xl font-bold'>ISRO</h1>
      <nav className='flex items-center space-x-4'>
        <Link href="/" className='text-2xl transition-transform duration-300 ease-in-out hover:scale-110 '>Home</Link>
        <Link href="/about" className='text-2xl transition-transform duration-300 ease-in-out hover:scale-110'>About</Link>
        <Link href="/contact" className='text-2xl transition-transform duration-300 ease-in-out hover:scale-110'>Contact</Link>
      </nav>
    </div>
  )
}

export default page
