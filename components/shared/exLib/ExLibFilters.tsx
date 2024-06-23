"use client";

import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants";
import { formUrlQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const ExLibFilters = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [active, setActive] = useState("all");

  const handleTypeClick = (item: string) => {
    setActive("");
    if (active === item) {
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "filter",
        value: null,
      });
      router.push(newUrl, { scroll: false });
    } else {
      setActive(item);
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "filter",
        value: item.toLowerCase(),
      });
      router.push(newUrl, { scroll: false });
    }
  };

  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-3 max-md:hidden md:flex">
      {HomePageFilters.map((el) => {
        return (
          <Button
            key={el.value}
            className={`rounded-lg px-6 py-3 text-[14px] font-medium capitalize leading-[18.2px] shadow-none ${
              active === el.value
                ? "bg-orange-100 text-orange-500 hover:bg-orange-100"
                : "bg-light-800 text-light-500 hover:bg-light-800"
            }`}
            onClick={() => handleTypeClick(el.value)}
          >
            {el.name}
          </Button>
        );
      })}
    </div>
  );
};

export default ExLibFilters;
