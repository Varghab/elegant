"use client"
import CheckoutDetails from "@/components/shared/CheckoutDetails";
import ShoppingCart from "@/components/shared/ShoppingCart";
import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineBackward } from "react-icons/ai";
import { MdOutlineArrowLeft } from "react-icons/md";

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