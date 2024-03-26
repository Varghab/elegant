"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { MdKeyboardArrowDown } from "react-icons/md";
import LayoutSelect from "./LayoutSelect";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ShopProducts = () => {
  const [layout, setLayout] = useState<"3x3" | "2x2" | "1x1">("3x3");
  let currentLayout: string;
  if (layout === "3x3") currentLayout = "grid-cols-3";
  else if (layout === "1x1") currentLayout = "grid-cols-1";
  else currentLayout = "grid-cols-2";
  useEffect(() => {
    const currentWidth = window.innerWidth;
    if (currentWidth < 640) setLayout("1x1");
    else if (currentWidth < 768) {
      setLayout("2x2");
    }
    console.log(currentLayout);
  }, []);
  return (
    <>
      <div className="flex justify-between items-center">
        <h4 className="text-xl font-bold">Living Room</h4>
        <div className="flex gap-6 items-center">
          
            <DropdownMenu>
              <DropdownMenuTrigger className="hidden outline-none sm:flex font-bold items-center gap-1">
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
          
          <LayoutSelect layout={layout} setLayout={setLayout} />
        </div>
      </div>

      <div className={`mt-8 grid ${currentLayout} gap-5`}>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
      </div>
    </>
  );
};

export default ShopProducts;
