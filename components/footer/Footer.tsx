import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg  mt-6 dark:bg-[#020817]">
      <div className="w-full max-md:flex max-md:items-center max-md:flex-col max-md:justify-center gap-[1.2rem]   md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="#" className="hover:underline">
            Geekdev™
          </a>
        . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="/about" className="hover:underline me-4 md:me-6">
              About
            </Link>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <Link href="/contact" className="hover:underline me-4 md:me-6">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
