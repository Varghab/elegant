"use client"
import Image from 'next/image';
import React, { useState } from 'react'

const Newsletter = () => {
    const [email, setEmail] = useState('');
    return (
        <div className="bg-[url('/assets/images/newsletterbg.png')] bg-no-repeat bg-cover bg-center min-h-[20rem] flex items-center justify-center">
            <div className='text-center px-8'>
                <h5 className='h5-bold'>Join Our Newsletter</h5>
                <p className='p-regular-18 mt-2'>Sign up for deals, new products and promotions</p>
                <form className='mt-8'>
                    <div className='flex flex-row items-center flex-wrap bg-[#F2F4F6] gap-2 py-2 border-b-2 border-b-neutral-400'>
                        <Image src="/assets/icons/email.png" alt="email-icon" width={20} height={20} />
                        <input className='flex-1 outline-none bg-[#F2F4F6]' type='text' placeholder='Email Address' />
                        <button className='hidden sm:block'>Signup</button>
                    </div>
                        <button className='block sm:hidden mt-3 bg-neutral-700 py-2 px-4 text-neutral-200 rounded-md'>Signup</button>
                </form>
            </div>
        </div>
    )
}

export default Newsletter
