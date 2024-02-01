import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
export const Client=createClient({
    apiVersion:'2023-05-03',
    dataset:'production',
    projectId:'l0zvy8d4',
    useCdn:false
})

const builder=imageUrlBuilder(Client)
export function urlFor(source:any){
    return builder.image(source)
}