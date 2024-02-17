"use client";

import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Work_Sans} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import NextTopLoader from "nextjs-toploader";
import { useContext, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer/Footer";
import ContextProvider, { Appcontext } from "@/provider/ContextProvider";
import { MyVerticallyCenteredModal } from "@/components/Modal/SearchModal";
const worksans = Work_Sans({ subsets: ["latin-ext"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(()=>{
    scrollTo(0,0)
  })

  
  return (
    <html lang="en">
      <body className={worksans.className}>
      <ContextProvider>

   
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

           <Toaster toastOptions={{
            duration:1000
           }} position="top-right" />
          <main className=" px-6 py-3">
          <NextTopLoader
            color="#2299DD"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          />
          
            <Navbar />
            {children}
          <MyVerticallyCenteredModal/>
           
          </main>
        </ThemeProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
