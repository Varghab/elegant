import Image from 'next/image'
import React from 'react'
import ProductCard from './ProductCard'
import { HeadingProps } from '@/types/types'
import Heading from './Heading'

const ProductsCollection = ({heading, cta}: HeadingProps) => { 
  return (
    <div className='py-12'>
      <Heading heading={heading} cta={cta} />
      <div className='flex gap-4 items-center overflow-x-auto overflow-y-hidden py-12'>
        <div className='w-60 flex-none'>
            <ProductCard />
        </div><div className='w-60 flex-none'>
            <ProductCard />
        </div><div className='w-60 flex-none'>
            <ProductCard />
        </div><div className='w-60 flex-none'>
            <ProductCard />
        </div><div className='w-60 flex-none'>
            <ProductCard />
        </div><div className='w-60 flex-none'>
            <ProductCard />
        </div>
            
      </div>
    </div>
  )
}

export default ProductsCollection
