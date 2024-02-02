import { getBlogList } from "@/api/BlogData";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Client, urlFor } from "./lib/sanity";
import { blogDatatype } from "./lib/interface";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Metadata } from "next";


export const metadata:Metadata={
  title:"Blogcb",
  description:"Blogs and Latest technology articles",
  verification:{
google:"rqoGcoydFL1P8M80747RFMH41LZkBG1Ti4eCLGPiAEo"
  }

}

async function getData() {
  const data = await Client.fetch(getBlogList);
  return data;
}

export default async function Home() {
  const data: blogDatatype[] = await getData();

  return (
    <div className="grid grid-cols-2 gap-5  max-sm:grid-cols-1 mt-8 ">
      {data?.map((post) => {
        return (
          <Link href={`/blog/${post.currentSlug}`} key={post?.title}>
            <div className="min-h-[245px] max-h-[250px] w-full  p-2 overflow-hidden ">
              <div className="relative w-full h-[200px]">
                <Image
                  alt={`${post?.title} image`}
                  fill
                  className="absolute object-cover rounded-md"
                  src={urlFor(post?.titleImage).url()}
                />
              </div>
              <p className="text-xs mt-1 dark:text-white max-sm:text-center line-clamp-3  text-gray-600">
                {post?.smalldescription}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
