import { getBlogList } from "@/api/BlogData";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Client, urlFor } from "./lib/sanity";
import { blogDatatype } from "./lib/interface";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Metadata } from "next";
import { Suspense } from "react";
import Blogcard from "@/components/card/Blogcard";


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
    <Suspense fallback={<p>loading....</p>}>

    
    <div className="grid grid-cols-2 gap-5  max-sm:grid-cols-1 mt-8 ">
      {data?.map((post) => {
        return (
          <Link href={`/blog/${post.currentSlug}`} key={post?.title}>
            <Blogcard smalldescription={post?.smalldescription} title={post?.title} titleImage={post?.titleImage}  />
          </Link>
        );
      })}
    </div>
    </Suspense>
  );
}
