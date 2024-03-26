import Image from 'next/image'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
import { AiOutlineClose } from 'react-icons/ai';

const Cart = () => {
    return (
            <Sheet>
                <SheetTrigger>
                    <Image alt="Cart" width={20} height={20} src="/assets/icons/bag.svg" />
                </SheetTrigger>
                <SheetContent>
                    <div className='flex justify-between items-center'>
                        <p className='text-2xl font-bold'>Cart</p>
                        <SheetTrigger>
                            <AiOutlineClose className='text-xl' />
                        </SheetTrigger>
                    </div>
                    <div className='mt-6'>
                        <p className='text-lg text-neutral-700'>No items in the cart.</p>
                    </div>
                </SheetContent>
            </Sheet>
    )
}

export default Cart
