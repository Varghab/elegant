import React from 'react'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'

const AddressCard = () => {
    return (
        <div className='border border-neutral-700 py-3 px-4  rounded-lg'>
            <div className='flex items-center justify-between'>
                <p className='font-bold '>Shipping Address</p>
                <div className='flex items-center gap-2'>
                    <AiOutlineEdit />
                    <AiOutlineDelete />
                </div>
            </div>
            <div className='mt-2 text-sm'>
                    <p>Varghab Shib</p>
                    <p>+91 8837418720</p>
                    <p>Amtali, Rkm Road, Agartala, 799130</p>
                </div>
        </div>
    )
}

const Address = () => {
    return (
        <>
        <h5 className='text-xl lg:text-2xl font-bold pb-4'>Your Address</h5>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4'>
            <AddressCard />
            <AddressCard />
            <AddressCard />
        </div>
        </>
    )
}

export default Address
