import React from 'react'
import { assets } from '../../assets/assets'
import { useAppContext } from '@/context/AppContext'
import Link from "next/link"

const Navbar = () => {

  const { router } = useAppContext()

  return (
    <div className='flex items-center px-4 md:px-8 py-3 justify-between border-b'>
       <Link href="/" className="hover:text-gray-900 transition">
        <h1 className="text-gray-900 font-bold"><span className="text-orange-600">SBR</span> Technology</h1>
      </Link>
      <button className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar