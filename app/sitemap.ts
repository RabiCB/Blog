import { getBlogList } from "@/apis/BlogData";
import { MetadataRoute } from "next";
import { Client } from "./lib/sanity";

const generateBlogPostsSitemapObjects = async () => {
  const res = await Client.fetch(getBlogList);
  return res;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://geekdev.netlify.app",
      priority: 1,
    
    },
    
   

    ...(await generateBlogPostsSitemapObjects()).map((o: any) => ({
      url: `https://geekdev.netlify.app/blog/${o?.currentSlug}`,
      
    })),
  ];
}
