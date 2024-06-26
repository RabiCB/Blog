import { getBlogList } from "@/apis/BlogData";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Client, urlFor } from "./lib/sanity";
import { blogDatatype } from "./lib/interface";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Metadata } from "next";
import { Suspense } from "react";
import Blogcard from "@/components/card/Blogcard";
import { Skeleton } from "@/components/ui/skeleton";
import Skeletons from "@/components/Loader/Skeletons";
import Footer from "@/components/footer/Footer";
import { MyVerticallyCenteredModal } from "@/components/Modal/SearchModal";

export const metadata: Metadata = {
  title: "Geekdev - we make fontend development easy ",
  description: "Blogs and Latest technology articles",
  
  openGraph:{
    title:'Geekdev - we make fontend development easy ',
    description:"Stay on top of the latest trends and best practices in frontend web development with our blog web application.",
    images:{
      url:"./favicon.ico"
    }

  },
  twitter:{
    title:'Geekdev - we make fontend development easy',
    description:"Stay on top of the latest trends and best practices in frontend web development with our blog web application.",
    images:{
      url:"./favicon.ico"
    },
    card:'summary'

  },
  keywords:"blog ,react.js , frontend, next.js, developer , chandra , cb , frontend tools , web development, web developer , mobile application",
  robots:{
    follow:true,
    googleBot:{
      index:true,
      follow:true,

    }
  }
};

async function getData() {
  const data = await Client.fetch(getBlogList);
  return data;
}

export default async function Home() {
  const data: blogDatatype[] = await getData();

  return (
    <>
    
    <Suspense fallback={<Skeletons />}>
      <div className="flex flex-col mt-8">
        {data?.map((post) => {
          return (
            <Link href={`/blog/${post.currentSlug}`} key={post?.title}>
              <Blogcard
                smalldescription={post?.smalldescription}
                title={post?.title}
                titleImage={post?.titleImage}
                slug={post?.currentSlug}
                content={post?.content}
                description={post?.smallcontent}
              />
            </Link>
          );
        })}
        
      </div>
    </Suspense>
    <Footer/>
    </>
  );
}
