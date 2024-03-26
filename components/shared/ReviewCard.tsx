import Image from "next/image";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";


export const Profile = () => {
    return(
        <div className='w-full flex gap-5 mt-4'>
            <div className='w-12 h-12 min-w-8 min-h-8 rounded-full'>
                <Image alt="Avatar" src="/assets/images/reviewAvatar.png" width={500} height={500} />
            </div>
            <div>
                <p className='font-bold text-base'>Varghab Shib</p>
                <p className='mt-2 text-neutral-600 text-sm tracking-tight'>Exceptional performance and sleek design make this product a must-have! Easy to use, durable construction, and impressive features. Highly recommended for anyone seeking quality and reliability.</p>
                <div className='mt-2 flex items-center gap-4'>
                    <button className='text-center flex items-center gap-1 text-[14px]'>
                        <AiOutlineHeart className='text-rose-600' />
                        <span className='font-[400]'>25</span>
                    </button>
                    <button>Reply</button>
                </div>
            </div>
        </div>
    )
}

const ReviewCard = () => {
  return (
    <div className="w-full flex gap-5 mt-10">
      <div className="bg-red-100 max-w-16 w-full h-16 rounded-full">
        <Image
          alt="Avatar"
          src="/assets/images/reviewAvatar.png"
          width={500}
          height={500}
        />
      </div>
      <div>
        <p className="font-bold text-lg">Varghab Shib</p>
        <p className="mt-2 text-neutral-600 tracking-tight">
          Exceptional performance and sleek design make this product a
          must-have! Easy to use, durable construction, and impressive features.
          Highly recommended for anyone seeking quality and reliability.
        </p>
        <div className="mt-2 flex items-center gap-4">
          <button className="text-center flex items-center gap-1 text-[16px]">
            <AiOutlineHeart className="text-rose-600" />
            <span className="font-[400]">25</span>
          </button>
          <button>Reply</button>
        </div>
        <Profile />
        <Profile />
      </div>
    </div>
  );
};

export default ReviewCard;
