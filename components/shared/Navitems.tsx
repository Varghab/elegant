"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

const Navitems = () => {
    const pathname = usePathname();
    return (
        <div className='hidden md:block'>
            <ul className='flex-center-8 text-secondary p-regular-18'>
                <Link href="/"><li className={`${pathname==='/'&&'font-semibold'}`}>Home</li></Link>
                <Link href="/product"><li className={`${pathname==='/product'&&'font-semibold'}`}>Product</li></Link>
                <Link href="/shop"><li className={`${pathname==='/shop'&&'font-semibold'}`}>Shop</li></Link>
                <Link href="/contact"><li className={`${pathname==='/contact'&&'font-semibold'}`}>Contact us</li></Link>
            </ul>
        </div>
    )
}

export default Navitems
