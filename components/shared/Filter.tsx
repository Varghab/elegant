"use client";
import React, { useState } from "react";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


const Filter = () => {
  const [isFilter, setIsFilter] = useState<boolean>(false);
  return (
    <>
      <div className="flex items-center justify-between">
        <div
          onClick={() => setIsFilter((p) => !p)}
          className="flex cursor-pointer gap-2 items-center"
        >
          <CgArrowsExchangeAlt className="text-2xl" />
          <p className="text-xl font-[700]">Filter</p>
        </div>
        <DropdownMenu>
              <DropdownMenuTrigger className="flex outline-none sm:hidden font-bold items-center gap-1">
                Sort by <MdKeyboardArrowDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40">
                <DropdownMenuLabel>Price</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>High to Low</DropdownMenuItem>
                <DropdownMenuItem>Low to High</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Date</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Latest</DropdownMenuItem>
                <DropdownMenuItem>Oldest</DropdownMenuItem>

              </DropdownMenuContent>
            </DropdownMenu>
      </div>
      <section className={`mt-6 relative sm:h-full transition-all sm:opacity-100 ${isFilter ? "h-[22rem] block" : "h-2 sm:block hidden"}`}>
        <div className="">
          <p className="text-md font-bold">CATEGORIES</p>
          <div className="h-36 overflow-y-auto mt-2">
            <ul className="text-[0.9rem] text-neutral-600">
              <li>All Rooms</li>
              <li>All Rooms</li>
              <li>All Rooms</li>
              <li>All Rooms</li>
              <li>All Rooms</li>
              <li>All Rooms</li>
              <li>All Rooms</li>
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-md font-bold">PRICE</p>
          <div className="mt-2">
            <ul className="text-[0.9rem] text-neutral-600">
              <li className="flex justify-between items-center">
                <label>$10 - $50</label>
                <input
                  name="price-range"
                  className="w-4 h-4 accent-neutral-700"
                  type="radio"
                />
              </li>
              <li className="flex justify-between items-center">
                <label>$10 - $50</label>
                <input
                  name="price-range"
                  className="w-4 h-4 accent-neutral-700"
                  type="radio"
                />
              </li>
              <li className="flex justify-between items-center">
                <label>$10 - $50</label>
                <input
                  name="price-range"
                  className="w-4 h-4 accent-neutral-700"
                  type="radio"
                />
              </li>
              <li className="flex justify-between items-center">
                <label>$10 - $50</label>
                <input
                  name="price-range"
                  className="w-4 h-4 accent-neutral-700"
                  type="radio"
                />
              </li>
              <li className="flex justify-between items-center">
                <label>$10 - $50</label>
                <input
                  name="price-range"
                  className="w-4 h-4 accent-neutral-700"
                  type="radio"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Filter;
