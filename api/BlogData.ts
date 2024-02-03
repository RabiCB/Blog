import { Client } from "@/app/lib/sanity";

export const getBlogList = `*[_type=="blog"] | order(_createdAt desc){
    title,
      smalldescription,
      "currentSlug":slug.current,
      titleImage
      
  }`;


  export async function getIndividualBlog(slug:string){
    const query =`*[_type=="blog" && slug.current=='${slug}']{
        "currenSlug":slug.current,
        title,
        content,
        keywords,
        
        smalldescription,
        titleImage
    }[0]`

    const data=await Client.fetch(query)
    return data
}
