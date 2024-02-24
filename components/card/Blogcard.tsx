import { urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface Iprops {
  title: string;
  titleImage: string | null;
  smalldescription: string | null;
  content: string;
  description: string;
  slug:string
}
const Blogcard = ({
  smalldescription,
  title,
  titleImage,
  slug,
  content,
  description,
}: Iprops) => {
  return (
    <div className="min-h-[240px] flex items-start  max-md:flex-col relative">
      <div className="relative max-md:w-full min-w-[340px] min-h-[170px]">
        <Image
          alt={`${title} image`}
          fill
          className="absolute object-cover rounded-md"
          src={urlFor(titleImage).url()}
        />
      </div>
      <div className="mt-1 ml-4 max-md:mt-2 max-md:ml-0   w-[60%] max-md:w-full">
        <p className="text-xs  max-md:pt-0 dark:text-white max-sm:text-center   text-gray-600">
          {smalldescription}
        </p>
        <p className="text-xs max-md:pt-0 dark:text-white max-sm:text-center  text-gray-600">
          {description}..
        </p>
        <div  className="max-md:flex max-md:items-center max-md:justify-end mt-4 max-md:mt-0 max-md:mb-3 ">
        <Link href={`/blog/${slug}`}><Button >Read more</Button></Link>
        </div>
        
      </div>
    </div>
  );
};

export default Blogcard;
