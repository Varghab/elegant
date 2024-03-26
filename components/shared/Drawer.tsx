"use client";
import React from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const Drawer = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <AiOutlineMenu className="text-xl font-bold md:hidden block" />
        </SheetTrigger>
        <SheetContent side={"left"} className="w-[90%]">
          <SheetHeader>
            <div className="flex items-center justify-between">
              <Image
                src="/assets/images/elegant logo.png"
                width={70}
                height={70}
                alt="Logo"
              />
              <SheetTrigger>
                <AiOutlineClose />
              </SheetTrigger>
            </div>
          </SheetHeader>
          <div className="w-full flex items-center gap-2 mt-4 border border-neutral-700 rounded-lg px-4">
            <AiOutlineSearch className="text-lg" />
            <div className="w-full">
              <input
                type="text"
                name="search"
                placeholder="Search"
                className="py-2 w-full outline-none"
              />
            </div>
          </div>
            <ul className="mt-4">
              <li className="py-4 text-xl">Home</li>
              <hr />
              <div className="py-4 text-xl flex justify-between items-center">
                <li>Shop</li>
                <MdOutlineKeyboardArrowDown />
              </div>
              <hr />
              <li className="py-4 text-xl">Blogs</li>
              <hr />
              <li className="py-4 text-xl">Contact us</li>
              <hr />
            </ul>
            <ul className="mt-28 py-4 text-xl flex flex-col justify-end">
              <div className="py-4 flex items-center justify-between">
                <li>Cart</li>
                <div className="flex items-center gap-2">
                  <Image src="/assets/icons/bag.svg" alt="cart" width={20} height={20} />
                  <span className="w-5 h-5 rounded-full bg-black p-3 text-center flex items-center justify-center">
                    <p className="text-white text-sm">4</p>
                  </span>
                </div>
              </div>
              <hr />
              <div className="py-4 flex items-center justify-between">
                <li>Wishlist</li>
                <div className="flex items-center gap-2">
                  <Image src="/assets/icons/heart.png" alt="cart" width={20} height={20} />
                  <span className="w-5 h-5 rounded-full bg-black p-3 text-center flex items-center justify-center">
                    <p className="text-white text-sm">4</p>
                  </span>
                </div>
              </div>
              <hr />
              <button className="py-4 w-full bg-neutral-800 text-neutral-200 rounded-lg mt-2">
                Sign Up
              </button>
            </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Drawer;
