import React from 'react'
import Cta from './Cta'
import { HeadingProps } from '@/types/types'

const Heading = ({heading,cta}: HeadingProps) => {
  return (
    <>
      <div className='flex justify-between items-center md:items-end'>
        <h4 className='text-3xl md:text-4xl font-[500] leading-[2rem] max-w-[8rem] md:max-w-[10rem]'>{heading}</h4>
        <Cta cta={cta} />
      </div>
    </>
  )
}

export default Heading
