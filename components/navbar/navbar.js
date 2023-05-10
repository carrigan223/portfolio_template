import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div
      style={{ height: "7vh" }}
      className="flex items-center w-full px-4 space-x-4 border border-gray-200 shadow-md"
    >
      <Link
        className="text-xl font-bold underline hover:text-blue-500"
        href={"/"}
      >
        Home
      </Link>
      <Link
        className="text-xl font-bold underline hover:text-blue-500"
        href={"/about"}
      >
        About
      </Link>
      <Link
        className="text-xl font-bold underline hover:text-blue-500"
        href={"/contact"}
      >
        Contact
      </Link>
      <Link
        className="text-xl font-bold underline hover:text-blue-500"
        href={"/project"}
      >
        Project
      </Link>
    </div>
  );
};

export default Navbar;
