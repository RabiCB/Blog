import { getBlogList } from "@/api/BlogData";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Client, urlFor } from "./lib/sanity";
import { blogDatatype } from "./lib/interface";
import { Card } from "@/components/ui/card";
import Link from "next/link";

async function getData() {
  const data = await Client.fetch(getBlogList);
  return data;
}



export default async function Home() {
  const data:blogDatatype[] = await getData();
console.log(data)
  return (
    <div className="grid grid-cols-2 gap-5  max-sm:grid-cols-1 mt-8 ">
     {
      data?.map((post)=>{
        return(
          <Link href={`/blog/${post.currentSlug}`} key={post?.title} >
          <Card className=" py-1 px-1 cursor-pointer" >
            <div className="relative w-full h-[200px]">
            <Image alt={`${post?.title} image`} fill className="absolute object-contain" src={urlFor(post?.titleImage).url()} />
            </div>
            <p className="text-xs max-sm:text-center text-gray-600">{post?.smalldescription}</p>
            
          </Card>
          </Link>
        )
      })
     }
    </div>
  );
}
