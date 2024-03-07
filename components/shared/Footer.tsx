import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-[#141718] '>
      <section className='wrapper text-[#c0c2c5]' >
        <div className='flex flex-col md:flex-row justify-between items-center mt-10'>
          <div className='flex flex-col md:flex-row items-center gap-4 md:gap-6'>
            <span className='text-white text-3xl tracking-tight'>3legant.</span>
            <span className='border border-[#c0c2c5] md:w-0 w-6 md:h-6'></span>
            <span>Gift & Decoration Store</span>
          </div>
          <ul className=' flex-center-4 md:flex-center-8 mt-8 md:mt-0 flex-col md:flex-row p-regular-18 text-[#c0c2c5]'>
                <Link href="/"><li>Home</li></Link>
                <Link href="/product"><li>Product</li></Link>
                <Link href="/shop"><li>Shop</li></Link>
                <Link href="/contact"><li>Contact us</li></Link>
          </ul>
        </div>
        <hr className='border border-neutral-600 mt-8 md:mt-14' />
        <div className='flex justify-center items-center mt-4'>
          <div className='flex flex-col md:flex-row items-center md:mt-0 mt-5 md:gap-5 gap-2'>
            <span className='order-3'>Copyright © 2023 3legant. All rights reserved</span>
            <span className='order-2'>Privacy Policy</span>
            <span className='order-1'>Terms of Use</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
