import { getIndividualBlog } from "@/apis/BlogData";
import { Client, urlFor } from "@/app/lib/sanity";
import Footer from "@/components/footer/Footer";
import { PortableText } from "@portabletext/react";

import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

export async function generateMetadata(
  { params }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  let slug = params.slug;

  const content = await getIndividualBlog(slug);



  return {

    robots:{
   follow:true
    },
    title: content?.title,
    description: content?.smalldescription,
    keywords: content?.keywords,
    openGraph: {
      images: [
        {
          url: content?.titleImage? urlFor(content?.titleImage)?.url() : "",
        },
      ],
      type: "website",
      title: content?.title,
      description: content?.smalldescription,
    },
    twitter: {
      images: [
        {
          url: content?.titleImage? urlFor(content?.titleImage)?.url() : "",
        },
      ],

      title: content?.title,
      description: content?.smalldescription,
    },

    
  };
}

interface blogtype {
  title: string | null;
  content: any;
  titleImage: any;
}

const Page = async (props: any) => {
  const blog: blogtype = await getIndividualBlog(props?.params?.slug);

  return (
    <>
    <div className="mt-8 flex items-center justify-center w-full flex-col">
     
      <div className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
        <span>{blog?.title}</span>
      </div>
      {blog?.titleImage &&<Image
        width={800}
        height={800}
        alt={blog?.title ?? "blog-img"}
        className="rounded-md mt-8"
        src={urlFor(blog?.titleImage).url()}
      />}
      <Link  href="https://chandra-bhandari.com.np/"  target="_blank">
       <span  className="text-base mt-2 text-center text-black dark:text-white cursor-pointer">
        Published By: Chandra Bhandari(Rabi)
      </span>
      </Link>
      <div className="mt-16 prose prose-blue prose-xl lg:prose-2xl prose-headings:underline dark:prose-invert">
        <PortableText value={blog?.content} />
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Page;
