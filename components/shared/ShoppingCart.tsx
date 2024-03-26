import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";
import { MdOutlineDiscount } from "react-icons/md";

const ProductCard = () => {
  return (
      <div className="flex justify-between">
        <section className="flex flex-wrap items-center gap-4">
          <Image
            src="/assets/images/sofa.png"
            alt="Product"
            width={60}
            height={60}
          />
          <div className="text-sm">
            <p className="font-bold">Tray Table</p>
            <p className="mt-1">Color - Black</p>
            <div className="flex mt-2 gap-5 justify-center items-center rounded-lg border border-neutral-800 text-center text-sm max-w-24 w-24 py-1 px-2 font-bold">
              <AiOutlineMinus className="text-xl cursor-pointer" />
              <p>1</p>
              <AiOutlinePlus className="text-xl cursor-pointer" />
            </div>
          </div>
        </section>
        <div className="text-base">
          <p className="tracking-wider">$13.67</p>
          <div className="text-right">
            <AiOutlineClose className="text-right inline-block" />
          </div>
        </div>
      </div>
  );
};

const ProductsMobile = () => {
  return (
    <div className="md:hidden block">
      <h1 className="text-xl py-3 px-1 font-[700]">Items in the Cart</h1>
      <section className="flex flex-col gap-6 mt-6">
      <ProductCard />
      <hr />
      <ProductCard />
      <hr />
      <ProductCard />
      <hr />
      </section>
    </div>
  );
};

const ShoppingCart = () => {
  return (
    <div className="flex flex-col lg:flex-row pb-12">
      <section className="lg:w-2/3 w-full">
        <ProductsMobile />
        <Table className="hidden md:block">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Product</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium w-48 flex items-center gap-4">
                <button>
                  <AiOutlineClose className="text-xl" />
                </button>
                <section className="flex flex-wrap items-center gap-4">
                  <Image
                    src="/assets/images/sofa.png"
                    alt="Product"
                    width={60}
                    height={60}
                  />
                  <div>
                    <p className="font-bold">Tray Table</p>
                    <p className="mt-2">Color - Black</p>
                  </div>
                </section>
              </TableCell>
              <TableCell className="max-w-40 w-40">
                <div className="flex gap-5 justify-center items-center rounded-lg border border-neutral-800 text-center text-lg max-w-24 w-24 py-1 px-2 h-8font-bold">
                  <AiOutlineMinus className="text-2xl cursor-pointer" />
                  <p>1</p>
                  <AiOutlinePlus className="text-2xl cursor-pointer" />
                </div>
              </TableCell>
              <TableCell className="w-40 text-lg">$56</TableCell>
              <TableCell className="text-right w-40 text-lg">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium w-48 flex items-center gap-4">
                <button>
                  <AiOutlineClose className="text-xl" />
                </button>
                <section className="flex flex-wrap items-center gap-4">
                  <Image
                    src="/assets/images/sofa.png"
                    alt="Product"
                    width={60}
                    height={60}
                  />
                  <div>
                    <p className="font-bold">Tray Table</p>
                    <p className="mt-2">Color - Black</p>
                  </div>
                </section>
              </TableCell>
              <TableCell className="max-w-40 w-40">
                <div className="flex gap-5 justify-center items-center rounded-lg border border-neutral-800 text-center text-lg max-w-24 w-24 py-1 px-2 h-8font-bold">
                  <AiOutlineMinus className="text-2xl cursor-pointer" />
                  <p>1</p>
                  <AiOutlinePlus className="text-2xl cursor-pointer" />
                </div>
              </TableCell>
              <TableCell className="w-40 text-lg">$56</TableCell>
              <TableCell className="text-right w-40 text-lg">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div aria-label="coupon" className="mt-8">
          <p className="font-bold text-xl">Have a coupon?</p>
          <p className="text-neutral-600 text-base">
            Add your code for an instant cart discount.
          </p>
          <div className="rounded-sm flex-wrap flex items-center gap-1 border mt-3 max-w-96 w-full border-neutral-600 py-2 px-3">
            <MdOutlineDiscount className="text-sm md:text-lg" />
            <input
              className="border-none flex-1 md:text-lg text-base outline-none"
              placeholder="Coupon Code"
            ></input>
            <button className="text-base md:text-lg">Apply</button>
          </div>
        </div>
      </section>
      <section className="border h-fit border-neutral-700 mt-8 lg:mt-0 lg:ml-12 p-5 w-full lg:w-1/3 rounded-md">
        <div>
          <p className="text-lg font-[400]">Cart Summary</p>
          <div className="mt-5">
            <div className="flex items-center py-3 px-4 rounded-sm bg-gray-100 border border-neutral-600 justify-between">
              <div className="flex items-center gap-2 text-base md:text-lg">
                <input
                  id="free"
                  className="accent-black w-4 h-4"
                  type="radio"
                  name="shipping"
                />
                <label htmlFor="free">Free Shipping</label>
              </div>
              <p className="md:text-lg text-base">$0.00</p>
            </div>
            <div className="flex items-center mt-3 py-3 px-4 rounded-sm bg-gray-100 border border-neutral-600 justify-between">
              <div className="flex items-center gap-2 text-base md:text-lg">
                <input
                  id="express"
                  className="accent-black w-4 h-4"
                  type="radio"
                  name="shipping"
                />
                <label htmlFor="express">Express Shipping</label>
              </div>
              <p className="md:text-lg text-base">$12.99</p>
            </div>
            <div className="flex text-base md:text-lg mt-6 justify-between items-center">
              <p>Subtotal</p>
              <p className="tracking-wide">$1234.00</p>
            </div>
            <div className="flex text-base md:text-lg mt-2 font-bold justify-between items-center">
              <p>Total</p>
              <p className="tracking-wide">$1345.00</p>
            </div>
            <button className="mt-6 text-base  md:text-lg text-center w-full bg-neutral-800 text-neutral-200 rounded-lg py-2 md:py-3 px-4">
              Checkout
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShoppingCart;
