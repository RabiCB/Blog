import { getIndividualBlog } from '@/api/BlogData'
import { Client, urlFor } from '@/app/lib/sanity'
import { PortableText } from '@portabletext/react'
import { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import React from 'react'


export async function generateMetadata(
    { params}: any,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    let slug= params.slug

    const content=await getIndividualBlog(slug)
   
    
    
   
    return {
      title: content?.title,
      description:content?.smalldescription,
      openGraph: {
        images: [{
            url:urlFor(content?.titleImage).url()
        }],
      },
    }
  }



interface blogtype{
    title:string|null,
    content:any
    titleImage:any
}

const Page = async(props:any) => {

const blog:blogtype=await getIndividualBlog(props?.params?.slug)

console.log(blog)
  return (
    <div className='mt-8'>
        <h1 className='text-base block text-center text-blue-500 font-semibold tracking-wide uppercase'>CHANDRA BHANDARI(RABI)-BLog</h1>
        <div className='mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl'>
            <span>{blog?.title}</span>
        </div>
        <Image width={800} height={800} alt={blog?.title ??'blog-img'} className='rounded-md mt-8' src={urlFor(blog?.titleImage).url()} />
        <div className='mt-16 prose prose-blue prose-xl lg:prose-2xl prose-headings:underline dark:prose-invert'>
            <PortableText value={blog?.content}/>
        </div>
    </div>
  )
}

export default Page