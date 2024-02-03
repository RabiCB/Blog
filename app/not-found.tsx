import { Button } from "@/components/ui/button";

import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full h-[60vh] flex-col items-center flex justify-center">
      Page Not Found
      <Link className="px-4 py-2 dark:text-[#000] mt-8 rounded-sm bg-white" href="/">
        Back To Homepage
      </Link>
      
     
    </div>
  );
};

export default NotFound;
