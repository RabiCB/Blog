import { getBlogList } from "@/api/BlogData";
import { MetadataRoute } from "next";
import { Client } from "./lib/sanity";

const generateBlogPostsSitemapObjects = async () => {
  const res = await Client.fetch(getBlogList);
  return res;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://blogscb.netlify.app",
      priority: 1,
    
    },
    {
      url

    },
   

    ...(await generateBlogPostsSitemapObjects()).map((o: any) => ({
      url: `https://blogscb.netlify.app/blog/${o?.currentSlug}`,
      
    })),
  ];
}
