import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import AddToCart from './AddToCart'
import { AiOutlineClose } from 'react-icons/ai'
import Image from 'next/image'

  const Product  = () => {
    return (
        <div className='flex items-center gap-4'>
            <button>
                <AiOutlineClose className='text-xl' />
            </button>
            <section className='flex flex-wrap items-center gap-4'>
                <Image src="/assets/images/sofa.png" alt="Product" width={60} height={60} />
                <div>
                    <p className='font-bold'>Tray Table</p>
                    <p className='mt-2'>Color - Black</p>
                </div>
            </section>
        </div>
    )
  }

const Wishlist = () => {
  return (
    <div>
        <h5 className='text-xl lg:text-2xl font-bold pb-4'>Your Wishlist</h5>
        <Table className=''>
        <TableHeader>
            <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Action</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableCell><Product /></TableCell>
                <TableCell>$48</TableCell>
                <TableCell>
                    <AddToCart />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Product /></TableCell>
                <TableCell>$23.89</TableCell>
                <TableCell>
                    <AddToCart />
                </TableCell>
            </TableRow>
        </TableBody>
    </Table>
    </div>
  )
}

export default Wishlist
