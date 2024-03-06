import Image from 'next/image'
import React from 'react'

const Cta = ({cta}:{cta:string}) => {
  return (
    <>
        <span className='underline cursor-pointer font-bold underline-offset-4 flex items-center gap-1'>
            <p>{cta}</p>
            <Image src="/assets/icons/arrow-right.svg" alt="right-arrow" width={15} height={15} />
        </span>
    </>
  )
}

export default Cta
