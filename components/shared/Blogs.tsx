import React from 'react'
import Heading from './Heading'
import Image from 'next/image'
import Cta from './Cta'

export type Blog = {
    id?:number, blogImage:string, blogTitle:string
}

const Blog = ({blogImage, blogTitle}:Blog) => {
    return (
        <div>
            <section className='relative min-h-[20rem] w-full'>
                <Image src={blogImage} fill alt={blogTitle} objectFit='cover' />
            </section>
            <section className='mt-4'>
                <p className='p-regular-18'>{blogTitle}</p>
                <Cta cta='Read More' />
            </section>
        </div>
    )
}

const Blogs = ({data}: {data: Blog[]}) => {
  return (
    <div className='py-6'>
      <Heading heading='Articles' cta='More Articles' />
      <div className='py-8 grid sm:grid-cols-3 grid-cols-1 sm:gap-4 gap-14'>
            {data.map(blog => <Blog key={blog.id} {...blog} />)}
      </div>
    </div>
  )
}

export default Blogs
