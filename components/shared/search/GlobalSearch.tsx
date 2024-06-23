import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

const GlobalSearch = () => {
  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden">
      <div className="relative flex min-h-[56px] grow items-center gap-1 rounded-xl bg-light-800 px-4">
        <Image
          src="/search.svg"
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer"
        />

        <Input
          type="text"
          placeholder="Search Exercises"
          className="border-none bg-transparent text-[16px] font-normal leading-[22.4px] text-dark-400 shadow-none outline-none placeholder:text-light-400 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
