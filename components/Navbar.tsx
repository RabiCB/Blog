"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { ModeToggle } from "./Modetoggle";
import { useTheme } from "next-themes";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";

import { Button } from "./ui/button";
import { Appcontext } from "@/provider/ContextProvider";

const Navbar = () => {
  const theme = useTheme();

  const cnxt: any = useContext(Appcontext);

  return (
    <div className="flex  relative justify-between px-2 items-center">
      <Link href="/" className="font-bold text-3xl  max-md:text-[24px]">
        {/* Geek<span className='text-blue-500 '>dev</span> */}
        <div className="w-[140px] max-sm:w-[120px] max-sm:h-[20px] h-[25px] relative ">
          {theme?.theme == "dark" ? (
            <Image alt="geekdev" fill src={"/geekwhite.png"} />
          ) : (
            <Image fill alt="geekdev" src={"/geekdark.png"} />
          )}
        </div>
      </Link>
      <div className="flex items-center h-full   ">
        <ModeToggle />
        <Button
          onClick={cnxt?.handleOpenSearchModal}
          style={{ marginLeft: 8 }}
          variant="outline"
          size="default"

        >
            CTRL + K <CiSearch size={16} className="ml-2"/>
        
       
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
