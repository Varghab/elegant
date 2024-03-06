import Image from 'next/image'
import React from 'react'
import Navitems from './Navitems'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='wrapper flex-between  '>
      <Link href='/'>
        <Image width={100} height={100} src='/assets/images/elegant logo.png' alt="Elegant logo" />
      </Link>
      <Navitems />
      <div className='flex-center-4'>
        <Image alt="User avatar" width={20} height={40} src="/assets/icons/user-circle.svg" />
        <Image alt="Search" width={20} height={40} src="/assets/icons/search.svg" />
        <Image alt="Cart" width={20} height={40} src="/assets/icons/bag.svg" />
      </div>
    </nav>
  )
}

export default Navbar
