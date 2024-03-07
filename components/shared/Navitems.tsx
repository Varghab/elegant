"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

const Navitems = ({renderActiveLink=true}:{renderActiveLink?:boolean}) => {
    const pathname = usePathname();
    return (
        <div className={`hidden md:block`}>
            <ul className='flex-center-8 text-secondary p-regular-18'>
                <Link href="/"><li className={`${renderActiveLink&&pathname==='/'&&'font-semibold'}`}>Home</li></Link>
                <Link href="/product"><li className={`${renderActiveLink&&pathname==='/product'&&'font-semibold'}`}>Product</li></Link>
                <Link href="/shop"><li className={`${renderActiveLink&&pathname==='/shop'&&'font-semibold'}`}>Shop</li></Link>
                <Link href="/contact"><li className={`${renderActiveLink&&pathname==='/contact'&&'font-semibold'}`}>Contact us</li></Link>
            </ul>
        </div>
    )
}

export default Navitems
