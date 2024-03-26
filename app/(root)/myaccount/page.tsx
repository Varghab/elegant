import Image from "next/image";
import React from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AccountForm from "@/components/shared/AccountForm";
import Address from "@/components/shared/Address";
import Orders from "@/components/shared/Orders";
import Wishlist from "@/components/shared/Wishlist";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const MyAccount = () => {
  return (
    <div className="wrapper">
      <h4 className="text-center text-3xl lg:text-4xl font-[700] mt-6">
        My Account
      </h4>
      <Tabs
        defaultValue="account"
        className="mt-8 flex flex-col md:flex-row gap-6 md:gap-12"
      >
        <section className="md:w-1/4 w-full min-h-96 bg-gray-200 rounded-lg py-8 px-3">
          <div>
            <div className="mx-auto w-24 h-24 rounded-full relative">
              <Image
                src="/assets/images/reviewAvatar.png"
                alt="Profile Picture"
                fill
                objectFit="center"
              />
              <div className="absolute bg-black p-2 rounded-full border-2 border-neutral-100 bottom-0 right-0">
                <AiOutlineCamera className="text-white" />
              </div>
            </div>
            <p className="text-center mt-2 tracking-tight text-lg font-bold">
              Varghab Shib
            </p>
            <div className="mt-4">
              <TabsList className="flex-col bg-gray-200 gap-2">
                <TabsTrigger
                  className="data-[state=active]:bg-neutral-800 md:text-base lg:text-lg data-[state=active]:text-neutral-100"
                  value="account"
                >
                  Account
                </TabsTrigger>
                <TabsTrigger
                  className="data-[state=active]:bg-neutral-800 md:text-base lg:text-lg data-[state=active]:text-neutral-100"
                  value="address"
                >
                  Address
                </TabsTrigger>
                <TabsTrigger
                  className="data-[state=active]:bg-neutral-800 md:text-base lg:text-lg data-[state=active]:text-neutral-100"
                  value="orders"
                >
                  Orders
                </TabsTrigger>
                <TabsTrigger
                  className="data-[state=active]:bg-neutral-800 md:text-base lg:text-lg data-[state=active]:text-neutral-100"
                  value="wishlist"
                >
                  Wishlist
                </TabsTrigger>
                {/* <TabsTrigger
                  className="data-[state=active]:bg-neutral-800 md:text-base lg:text-lg data-[state=active]:text-neutral-100"
                  value="logout"
                > */}
                  <AlertDialog >
                    <AlertDialogTrigger className="w-full text-left py-2 px-3  md:text-base lg:text-lg">Logout</AlertDialogTrigger>
                    <AlertDialogContent className="w-[90%] rounded-lg">
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Do you want to logout?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          You will have to sign in again to access your account.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction className="text-neutral-800">Logout</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                {/* </TabsTrigger> */}
              </TabsList>
            </div>
          </div>
        </section>
        <section className="md:w-3/4 w-full">
          <TabsContent value="account">
            <AccountForm />
          </TabsContent>
          <TabsContent value="address">
            <Address />
          </TabsContent>
          <TabsContent value="orders">
            <Orders />
          </TabsContent>
          <TabsContent value="wishlist">
            <Wishlist />
          </TabsContent>
        </section>
      </Tabs>
    </div>
  );
};

export default MyAccount;
