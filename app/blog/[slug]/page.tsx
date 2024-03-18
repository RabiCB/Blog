import { getIndividualBlog } from "@/apis/BlogData";
import { Client, urlFor } from "@/app/lib/sanity";
import Footer from "@/components/footer/Footer";
import { PortableText } from "@portabletext/react";
import { Link } from "lucide-react";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
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
          url: urlFor(content?.titleImage).url(),
        },
      ],
      type: "website",
      title: content?.title,
      description: content?.smalldescription,
    },
    twitter: {
      images: [
        {
          url: urlFor(content?.titleImage).url(),
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
      <Link href="https://chandra-bhandari.com.np/" className="text-base text-center text-blue-500 tracking-wide ">
        Published By: Chandra Bhandari(Rabi)
      </Link>
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
      <div className="mt-16 prose prose-blue prose-xl lg:prose-2xl prose-headings:underline dark:prose-invert">
        <PortableText value={blog?.content} />
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Page;
