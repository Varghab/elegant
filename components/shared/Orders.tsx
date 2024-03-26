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

const Orders = () => {
  return (
    <div>
      <h5 className='text-xl lg:text-2xl font-bold pb-4'>Orders History</h5>
      <Table className=''>
        <TableHeader>
            <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Price</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableCell>ELEGANT389123</TableCell>
                <TableCell>25th January, 2024</TableCell>
                <TableCell>Pending</TableCell>
                <TableCell>$524</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>ELEGANT389122</TableCell>
                <TableCell>15th January, 2024</TableCell>
                <TableCell>Delivered</TableCell>
                <TableCell>$48</TableCell>
            </TableRow>
        </TableBody>
    </Table>
    </div>
)
}

export default Orders
