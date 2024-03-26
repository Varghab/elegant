"use client"
import Image from 'next/image'
import React from 'react'
import Navitems from './Navitems'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { AiOutlineMenu } from 'react-icons/ai'
import Drawer from './Drawer'
import Cart from './Cart'

const Navbar = () => {
  const pathname = usePathname();
  
  return (
   pathname!=='/login'&&pathname!=='/register'&&<nav className='wrapper flex-between  '>
    <div className='flex items-center gap-3'>
      <Drawer />
      <Link href='/'>
        <Image width={100} height={100} src='/assets/images/elegant logo.png' alt="Elegant logo" />
      </Link>
    </div>
      <Navitems />
      <div className='flex-center-4'>
        <Link href='/myaccount'><Image alt="User avatar" width={20} height={40} src="/assets/icons/user-circle.svg" /></Link>
        <Image alt="Search" width={20} height={40} src="/assets/icons/search.svg" />
        <Cart />
      </div>
    </nav>
  )
}

export default Navbar
