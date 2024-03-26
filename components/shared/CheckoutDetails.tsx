"use client";
import React, { HTMLInputTypeAttribute, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Image from "next/image";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdOutlineDiscount } from "react-icons/md";

const InputField = ({
  label,
  placeholder,
  type,
  required,
}: {
  required: boolean;
  type: HTMLInputTypeAttribute;
  label: string;
  placeholder?: string;
}) => {
  return (
    <div className="flex-1">
      <Label className="uppercase font-bold tracking-tight">{label}</Label>
      <Input
        required={required}
        type={type}
        className="mt-2 border-neutral-500 outline-none focus-visible:ring-offset-0 focus-visible:ring-1"
        placeholder={placeholder}
      />
    </div>
  );
};

const Wrapper = ({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="py-8 px-6 [&:not(:first-child)]:mt-8 rounded-md border border-neutral-800">
      <h1 className="text-xl font-bold">{heading}</h1>
      {children}
    </div>
  );
};

const CheckoutDetails = () => {
  const [differentBilling, setDifferentBilling] = useState(false);
  return (
    <section className="py-14 grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="md:col-span-2">
        <Wrapper heading="Contact Information">
          <div>
            <div className="mt-5 flex items-center gap-3">
              <InputField
                required={true}
                type="string"
                label="First Name"
                placeholder="First Name"
              />
              <InputField
                required={true}
                type="string"
                label="Last Name"
                placeholder="Last Name"
              />
            </div>
            <div className="mt-4">
              <InputField
                required={true}
                type="string"
                label="Phone Number"
                placeholder="Phone Number"
              />
            </div>
            <div className="mt-4">
              <InputField
                required={true}
                type="email"
                label="Email Address"
                placeholder="Email"
              />
            </div>
          </div>
        </Wrapper>
        <Wrapper heading="Shipping Address">
          <div>
            <div className="mt-4">
              <InputField
                required={true}
                type="string"
                label="Street Address"
                placeholder="Street Address"
              />
            </div>
            <div className="mt-4">
              <InputField
                required={true}
                type="string"
                label="Country"
                placeholder="Country"
              />
            </div>
            <div className="mt-4">
              <InputField
                required={true}
                type="string"
                label="Town/City"
                placeholder="Town/City"
              />
            </div>
            <div className="mt-5 flex items-center gap-3">
              <InputField
                required={true}
                type="string"
                label="State"
                placeholder="State"
              />
              <InputField
                required={true}
                type="string"
                label="Zip Code"
                placeholder="Zip Code"
              />
            </div>
            <div className="flex mt-4 jus items-center gap-2">
              <Input
                onChange={() => setDifferentBilling((p) => !p)}
                id="differentBilling"
                className="w-4 h-4 accent-black rounded-lg"
                type="checkbox"
              />
              <Label htmlFor="differentBilling" className="flex-1">
                Use a different billing address (optional)
              </Label>
            </div>
          </div>
        </Wrapper>
        {differentBilling && (
          <Wrapper heading="Billing Address">
            <div>
              <div className="mt-4">
                <InputField
                  required={true}
                  type="string"
                  label="Street Address"
                  placeholder="Street Address"
                />
              </div>
              <div className="mt-4">
                <InputField
                  required={true}
                  type="string"
                  label="Country"
                  placeholder="Country"
                />
              </div>
              <div className="mt-4">
                <InputField
                  required={true}
                  type="string"
                  label="Town/City"
                  placeholder="Town/City"
                />
              </div>
              <div className="mt-5 flex items-center gap-3">
                <InputField
                  required={true}
                  type="string"
                  label="State"
                  placeholder="State"
                />
                <InputField
                  required={true}
                  type="string"
                  label="Zip Code"
                  placeholder="Zip Code"
                />
              </div>
            </div>
          </Wrapper>
        )}
      </div>
      <div className="md:col-span-1">
        <Wrapper heading="Order Summary">
          <div className=" pb-8 text-sm md:text-base">
            <div className="flex mt-6 justify-between">
              <section className="flex flex-wrap items-center gap-2">
                <Image
                  src="/assets/images/sofa.png"
                  alt="Product"
                  width={60}
                  height={60}
                />
                <div>
                  <p className="font-bold">Tray Table</p>
                  <p className="mt-1">Color - Black</p>
                  <div className="flex mt-2 gap-5 justify-center items-center rounded-lg border border-neutral-800 text-center text-lg max-w-24 w-24 py-1 px-2 h-8font-bold">
                    <AiOutlineMinus className="text-2xl cursor-pointer" />
                    <p>1</p>
                    <AiOutlinePlus className="text-2xl cursor-pointer" />
                    </div>
                </div>
              </section>
              <p>$38.00</p>
            </div>
            <div className="flex mt-6 justify-between">
              <section className="flex flex-wrap items-center gap-2">
                <Image
                  src="/assets/images/sofa.png"
                  alt="Product"
                  width={60}
                  height={60}
                />
                <div>
                  <p className="font-bold">Tray Table</p>
                  <p className="mt-1">Color - Black</p>
                  <div className="flex mt-2 gap-5 justify-center items-center rounded-lg border border-neutral-800 text-center text-lg max-w-24 w-24 py-1 px-2 h-8font-bold">
                    <AiOutlineMinus className="text-2xl cursor-pointer" />
                    <p>1</p>
                    <AiOutlinePlus className="text-2xl cursor-pointer" />
                    </div>
                </div>
              </section>
              <p>$38.00</p>
            </div>
            <div className="flex mt-6 justify-between">
              <section className="flex flex-wrap items-center gap-2">
                <Image
                  src="/assets/images/sofa.png"
                  alt="Product"
                  width={60}
                  height={60}
                />
                <div>
                  <p className="font-bold">Tray Table</p>
                  <p className="mt-1">Color - Black</p>
                  <div className="flex mt-2 gap-5 justify-center items-center rounded-lg border border-neutral-800 text-center text-lg max-w-24 w-24 py-1 px-2 h-8font-bold">
                    <AiOutlineMinus className="text-2xl cursor-pointer" />
                    <p>1</p>
                    <AiOutlinePlus className="text-2xl cursor-pointer" />
                    </div>
                </div>
              </section>
              <p>$38.00</p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <Input placeholder="Coupon Code" type="text" className="flex-1 py-2 text-sm px-3 rounded-md border border-neutral-700 focus-visible:ring-0 focus-visible:ring-offset-0" />
            <button className="py-2 px-6 bg-neutral-700 text-neutral-200 text-base rounded-lg">Apply</button>
          </div>
          <div className="flex mt-4 flex-wrap justify-between text-sm md:text-base items-center">
            <div className="flex items-center gap-1">
                <MdOutlineDiscount />
                <p className="font-bold">TRY300</p>
            </div>
            <div className="flex text-green-500 items-center gap-1 tracking-tight">
                <p>-$38.00</p>
                <button>[Remove]</button>
            </div>
          </div>
          <hr className="mt-4" />
          <div className="items-center flex justify-between py-3">
            <p className="text-sm md:text-base">Shipping</p>
            <p className="font-bold text-sm md:text-base">Free</p>
          </div>
          <hr />
          <div className="items-center flex justify-between py-3">
            <p className="text-sm md:text-base">Subtotal</p>
            <p className="font-bold  text-base md:text-lg">$99.00</p>
          </div>
          <hr />
          <div className="items-center flex justify-between py-3">
            <p className="text-sm md:text-base">Total</p>
            <p className="font-bold text-xl md:text-2xl">$234.00</p>
          </div>
          <hr />
        </Wrapper>
      </div>
    </section>
  );
};

export default CheckoutDetails;
