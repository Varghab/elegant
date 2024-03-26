import React from 'react'

const OrderSuccess = () => {
  return (
    <div className='mx-auto max-w-[40rem] w-[90%] py-12 px-4 rounded-xl bg-white shadow-lg'>
      <h5 className='text-center text-2xl'>Thank You 🎉</h5>
      <h5 className='text-center h5-bold mt-2'>Your order bas been recieved</h5>
      <div className='mx-auto max-w-[20rem] mt-6'>
        <div className='flex justify-between  items-center'>
            <p className='text-gray-500'>Order code:</p>
            <p className='font-bold'>ElEGANT0123_45678</p>
        </div>
        <div className='flex mt-3 justify-between items-center'>
            <p className='text-gray-500'>Date:</p>
            <p className='font-bold'>March 12, 2023</p>
        </div>
        <div className='flex mt-3 justify-between items-center'>
            <p className='text-gray-500'>Total:</p>
            <p className='font-bold'>$3,225.00</p>
        </div>
        <div className='flex mt-3 justify-between items-center'>
            <p className='text-gray-500'>Payment method:</p>
            <p className='font-bold'>Credit Card</p>
        </div>
        <div className=' mt-6 mx-auto w-max'>
            <button className='py-3 px-6 text-white rounded-full bg-neutral-800 mx-auto'>Purchase History</button>
        </div>
      </div>
    </div>
  )
}

export default OrderSuccess
