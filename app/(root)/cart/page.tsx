"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AiOutlineArrowLeft, AiOutlineBackward } from "react-icons/ai";
import { MdOutlineArrowLeft } from "react-icons/md";
import ShoppingCart from "@/components/shared/ShoppingCart";
import CheckoutDetails from "@/components/shared/CheckoutDetails";
import OrderSuccess from "@/components/shared/OrderSuccess";

export const MobileCart = () => {
  const [translate, setTranslate] = useState("");
  const [currentTab, setCurrentTab] = useState<"cart" | "details" | "complete">(
    "cart"
  );
  const onNext = () => {
    if (currentTab === "cart") {
      setTranslate("-translate-x-[33.3333%]");
      setCurrentTab("details");
    }
    if (currentTab === "details") {
      setTranslate("-translate-x-[66.6666%]");
      setCurrentTab("complete");
    }
  };

  const onPrevious = () => {
    if (currentTab === "details") {
      setTranslate("translate-x-[0%]");
      setCurrentTab("cart");
    }
  };

  // <button
  //             onClick={onNext}
  //               disabled={currentTab === "complete"}
  //               className="p-2 bg-neutral-800 disabled:bg-neutral-500 text-neutral-200"
  //             >
  //               Next
  //             </button>

  // <button
  //               onClick={onPrevious}
  //               disabled={currentTab === "cart"}
  //               className="p-2 bg-neutral-800 disabled:bg-neutral-500 text-neutral-200"
  //             >
  //               Prev
  //             </button>

  return (
    <div className="md:hidden overflow-hidden min-h-screen">
      <h1 className="text-center text-2xl md:text-3xl mt-6 font-bold">
        Check out
      </h1>
      <section
        className={`w-[300%] transition-all duration-250 ease-in-out ${translate} overflow-hidden`}
      >
        <div className="text-xl inline-block p-3 w-[33.33333%]">
          <div className="flex justify-between items-center">
            <div
              className={`flex items-center py-4 text-xl ${
                currentTab === "cart" && "border-b-2 border-neutral-600"
              }`}
            >
              <div className="flex items-center justify-center w-6 h-6 p-4 rounded-full bg-neutral-800">
                <span className="inline-block text-gray-300">1</span>
              </div>
              <p className="ml-3">Shopping Cart</p>
            </div>
            <div
              onClick={onNext}
              className="flex items-center justify-center w-6 h-6 p-4 rounded-full bg-gray-400"
            >
              <span className="inline-block text-gray-300">2</span>
            </div>
          </div>
          <div className="mt-6">
              <ShoppingCart />

          </div>
        </div>
        <div className="text-xl inline-block p-3 w-[33.33333%]">
          <div className="flex justify-between items-center">
            <div
              className={`flex items-center py-4 text-xl ${
                currentTab === "details" && "border-b-2 border-neutral-600"
              }`}
            >
              <div
                
                className="flex items-center justify-center w-6 h-6 p-4 rounded-full bg-neutral-800"
              >
                <span className="inline-block text-gray-300">2</span>
              </div>
              <p className="ml-3">Checkout Details</p>
            </div>
            <div className="flex items-center justify-center w-6 h-6 p-4 rounded-full bg-gray-400">
              <span className="inline-block text-gray-300">3</span>
            </div>
          </div>
          <button onClick={onPrevious} className="flex items-center gap-1 mt-3 text-neutral-700 text-sm"><AiOutlineArrowLeft /> Back</button>
          <div>
            <CheckoutDetails />
            
          </div> 
        </div>

        <div className="text-xl inline-block p-3 w-[33.33333%]">
          <div className="flex justify-between items-center">
            <div
              className={`flex items-center py-4 text-xl ${
                currentTab === "complete" && "border-b-2 border-neutral-600"
              }`}
            >
              <div className="flex items-center justify-center w-6 h-6 p-4 rounded-full bg-neutral-800">
                <span className="inline-block text-gray-300">3</span>
              </div>
              <p className="ml-3">Order Complete</p>
            </div>
          </div>
          <p>
            Deep in the depths of the enchanted forest, where
          </p>
        </div>
      </section>
    </div>
  );
};

const Cart = () => {
  return (
    <>
      <div className="wrapper hidden md:block min-h-screen">
        <h1 className="text-center text-2xl md:text-3xl font-bold">
          Check out
        </h1>
        <Tabs defaultValue="cart" className="mt-6">
          <div className="md:flex items-center justify-center max-w-[50rem] w-full mx-auto">
            <TabsList className="text-neutral-800 overflow-auto  bg-white w-full gap-8">
              <TabsTrigger
                className="text-center rounded-none py-4 transition-none px-0 data-[state=active]:border-b-2 data-[state=active]:border-neutral-700"
                value="cart"
              >
                <div className="flex items-center justify-center w-6 h-6 p-4 rounded-full bg-neutral-800">
                  <span className="inline-block text-gray-300">1</span>
                </div>
                <p className="ml-3 text-lg">Shopping Cart</p>
              </TabsTrigger>
              <TabsTrigger
                className="text-center rounded-none py-4 transition-none px-0 data-[state=active]:border-b-2 data-[state=active]:border-neutral-700"
                value="details"
              >
                <div className="flex items-center justify-center w-6 h-6 p-4 rounded-full bg-neutral-800">
                  <span className="text-white inline-block">2</span>
                </div>
                <p className="ml-3 text-lg">Checkout Details</p>
              </TabsTrigger>
              <TabsTrigger
                className="text-center rounded-none py-4 transition-none px-0 data-[state=active]:border-b-2 data-[state=active]:border-neutral-700"
                value="complete"
              >
                <div className="flex items-center justify-center w-6 h-6 p-4 rounded-full bg-neutral-800">
                  <span className="text-white inline-block">3</span>
                </div>
                <p className="ml-3 text-lg">Order Complete</p>
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent className="mt-6" value="cart">
            <ShoppingCart />
          </TabsContent>
          <TabsContent className="mt-6" value="details">
            <CheckoutDetails />
          </TabsContent>
          <TabsContent className="mt-6" value="complete">
            <OrderSuccess />
          </TabsContent>
        </Tabs>
      </div>
      <MobileCart />
    </>
  );
};

export default Cart;
