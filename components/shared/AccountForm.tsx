import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const AccountForm = () => {
  return (
    <div>
      <h5 className='text-xl lg:text-2xl font-bold pb-4'>Account Details</h5>
      <hr />
      <form className='mt-5'>
        <div className='mt-4'>
            <Label className='font-bold text-sm'>FIRST NAME *</Label>
            <Input className='mt-2 focus:outline-none focus:border-none focus:ring-0' placeholder='Your first name'></Input>
        </div>
        <div className='mt-4'>
            <Label className='font-bold text-sm'>LAST NAME *</Label>
            <Input className='mt-2 focus:outline-none focus:border-none focus:ring-0' placeholder='Your first name'></Input>
        </div>
        <div className='mt-4'>
            <Label className='font-bold text-sm'>DISPLAY NAME *</Label>
            <Input className='mt-2 focus:outline-none focus:border-none focus:ring-0' placeholder='Your first name'></Input>
            <i className='mt-2 block text-sm text-neutral-400'>This will be how your name will be displayed in the account section and in reviews</i>
        </div>
        <button type='submit' className='mt-4 bg-neutral-800 text-neutral-100 rounded-lg py-2 px-6'>Save Changes</button>
      </form>
    </div>
  )
}

export default AccountForm
