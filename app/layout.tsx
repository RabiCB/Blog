"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { AppProgressBar } from "next-nprogress-bar";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          
          <main className=" max-w-2xl  mx-auto px-4 py-5">
          <AppProgressBar
        height="5px"
        color="red"
        options={{ showSpinner: false }}
        
        shallowRouting
      />
            <Navbar/>
            {children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
