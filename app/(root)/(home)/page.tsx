import ExerciseCard from "@/components/ExerciseCard";
import Filter from "@/components/shared/Filter";
import Pagination from "@/components/shared/Pagination";
import ExLibFilters from "@/components/shared/exLib/ExLibFilters";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants";
import { getExercises } from "@/lib/actions/exercise.action";
import { ReloadIcon } from "@radix-ui/react-icons";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ExLib | Stronger App",
};

interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}

interface Props {
  exercises?: any[] | undefined;
  isNext?: boolean | undefined;
}

export default async function ExLib({ searchParams }: SearchParamsProps) {
  // @ts-ignore
  const { exercises, isNext }: Props = await getExercises({
    searchQuery: searchParams?.search || undefined,
    filter: searchParams?.filter || undefined,
    offset: Number(searchParams?.offset) || undefined,
  });

  const safeExercises = exercises || [];
  const safeIsNext = isNext || false;

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-[30px] font-bold leading-[42px] tracking-tighter text-dark-100">
          All Exercises
        </h1>

        <Link href="workout" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 text-light-900">
            New Workout
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/search.svg"
          placeholder="Search for exercises"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <ExLibFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {safeExercises.length > 0 ? (
          safeExercises.map((el: any) => (
            <ExerciseCard key={el.id} exercise={el} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center">
            <ReloadIcon className=" my-2 size-10 animate-spin text-orange-500" />
            <p className="text-dark-200">Fetching exercises...</p>
          </div>
        )}
      </div>

      <div className="mt-10">
        {safeExercises.length > 0 && (
          <Pagination
            offset={searchParams?.offset ? +searchParams.offset : 0}
            isNext={safeIsNext}
          />
        )}
      </div>
    </>
  );
}

export const revalidate = 0;
