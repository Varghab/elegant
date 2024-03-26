import Newsletter from "@/components/shared/Newsletter";
import ProductPageCta from "@/components/shared/ProductPageCta";
import ReviewCard from "@/components/shared/ReviewCard";
import Image from "next/image";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Product = () => {
  return (
    <div>
      <div className="min-h-screen wrapper">
        <div>Home / Shop / Living Room / Product</div>
        <div className="mt-6 flex gap-4 md:gap-8 flex-col md:flex-row">
          <section className="flex-1 flex flex-col gap-6">
            <div className="">
              <Image
                src="/assets/products/product1.jpg"
                alt="Product1"
                width={1600}
                height={1200}
              />
            </div>
            <div className="md:flex gap-4 items-center flex-wrap hidden ">
              <div className="relative w-32 h-32">
                <Image
                  src="/assets/products/product4.jpg"
                  alt="Product1"
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="relative w-32 h-32">
                <Image
                  src="/assets/products/product2.jpg"
                  alt="Product1"
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="relative w-32 h-32">
                <Image
                  src="/assets/products/product3.jpg"
                  alt="Product1"
                  fill
                  objectFit="cover"
                />
              </div>
            </div>
          </section>
          <section className="flex-1">
            <h4 className="text-2xl sm:text-4xl font-bold">Modern Sofa</h4>
            <p className="mt-2 text-neutral-600 text-sm sm:text-xl">
              Buy one or buy a few and make every space where you sit more
              convenient. Light and easy to move around with removable tray top,
              handy for serving snacks.
            </p>
            <div className="mt-3 flex gap-3 items-center">
              <p className=" text-xl sm:text-2xl font-bold">$169</p>
              <p className="text-base sm:text-xl line-through">$400</p>
            </div>
            <div className="mt-8">
              <p className="text-gray-500 text-lg">Measurements </p>
              <p>17 1/2x20 5/8 "</p>
            </div>
            <div className="mt-4 flex items-center gap-1">
              <p className="text-gray-500 text-lg">Choose colour </p>
              <MdKeyboardArrowRight className="text-gray-500" />
            </div>
            <div className="flex items-center gap-4 mt-2 ">
              <section className="w-24 h-full">
                <p className="text-lg text-gray-700 w-full">Black</p>
                <div className="mt-2 relative w-full h-24 max-w-24 rounded-md">
                  <Image
                    className="rounded-md"
                    src="/assets/products/product3.jpg"
                    alt="Product1"
                    fill
                    objectFit="cover"
                  />
                </div>
              </section>
              <section className="w-24 h-full">
                <p className="text-lg text-gray-700 w-full">Black</p>
                <div className="mt-2 relative w-full h-24 max-w-24 rounded-md">
                  <Image
                    className="rounded-md"
                    src="/assets/products/product2.jpg"
                    alt="Product1"
                    fill
                    objectFit="cover"
                  />
                </div>
              </section>
              <section className="w-24 h-full">
                <p className="text-lg text-gray-700 w-full">Black</p>
                <div className="mt-2 relative w-full h-24 max-w-24 rounded-md">
                  <Image
                    className="rounded-md"
                    src="/assets/products/product1.jpg"
                    alt="Product1"
                    fill
                    objectFit="cover"
                  />
                </div>
              </section>
            </div>
            <div className="mt-4">
              <ProductPageCta />
            </div>
          </section>
        </div>
        <div className="py-12">
          <div className="text-center">
            <h4 className="text-3xl font-bold text-neutral-600 underline underline-offset-4">Reviews</h4>
          </div>
          <ReviewCard />
          <ReviewCard />
          <div className="w-full mt-8">
            <button className="mx-auto block py-2 px-6 border-2 rounded-full border-neutral-700">
              Load More
            </button>
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default Product;
