import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryGrid = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
          <Link href={`/category=livingroom`}>
          <div className=" bg-[#F3F5F7] relative ">
            <div className="absolute top-6 left-6 sm:top-10 sm:left-10 flex flex-col gap-1">
              <p className="sm:text-3xl text-2xl font-[500]">Living Room</p>
              <span className="flex items-center underline underline-offset-2">
                <p className="font-[300] cursor-pointer text-lg sm:text-xl">Show Now</p>
                <Image alt="right-arrow" src="/assets/icons/arrow-right.svg" width={18} height={18} />
              </span>
            </div>
            <div className="flex">
              <Image src="/assets/images/sofa.png" className="mx-auto" alt="sofa" width={400} height={300} />
            </div>
          </div>
          </Link>
          <div className="flex flex-col gap-4">
            <Link className='h-full' href={`/category=bedroom`}>
            <div className="bg-[#F3F5F7] h-full flex p-3 sm:p-6 gap-6 justify-between items-end">
              <div className="flex flex-col gap-1 ">
                <p className="sm:text-3xl text-2xl font-[500]">
                  Bedroom
                </p>
                <span className="flex items-center underline underline-offset-2">
                  <p className="font-[300] cursor-pointer text-md sm:text-xl">Show Now</p>
                  <Image alt="right-arrow" src="/assets/icons/arrow-right.svg" width={18} height={18} />
                </span>
              </div>
              <Image src="/assets/images/drawer.png" className="" alt="drawer" width={150} height={150} />
            </div>
            </Link>
            <Link className='h-full' href={`/category=kitchen`}>
            <div className="bg-[#F3F5F7] h-full flex p-3 py-6 sm:p-6 gap-6 justify-between items-end">
              <div className="flex flex-col gap-1 ">
                <p className="sm:text-3xl text-2xl font-[500]">
                  Kitchen
                </p>
                <span className="flex items-center underline underline-offset-2">
                  <p className="font-[300] cursor-pointer text-md sm:text-xl">Show Now</p>
                  <Image alt="right-arrow" src="/assets/icons/arrow-right.svg" width={18} height={18} />
                </span>
              </div>
              <Image src="/assets/images/toaster.png" className="" alt="toaster" width={150} height={150} />
            </div>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default CategoryGrid
