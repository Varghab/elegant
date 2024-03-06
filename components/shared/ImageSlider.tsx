"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const ImageSlider = ({images}:{images:{url:string, caption:string}[]}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentId, setCurrentId] = useState<NodeJS.Timeout>();
    const [mouseLeave, setMouseLeave] = useState(false);
    const nextSlide = () => {
        setCurrentSlide((p:number)=>{
            if(p===images.length - 1) return 0;
            else return p+1;
        });
    }
    const prevSlide = () => {
        setCurrentSlide((p:number)=>{
            if(p===0) return images.length - 1;
            else return p-1;
        });
    }
    useEffect(()=>{
        let id = setInterval(nextSlide,3000) 
        setCurrentId(id);        
        return () => clearInterval(id);
    },[mouseLeave])

    return (
        <div onMouseLeave={()=>setMouseLeave(p=>!p)} onMouseEnter={()=> clearInterval(currentId)} className='relative w-full min-h-[500px]'>
            {images.map((image, i) => (
                <div
                    key={image.url}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity ease-in-out duration-500 ${
                        currentSlide === i ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <Image loading='lazy' src={image.url} alt="slides" fill objectFit="cover" objectPosition='center' />
                </div>
            ))}
            <div className='absolute flex-between w-full px-4 h-full'>
                <button onClick={prevSlide}><Image src="/assets/icons/leftnav.png" className='w-10 md:w-full' alt="Left arrow" width={60} height={60} /></button>
                <button onClick={nextSlide}><Image src="/assets/icons/rightnav.png" className='w-10 md:w-full' alt="Right arrow" width={60} height={60} /></button>
            </div>
        </div>
    )
}

export default ImageSlider
