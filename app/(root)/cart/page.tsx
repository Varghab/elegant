"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ShoppingCart from "@/components/shared/ShoppingCart";
import CheckoutDetails from "@/components/shared/CheckoutDetails";
import OrderSuccess from "@/components/shared/OrderSuccess";
import { MobileCart } from "../_components/MobileCart";

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
