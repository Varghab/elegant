import React from 'react'
import { AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const ProductPageCta = () => {
  return (
    <div className='max-w-96'>
        <section className='flex gap-4'>
            <div className='flex gap-5 justify-center items-center rounded-lg bg-gray-100 text-center w-1/3 text-lg py-2 px-4 font-bold'>
                <AiOutlineMinus className='text-3xl cursor-pointer' />
                <p>1</p>
                <AiOutlinePlus className='text-3xl cursor-pointer' />
            </div>
            <button className='border-2 flex items-center justify-center gap-2 border-neutral-700 rounded-md w-2/3 text-lg'>
                <p>Wishlist</p>
                <AiOutlineHeart />
            </button>
        </section>
        <section className='w-full bg-neutral-700 mt-4 rounded-lg text-neutral-200'>
            <button className='w-full h-full py-3 text-lg font-[500]'>
                Add to cart
            </button>
        </section>
    </div>
  )
}

export default ProductPageCta
