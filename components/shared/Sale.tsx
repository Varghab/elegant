import Image from "next/image";
import React from "react";

const Sale = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-primary md:items-center">
      <section className="flex-1 relative w-full min-h-[30rem]">
        <Image
          src="/assets/images/furniture.png"
          alt="Sale"
          fill
          objectFit="cover"
        />
      </section>
      <section className="flex-1 md:p-14 p-8">
        <div className="max-w-[20rem]">
          <h5 className="text-[#377DFF] text-lg font-bold">SALE UP TO 35% OFF</h5>
          <h4 className="mt-2 h4-medium">HUNDREDS of New lower prices!</h4>
          <p className="mt-4 p-regular-18">It’s more affordable than ever to give every room in your home a stylish makeover</p>
          <span className="flex mt-6 items-center underline underline-offset-2">
            <p className="font-[300] cursor-pointer text-md sm:text-xl">Show Now</p>
            <Image alt="right-arrow" src="/assets/icons/arrow-right.svg" width={18} height={18} />
          </span>
        </div>
      </section>
    </div>
  );
};

export default Sale;
