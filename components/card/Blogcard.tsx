import { urlFor } from '@/app/lib/sanity'
import Image from 'next/image'
import React from 'react'


interface Iprops{
    title:string
    titleImage:string|null
    smalldescription:string|null
}
const Blogcard = ({smalldescription,title,titleImage}:Iprops) => {
  return (
    <div className="min-h-[300px] max-h-[340px] w-full  p-2 overflow-hidden ">
    <div className="relative w-full h-[280px]">
      <Image
        alt={`${title} image`}
        fill
        className="absolute object-cover rounded-md"
        src={urlFor(titleImage).url()}
      />
    </div>
    <p className="text-xs mt-1 dark:text-white max-sm:text-center line-clamp-3  text-gray-600">
      {smalldescription}
    </p>
  </div>
  )
}

export default Blogcard