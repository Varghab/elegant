import React from 'react'

const ProductCard = () => {
  return (
    <div className='w-full h-96 flex flex-col flex-none gap-4'>
        <div className="bg-[url('/assets/images/product1.png')] w-full h-full bg-no-repeat bg-cover bg-center py-2 px-4">
            <div className='flex justify-between items-center'>
                <div className='text-xs sm:text-base'>
                    <p className='font-bold text-center tracking-wide py-[1px] sm:py-[3px] bg-white rounded-sm'>NEW</p>
                    <p className='py-[1px] sm:py-[3px] font-bold tracking-wider px-2 sm:px-4 mt-1 text-white rounded-sm bg-[#38CB89]'>-50%</p>
                </div>
                <div className='bg-white w-8 h-8 sm:h-10 sm:w-10 rounded-full shadow-lg'>
                    <div className="bg-[url('/assets/icons/heart.png')] h-full w-full bg-no-repeat bg-center">
                    </div>
                </div>
            </div>
        </div>
        <div className=' text-lg'>
            <p className='font-bold tracking-wide'>Loveseat Sofa</p>
            <span className='flex items-center gap-2'>
                <p className='font-bold tracking-wider'>$199.00</p>
                <p className='font-[300] line-through text-secondary tracking-wider'>$400</p>
            </span>

        </div>
    </div>
  )
}

export default ProductCard
