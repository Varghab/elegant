import { FeatureData } from '@/types/types'
import Image from 'next/image'
import React from 'react'

const Feature = ({image, label, labelDescription}: {image:string, label:string, labelDescription:string}) => {
    
    return(
        <div className='bg-[#F3F5F7] rounded-[2px] max-w-[500px] min-h-[12rem] flex items-center px-8'>
            <div className='flex flex-col gap-2'>
                <Image src={image} width={30} height={30} alt="Fast-shipping" />
                <h1 className='text-xl font-semibold'>{label}</h1>
                <p className='text-sm font-[300]'>{labelDescription}</p>
            </div>
        </div>
    )
}

const Features = ({data}:{data: FeatureData[]}) => {
  return (
    <div className='py-6 grid md:grid-cols-4 grid-cols-2 gap-4 items-center'>
      {data.map(feature => <Feature key={feature.id} {...feature} />)}
    </div>
  )
}

export default Features
