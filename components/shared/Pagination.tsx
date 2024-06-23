/* eslint-disable tailwindcss/no-custom-classname */
"use client";

import React from "react";
import { Button } from "../ui/button";
import { formUrlQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  offset: number;
  isNext: boolean;
}

const Pagination = ({ offset, isNext }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePag = (direction: string) => {
    const nextPageNumber = direction === "prev" ? offset - 10 : offset + 10;

    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "offset",
      value: nextPageNumber.toString(),
    });
    router.push(newUrl);
  };

  return (
    <div className="flex w-full items-center justify-center gap-2">
      <Button
        disabled={offset === 0}
        onClick={() => handlePag("prev")}
        className="btn border-light-2 flex min-h-[36px] items-center justify-center gap-2 border"
      >
        <p className="text-dark-200">Prev</p>
      </Button>
      <div className="flex items-center justify-center rounded-md bg-orange-500 px-3.5 py-2">
        <p className="text-[14px] font-semibold leading-[18.2px] text-light-900">
          {Number(offset) === 0 ? 1 : Number(offset + 10) / 10}
        </p>
      </div>
      <Button
        disabled={!isNext}
        onClick={() => handlePag("next")}
        className="btn border-light-2 flex min-h-[36px] items-center justify-center gap-2 border"
      >
        <p className="text-dark-200">Next</p>
      </Button>
    </div>
  );
};

export default Pagination;
