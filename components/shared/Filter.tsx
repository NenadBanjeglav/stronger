"use client";

import { formUrlQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface Props {
  filters: {
    name: string;
    value: string;
  }[];
  otherClasses?: string;
  containerClasses?: string;
}

const Filter = ({ filters, otherClasses, containerClasses }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleUpdateParams = (value: string) => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "filter",
      value,
    });

    router.push(newUrl, { scroll: false });
  };

  return (
    <div className={`relative ${containerClasses}`}>
      <Select
        onValueChange={(value) => handleUpdateParams(value)}
        defaultValue="All"
      >
        <SelectTrigger
          className={`${otherClasses} border border-light-800 bg-light-800 px-5 py-2.5 text-[14px] font-normal leading-[19.6px] text-dark-500`}
        >
          <div className="line-clamp-1 flex-1 text-left">
            <SelectValue defaultChecked={true} />
          </div>
        </SelectTrigger>
        <SelectContent className="border-none bg-light-900 text-[12px] font-normal leading-[15.6px] text-dark-500">
          <SelectGroup>
            {filters.map((el) => {
              return (
                <SelectItem
                  key={el.value}
                  value={el.value}
                  className="cursor-pointer focus:bg-light-800"
                >
                  {el.name}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filter;
